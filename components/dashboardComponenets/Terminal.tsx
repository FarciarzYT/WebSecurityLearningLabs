'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface Command {
    name: string;
    description: string;
    action: (args: string[]) => string;
}

export default function CustomTerminal() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>([
        'Welcome to WebSec Terminal v1.0',
        'Type "help" to see available commands.',
        '',
    ]);
    const [hackProgress, setHackProgress] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);

    const commands: Command[] = [
        {
            name: 'help',
            description: 'Show available commands',
            action: () => {
                return commands.map(cmd => `${cmd.name} - ${cmd.description}`).join('\n');
            },
        },
        {
            name: 'clear',
            description: 'Clear terminal',
            action: () => {
                setOutput(['']);
                return '';
            },
        },
        {
            name: 'whoami',
            description: 'Display current user',
            action: () => {
                return 'cyberninja42 (Security Level: Beginner)';
            },
        },
        {
            name: 'scan',
            description: 'Scan target for vulnerabilities',
            action: (args) => {
                const target = args[0] || 'localhost';
                return `Scanning ${target}...\n\nFound 3 vulnerabilities:\n- XSS vulnerability on login page\n- Outdated Apache server (2.4.29)\n- Default admin credentials (/admin)`;
            },
        },
    ];

    const executeCommand = (cmd: string) => {
        const [commandName, ...args] = cmd.trim().split(' ');

        const command = commands.find(c => c.name === commandName);

        if (command) {
            return command.action(args);
        } else if (commandName) {
            return `Command not found: ${commandName}. Type 'help' for available commands.`;
        }
        return '';
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input;
            const result = executeCommand(cmd);

            setOutput(prev => [...prev, `> ${cmd}`, ...(result ? result.split('\n') : []), '']);
            setInput('');
        }
    };

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex flex-col h-full sm:w-[60%] w-full mx-auto p-8 bg-white/2 border-white/10 backdrop-blur-md rounded-3xl  text-white font-mono text-sm">
            <div
                ref={outputRef}
                className="flex-1 overflow-y-auto mb-2 whitespace-pre-wrap"
            >
                {output.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </div>
            <div className="flex">
                <span>$&nbsp;</span>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm"
                />
            </div>
        </div>
    );
}
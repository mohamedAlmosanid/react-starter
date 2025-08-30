/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // so you can use `describe`, `it`, `expect` without importing
        environment: 'jsdom', // simulate browser
        setupFiles: './src/setupTests.ts', // like Jest's setupFilesAfterEnv
    },
});

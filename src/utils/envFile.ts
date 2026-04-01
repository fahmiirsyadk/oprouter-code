import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

export function loadEnvFile(): void {
  const envPaths = [
    join(process.cwd(), '.env'),
    join(process.cwd(), '.env.local'),
    join(process.env.HOME ?? '', '.claude', '.env'),
  ];

  for (const envPath of envPaths) {
    if (!existsSync(envPath)) continue;
    
    try {
      const content = readFileSync(envPath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        
        const eqIndex = trimmed.indexOf('=');
        if (eqIndex === -1) continue;
        
        const key = trimmed.slice(0, eqIndex).trim();
        let value = trimmed.slice(eqIndex + 1).trim();
        
        // Remove quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        
        // Don't override existing env vars
        if (process.env[key] === undefined) {
          process.env[key] = value;
        }
      }
    } catch {
      // Ignore errors
    }
  }
}

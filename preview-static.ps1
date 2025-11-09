#!/usr/bin/env powershell

# Fazna Solar - Static Site Preview Script
# This script serves the exported static files for local testing

param(
    [int]$Port = 3000
)

if (-not (Test-Path "out")) {
    Write-Host "❌ No 'out' folder found. Please run 'npm run export' first." -ForegroundColor Red
    exit 1
}

Write-Host "🌐 Starting local preview server..." -ForegroundColor Green
Write-Host "📁 Serving files from: out/" -ForegroundColor White
Write-Host "🔗 Local URL: http://localhost:$Port" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

try {
    npx serve out -l $Port
} catch {
    Write-Host "❌ Failed to start server. Installing 'serve' package..." -ForegroundColor Red
    npm install -g serve
    npx serve out -l $Port
}
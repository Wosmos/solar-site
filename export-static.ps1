#!/usr/bin/env powershell

# Fazna Solar - Static Export Script
# This script builds and exports the website as static files

Write-Host "🚀 Starting Fazna Solar static export..." -ForegroundColor Green

# Clean previous build
if (Test-Path "out") {
    Write-Host "🧹 Cleaning previous export..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "out"
}

# Run the export
Write-Host "⚡ Building and exporting static files..." -ForegroundColor Cyan
npm run export

if ($LASTEXITCODE -eq 0) {
    # Get folder size
    $size = (Get-ChildItem -Path "out" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
    
    Write-Host "✅ Export completed successfully!" -ForegroundColor Green
    Write-Host "📁 Output folder: out/" -ForegroundColor White
    Write-Host "📊 Total size: $([math]::Round($size, 2)) MB" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Ready for deployment to any static hosting service!" -ForegroundColor Magenta
    Write-Host "📖 See out/README.md for deployment instructions" -ForegroundColor White
} else {
    Write-Host "❌ Export failed. Please check the error messages above." -ForegroundColor Red
    exit 1
}
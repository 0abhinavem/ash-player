# ASH Player - Git Setup Script
# Run this script to prepare your repository for GitHub

Write-Host "Setting up Git repository for ASH Player..." -ForegroundColor Cyan
Write-Host ""

# Navigate to project directory
Set-Location "C:\Users\ABHINAVE\.gemini\antigravity\scratch\ash-player"

# Configure Git
Write-Host "Configuring Git..." -ForegroundColor Yellow
git config user.email "your-email@example.com"

# Add all files
Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit - ASH Player music application"

# Check status
Write-Host ""
Write-Host "Git Status:" -ForegroundColor Green
git status

Write-Host ""
Write-Host "✅ Repository is ready!" -ForegroundColor Green
Write-Host ""
Write-Host "NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Go to https://github.com and create an account (if you don't have one)"
Write-Host "2. Click the '+' button and select 'New repository'"
Write-Host "3. Name it: ash-player"
Write-Host "4. Keep it PUBLIC (required for free GitHub Pages)"
Write-Host "5. Do NOT initialize with README"
Write-Host "6. Click 'Create repository'"
Write-Host ""
Write-Host "7. Run these commands in PowerShell:" -ForegroundColor Yellow
Write-Host "   git remote add origin https://github.com/YOUR-USERNAME/ash-player.git"
Write-Host "   git branch -M main"
Write-Host "   git push -u origin main"
Write-Host ""
Write-Host "8. Go to Settings → Pages → Select 'main' branch → Save"
Write-Host ""
Write-Host "Your website will be live at: https://YOUR-USERNAME.github.io/ash-player" -ForegroundColor Green
Write-Host ""

Pause

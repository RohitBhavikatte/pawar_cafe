$src = "C:\Users\ROHIT\.gemini\antigravity-ide\brain\2e66eb3b-d950-4b6f-b748-3706a1bf559b"
$dst = "C:\projects\pawar cafe\pawar-cafe-app\public\images"

New-Item -ItemType Directory -Force -Path $dst | Out-Null

$files = @(
    @{ src = "cheese_pizza_1780908560824.png"; dst = "cheese_pizza.png" },
    @{ src = "cold_coffee_1780908587048.png"; dst = "cold_coffee.png" },
    @{ src = "hakka_noodles_1780908547227.png"; dst = "hakka_noodles.png" },
    @{ src = "special_misal_1780908520488.png"; dst = "special_misal.png" },
    @{ src = "vada_pav_1780908533431.png"; dst = "vada_pav.png" },
    @{ src = "veg_burger_1780908574657.png"; dst = "veg_burger.png" },
    @{ src = "veg_steam_momos_1780908605261.png"; dst = "veg_steam_momos.png" },
    @{ src = "media__1780911952468.jpg"; dst = "founder.jpg" },
    @{ src = "media__1780912263243.png"; dst = "logo.png" }
)

foreach ($f in $files) {
    $srcPath = Join-Path $src $f.src
    $dstPath = Join-Path $dst $f.dst
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $dstPath -Force
        Write-Host "Copied: $($f.dst)"
    } else {
        Write-Host "MISSING: $($f.src)"
    }
}

Write-Host "---"
Get-ChildItem $dst | ForEach-Object { Write-Host "$($_.Name) - $($_.Length) bytes" }

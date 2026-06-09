$bytes = [System.IO.File]::ReadAllBytes("c:\projects\pawar cafe\pawar-cafe-app\components\MenuGrid.tsx")
$chars = [System.Text.Encoding]::UTF8.GetString($bytes, 950, 150)
$chars | Out-File "c:\projects\pawar cafe\pawar-cafe-app\output_chunk.txt"

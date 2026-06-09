$bytes = [System.IO.File]::ReadAllBytes("c:\projects\pawar cafe\pawar-cafe-app\components\MenuGrid.tsx")
$out = ""
for ($i=1000; $i -lt 1040; $i++) {
    if ($i -lt $bytes.Length) {
        $out += "{0:X2} " -f $bytes[$i]
    }
}
$out | Out-File "c:\projects\pawar cafe\pawar-cafe-app\bytes.txt"

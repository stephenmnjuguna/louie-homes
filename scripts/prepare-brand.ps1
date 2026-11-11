Add-Type -AssemblyName System.Drawing
$projectRoot = Split-Path -Parent $PSScriptRoot
$original = Join-Path $projectRoot 'public/brand/20261104_151653.jpg'
$backup = Join-Path $projectRoot '.private/brand/20261104_151653.jpg'
$clean = Join-Path $projectRoot 'public/brand/louie-homes-logo.jpg'
$source = if (Test-Path -LiteralPath $original) { $original } else { $backup }
$image = [System.Drawing.Image]::FromFile($source)
try {
  $orientation = if ($image.PropertyIdList -contains 274) { [int]$image.GetPropertyItem(274).Value[0] } else { 1 }
  switch ($orientation) {
    3 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
    6 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
    8 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
  }
  $crop = [System.Drawing.Rectangle]::new([int]($image.Width * .19), [int]($image.Height * .27), [int]($image.Width * .62), [int]($image.Height * .51))
  $output = [System.Drawing.Bitmap]::new($crop.Width, $crop.Height)
  try {
    $graphics = [System.Drawing.Graphics]::FromImage($output)
    try { $graphics.DrawImage($image, [System.Drawing.Rectangle]::new(0, 0, $crop.Width, $crop.Height), $crop, [System.Drawing.GraphicsUnit]::Pixel) } finally { $graphics.Dispose() }
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg' | Select-Object -First 1
    $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
    $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]94)
    $output.Save($clean, $encoder, $parameters)
  } finally { $output.Dispose() }
} finally { $image.Dispose() }
$check = [System.Drawing.Image]::FromFile($clean)
try {
  $privateTags = @($check.PropertyIdList | Where-Object { ($_ -ge 0 -and $_ -le 31) -or $_ -eq 34853 })
  if ($privateTags.Count -ne 0) { throw 'Public logo contains GPS metadata.' }
} finally { $check.Dispose() }
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $backup) | Out-Null
if (Test-Path -LiteralPath $original) { Move-Item -LiteralPath $original -Destination $backup }
Write-Output 'Public logo prepared without GPS metadata; original retained in ignored private backup.'

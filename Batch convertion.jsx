// Converter todos os arquivos PSD em JPG
#target photoshop

// Diretório com os PSD
var inputFolder = Folder.selectDialog("Selecione a pasta com os PSDs");

// Certeza da existencia dos arquivos
if (!inputFolder.exists) {
    alert("Diretório não encontrado: " + inputFolder.fsName);
} else {
    // seleção diretorio onde se encontra os .psd 
    var psdFiles = inputFolder.getFiles("*.psd");

    if (psdFiles.length === 0) {
        alert("Não há arquivos PSD no diretório: " + inputFolder.fsName);
    } else {
        // Loop pelos PSDs
        for (var i = 0; i < psdFiles.length; i++) {
            var file = psdFiles[i];
            var doc = app.open(file);

            // cria uma path de exportacao
            var jpgFile = new File(file.path + "/" + file.name.replace(/\.[^\.]+$/, "") + ".jpg");

            // opcoes JPG
            var jpgOptions = new JPEGSaveOptions();
            jpgOptions.quality = 12; // Max quality

            //!Troque o comentário de como queira salvar

            //var pngOptions = new PNGSaveOptions();
            //pngOptions.interlaced = false;

            // Sava como JPG
            doc.saveAs(jpgFile, jpgOptions, true);

            // fechar sem salvar
            doc.close(SaveOptions.DONOTSAVECHANGES);
        }

        alert(" Conversao completa\nSaved JPGs in:\n" + inputFolder.fsName);
    }
}

const LOC_COLUMN_NAME = "Location";

function doGet() {
    return HtmlService.createHtmlOutputFromFile("page");
}

function getLoc(value) {
  var destId = FormApp.getActiveForm().getDestinationId();
  var ss = SpreadsheetApp.openById(destId);
  var respSheet = ss.getSheets()[0];
  var data = respSheet.getDataRange().getValues();
  var headers = data[0];
  var numColumns = headers.length;
  var numResponses = data.length;

  respSheet.getRange(numResponses,numColumns).setValue(value);
  
}

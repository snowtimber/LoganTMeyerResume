var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById("transactions").innerHTML = xhttp.responseText;
  }
};
xhttp.open(
  "GET",
  "https://rff8fll6zc.execute-api.us-east-1.amazonaws.com/Prod/transactions?transactionid=5&type=PURCHASE&amount=500",
  true
);
xhttp.send();

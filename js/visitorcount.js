document.addEventListener('DOMContentLoaded', function () {
  const zooming = new Zooming({
    bgColor: 'rgb(0, 0, 0)',
    bgOpacity: 0.8,
    customSize: '100%'
  })

  zooming.listen('.img-zoomable')
})

var xhttp3 = new XMLHttpRequest();
xhttp3.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById("transactions").innerHTML = xhttp.responseText;
  }
};
xhttp3.open(
  "GET",
  "https://rff8fll6zc.execute-api.us-east-1.amazonaws.com/Prod/transactions?transactionid=5&type=PURCHASE&amount=500",
  true
);
xhttp3.send();

function check() {
  let nid = document.getElementById("nid").value;
  let sid = document.getElementById("sid").value;

  if (nid === "1096269640" && sid === "GSL24101715016") {
    document.getElementById("result").innerHTML =
      "✅ الإجازة المرضية سارية";
  } else {
    document.getElementById("result").innerHTML =
      "❌ لا توجد إجازة بهذه البيانات";
  }
}
function notify(message) {
  const notificationDiv = document.getElementById('notification');
  notificationDiv.style.display = 'block';
  notificationDiv.textContent = message;
  notificationDiv.addEventListener('click', onClickHideDiv);

  function onClickHideDiv(ev){
    ev.target.style.display = 'none';
  }

}

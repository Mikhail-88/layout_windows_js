import checkNumInput from './checkNumInput';

const form = (state) => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

  checkNumInput('input[name="user_phone"]');

  const msg = {
    loading: 'Загрузка...',
    success: 'Спасибо, скоро мы свяжемся с Вами!',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = msg.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
  };

  forms.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMsg = document.createElement('div');
      statusMsg.classList.add('status');
      item.appendChild(statusMsg);

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          statusMsg.textContent = msg.success;
        })
        .catch(err => {
          console.log(err);
          statusMsg.textContent = msg.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMsg.remove();
          }, 5000);
        });
    });
  });
};

export default form;
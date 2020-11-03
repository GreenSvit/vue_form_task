<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="https://echo.htmlacademy.ru" method="POST" class="main-form">
      <fieldset>
        <label>
          Фамилия
          <input name="surname" type="text" required />
        </label>
        <label>
          Имя
          <input name="name" type="text" required />
        </label>
        <label>
          Отчество
          <input name="midde name" type="text" />
        </label>
        <label>
          Дата рождения
          <input name="date of birth" type="date" required />
        </label>
        <label>
          Номер телефона
          <input name="phone" type="tel" value="+7" required />
        </label>
        <label>
          Группа клиентов
          <select multiple name="client group" id="" required size="1">
            <option value="vip">VIP</option>
            <option value="problem">Проблемные</option>
            <option value="insured">ОМС</option>
          </select>
        </label>
        <label>
          Лечащий врач
          <select name="doctor" id="">
            <option value="ivanov">Иванов</option>
            <option value="zakharov">Захаров</option>
            <option value="chernysheva">Чернышева</option>
          </select>
        </label>
        <label>
          Не отправлять СМС
          <input name="dont send sms" type="checkbox" />
        </label>
        <button type="button">Следующий шаг</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

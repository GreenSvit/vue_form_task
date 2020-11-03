<template>
  <div id="app">
    <h1>Registration</h1>
    <form class="form" @submit.prevent="checkForm">
      <fieldset v-show="step === 1">
        <legend>Основные данные</legend>
        <label>
          Фамилия
          <input v-model.trim="form.surname" type="text" />
        </label>
        <label>
          Имя
          <input v-model.trim="form.name" type="text" />
        </label>
        <label>
          Отчество
          <input v-model.trim="form.middleName" type="text" />
        </label>
        <label>
          Дата рождения
          <input v-model.trim="form.dateOfBirth" type="date" />
        </label>
        <label>
          Номер телефона
          <input v-model.trim="form.phone" type="tel" />
        </label>
        <fieldset>
          <legend>Пол</legend>
          <label>
            <input
              name="gender"
              type="radio"
              value="female"
              v-model="form.gender"
            />
            Женщина
          </label>
          <label>
            <input
              name="gender"
              type="radio"
              value="male"
              v-model="form.gender"
            />
            Мужчина
          </label>
        </fieldset>
        <label>
          Группа клиентов
          <select multiple v-model.trim="form.clientGroup">
            <option
              v-for="(clientGroup, index) in clientGroups"
              :value="clientGroup.value"
              :key="index"
            >
              {{ clientGroup.label }}
            </option>
          </select>
        </label>
        <label>
          Лечащий врач
          <select v-model.trim="form.doctor">
            <option
              v-for="(doctor, index) in doctors"
              :value="doctor.value"
              :key="index"
            >
              {{ doctor.label }}
            </option>
          </select>
        </label>
        <label>
          Не отправлять СМС
          <input v-model.trim="form.noSms" type="checkbox" />
        </label>
        <button @click="nextStep" type="button">Следующий шаг</button>
      </fieldset>

      <fieldset v-show="step === 1">
        <legend>Адрес</legend>
        <label>
          Индекс
          <input v-model.trim="form.postIndex" type="number" />
        </label>
        <label>
          Страна
          <input v-model.trim="form.country" type="text" />
        </label>
        <label>
          Область
          <input v-model.trim="form.region" type="text" />
        </label>
        <label>
          Город
          <input v-model.trim="form.city" type="text" />
        </label>
        <label>
          Улица
          <input v-model.trim="form.street" type="text" />
        </label>
        <label>
          Дом
          <input v-model.trim="form.building" type="number" />
        </label>

        <button @click="previousStep" type="button">Предыдущий шаг</button>
        <button @click="nextStep" type="button">Следующий шаг</button>
      </fieldset>

      <fieldset v-show="step === 1">
        <legend>Документ</legend>
        <label>
          Тип докумемнта
          <select v-model.trim="form.documentType">
            <option value="passport">Паспорт</option>
            <option value="birth certificate">Свидетельство о рождении</option>
            <option value="driver's license">Вод. удостоверение</option>
          </select>
        </label>
        <label>
          Серия
          <input v-model.trim="form.passportSeries" type="number" />
        </label>
        <label>
          Номер
          <input v-model.trim="form.passportNumber" type="number" />
        </label>
        <label>
          Кем выдан
          <input v-model.trim="form.issuedBy" type="text" />
        </label>
        <label>
          Дата выдачи
          <input v-model.trim="form.dateOfIssue" type="date" />
        </label>

        <button @click="previousStep" type="button">Предыдущий шаг</button>
        <button type="submit">Зарегистрироваться</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  numeric,
  alphaNumeric,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      step: 1,

      form: {
        name: "",
        surname: "",
        middleName: "",
        dateOfBirth: "",
        phone: 7,
        gender: "female",
        clientGroup: [],
        doctor: "ivanov",
        noSms: false,
        postIndex: "",
        country: "",
        region: "",
        city: "",
        street: "",
        building: "",
        documentType: "",
        passportSeries: "",
        passportNumber: "",
        issuedBy: "",
      },

      clientGroups: [
        {
          label: "VIP",
          value: "vip",
        },
        {
          label: "Проблемные",
          value: "problem",
        },
        {
          label: "ОМС",
          value: "insured",
        },
      ],
      doctors: [
        {
          label: "Иванов",
          value: "ivanov",
        },
        {
          label: "Захаров",
          value: "zakharov",
        },
        {
          label: "Чернышева",
          value: "Chernysheva",
        },
      ],
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    previousStep() {
      this.step--;
    },
    checkForm() {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        alert("Ошибка");
      }
    },
  },
  validations: {
    form: {
      name: { required, maxLength: maxLength(30) },
      surname: { required, maxLength: maxLength(30) },
      middleName: { alphaNumeric, maxLength: maxLength(30) },
      dateOfBirth: { required },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        numeric,
      },
      gender: { required },
      clientGroup: { required },
      postIndex: { maxLength: maxLength(10) },
      country: { alphaNumeric, maxLength: maxLength(30) },
      region: { alphaNumeric, maxLength: maxLength(30) },
      city: { required, alphaNumeric, maxLength: maxLength(30) },
      street: { alphaNumeric, maxLength: maxLength(30) },
      building: { alphaNumeric, maxLength: maxLength(30) },
      documentType: { required },
      passportSeries: { alphaNumeric, maxLength: maxLength(30) },
      passportNumber: { alphaNumeric, maxLength: maxLength(30) },
      issuedBy: { alphaNumeric, maxLength: maxLength(30) },
      dateOfIssue: { required },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00cfff;
  margin-top: 60px;
}

.form {
  max-width: 1000px;
  margin: 0 auto;
}

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

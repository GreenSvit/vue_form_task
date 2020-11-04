<template>
  <div id="app">
    <h1>Registration</h1>
    <form class="form" @submit.prevent="checkForm">
      <fieldset class="form__field" v-show="step === 1">
        <legend class="form__legend">Основные данные</legend>
        <label>
          Фамилия
          <input
            class="form__input"
            :class="$v.form.surname.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.surname"
            type="text"
          />
        </label>
        <label>
          Имя
          <input
            class="form__input"
            :class="$v.form.name.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.name"
            type="text"
          />
        </label>
        <label>
          Отчество
          <input
            class="form__input"
            :class="$v.form.middleName.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.middleName"
            type="text"
          />
        </label>
        <label>
          Дата рождения
          <input
            class="form__input"
            :class="$v.form.dateOfBirth.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.dateOfBirth"
            type="date"
            placeholder="ДД.ММ.ГГГ"
          />
        </label>
        <label>
          Номер телефона
          <input
            class="form__input"
            :class="$v.form.phone.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.phone"
            type="tel"
          />
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
          <select class="form__input" multiple v-model.trim="form.clientGroup">
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
          <select class="form__input" v-model.trim="form.doctor">
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

      <fieldset class="form__field" v-show="step === 1">
        <legend class="form__legend">Адрес</legend>
        <label>
          Индекс
          <input
            class="form__input"
            :class="$v.form.postIndex.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.postIndex"
            type="number"
          />
        </label>
        <label>
          Страна
          <input
            class="form__input"
            :class="$v.form.country.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.country"
            type="text"
          />
        </label>
        <label>
          Область
          <input
            class="form__input"
            :class="$v.form.region.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.region"
            type="text"
          />
        </label>
        <label>
          Город
          <input
            class="form__input"
            :class="$v.form.city.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.city"
            type="text"
          />
        </label>
        <label>
          Улица
          <input
            class="form__input"
            :class="$v.form.street.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.street"
            type="text"
          />
        </label>
        <label>
          Дом
          <input
            class="form__input"
            :class="$v.form.building.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.building"
            type="number"
          />
        </label>

        <button @click="previousStep" type="button">Предыдущий шаг</button>
        <button @click="nextStep" type="button">Следующий шаг</button>
      </fieldset>

      <fieldset class="form__field" v-show="step === 1">
        <legend class="form__legend">Документ</legend>
        <label>
          Тип докумемнта
          <select class="form__input" v-model.trim="form.documentType">
            <option
              v-for="(documentType, index) in documentTypes"
              :value="documentType.value"
              :key="index"
            >
              {{ documentType.label }}
            </option>
          </select>
        </label>
        <label>
          Серия
          <input
            class="form__input"
            :class="$v.form.passportSeries.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.passportSeries"
            type="number"
          />
        </label>
        <label>
          Номер
          <input
            class="form__input"
            :class="$v.form.passportNumber.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.passportNumber"
            type="number"
          />
        </label>
        <label>
          Кем выдан
          <input
            class="form__input"
            :class="$v.form.issuedBy.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.issuedBy"
            type="text"
          />
        </label>
        <label>
          Дата выдачи
          <input
            class="form__input"
            :class="$v.form.dateOfIssue.$error ? 'form__input--invalid' : ''"
            v-model.trim="form.dateOfIssue"
            type="date"
            placeholder="ДД.ММ.ГГГ"
          />
        </label>

        <button @click="previousStep" type="button">Предыдущий шаг</button>
        <button type="submit">Зарегистрироваться</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";

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
        documentType: "passport",
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
      documentTypes: [
        {
          label: "Паспорт",
          value: "passport",
        },
        {
          label: "Свидетельство о рождении",
          value: "birth_sertificate",
        },
        {
          label: "Вод. удостоверение",
          value: "drivers license",
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
      if (!this.$v.form.$error) {
        alert("Отправлено!");
      }
    },
  },
  validations: {
    form: {
      name: { required, maxLength: maxLength(50) },
      surname: { required, maxLength: maxLength(50) },
      middleName: { maxLength: maxLength(50) },
      dateOfBirth: { required },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      gender: { required },
      clientGroup: { required },
      postIndex: { maxLength: maxLength(20) },
      country: { maxLength: maxLength(50) },
      region: { maxLength: maxLength(50) },
      city: { required, maxLength: maxLength(50) },
      street: { maxLength: maxLength(50) },
      building: { maxLength: maxLength(50) },
      documentType: { required },
      passportSeries: { maxLength: maxLength(50) },
      passportNumber: { maxLength: maxLength(50) },
      issuedBy: { maxLength: maxLength(50) },
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

.form__field {
  border: none;
}

.form__legend {
  font-size: 22px;
}

.form__input {
  padding: 5px;
  background-color: #d1fbff;
  border: 2px solid #001b4a;
  border-radius: 3px;
  flex-grow: 1;

  &--invalid {
    border-color: red;
  }
}

label {
  width: 400px;
  display: flex;
  margin-top: 15px;
  align-items: center;
}
</style>

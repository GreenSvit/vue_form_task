<template>
  <div id="app">
    <h1>Registration</h1>
    <form class="form" @submit.prevent="checkForm3">
      <fieldset class="form__field" v-show="step === 1">
        <legend class="form__legend">Основные данные</legend>
        <div class="form__wrapper">
          <label class="form__label">
            Фамилия:*
            <input
              class="form__input"
              :class="$v.form1.surname.$error ? 'form__input--invalid' : ''"
              v-model.trim="form1.surname"
              type="text"
            />
            <p
              v-if="$v.form1.surname.$dirty && !$v.form1.surname.required"
              class="form__invalid-message"
            >
              Обязательное поле
            </p>
            <p
              v-if="$v.form1.surname.$dirty && !$v.form1.surname.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Имя:*
            <input
              class="form__input"
              :class="$v.form1.name.$error ? 'form__input--invalid' : ''"
              v-model.trim="form1.name"
              type="text"
            />
            <p
              v-if="$v.form1.name.$dirty && !$v.form1.name.required"
              class="form__invalid-message"
            >
              Обязательное поле
            </p>
            <p
              v-if="$v.form1.name.$dirty && !$v.form1.name.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Отчество:
            <input
              class="form__input"
              :class="$v.form1.middleName.$error ? 'form__input--invalid' : ''"
              v-model.trim="form1.middleName"
              type="text"
            />
            <p
              v-if="
                $v.form1.middleName.$dirty && !$v.form1.middleName.maxLength
              "
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Дата рождения:*
            <input
              class="form__input"
              :class="$v.form1.dateOfBirth.$error ? 'form__input--invalid' : ''"
              v-model.trim="form1.dateOfBirth"
              type="date"
            />
            <p
              v-if="
                $v.form1.dateOfBirth.$dirty && !$v.form1.dateOfBirth.required
              "
              class="form__invalid-message"
            >
              Обязательное поле
            </p>
          </label>
          <label class="form__label">
            Телефон:*
            <input
              class="form__input"
              :class="$v.form1.phone.$error ? 'form__input--invalid' : ''"
              v-model.trim="form1.phone"
              type="tel"
              placeholder="пример: 7 987 654 32 10"
            />
            <p
              v-if="$v.form1.phone.$dirty && !$v.form1.phone.required"
              class="form__invalid-message"
            >
              Обязательное поле
            </p>
            <p
              v-if="$v.form1.phone.$dirty && !$v.form1.phone.isPhoneNumber"
              class="form__invalid-message"
            >
              Введите 11 цифр номера телефона, начиная с 7
            </p>
          </label>
          <fieldset class="form__gender-field">
            <div class="gender-wrapper">
              <label class="form__label">
                <input
                  name="gender"
                  type="radio"
                  value="female"
                  v-model="form1.gender"
                />
                Женщина
              </label>
              <label class="form__label">
                <input
                  name="gender"
                  type="radio"
                  value="male"
                  v-model="form1.gender"
                />
                Мужчина
              </label>
            </div>
          </fieldset>
          <label class="form__label">
            Группа клиентов:*
            <select
              class="form__input"
              multiple
              v-model.trim="form1.clientGroup"
            >
              <option
                v-for="(clientGroup, index) in clientGroups"
                :value="clientGroup.value"
                :key="index"
              >
                {{ clientGroup.label }}
              </option>
            </select>
            <p
              v-if="
                $v.form1.clientGroup.$dirty && !$v.form1.clientGroup.required
              "
              class="form__invalid-message"
            >
              Обязательное поле
            </p>
          </label>
          <label class="form__label">
            Лечащий врач:
            <select class="form__input" v-model.trim="form1.doctor">
              <option
                v-for="(doctor, index) in doctors"
                :value="doctor.value"
                :key="index"
              >
                {{ doctor.label }}
              </option>
            </select>
          </label>
          <label class="form__label">
            Не отправлять СМС
            <input v-model.trim="form1.noSms" type="checkbox" />
          </label>
        </div>
        <button class="form__button" @click="checkForm1" type="button">
          Следующий шаг
        </button>
      </fieldset>

      <fieldset class="form__field" v-show="step === 2">
        <legend class="form__legend">Адрес</legend>
        <div class="form__wrapper">
          <label class="form__label">
            Индекс:
            <input
              class="form__input"
              :class="$v.form2.postIndex.$error ? 'form__input--invalid' : ''"
              v-model.trim="form2.postIndex"
              type="number"
            />
            <p
              v-if="$v.form2.postIndex.$dirty && !$v.form2.postIndex.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Страна:
            <input
              class="form__input"
              :class="$v.form2.country.$error ? 'form__input--invalid' : ''"
              v-model.trim="form2.country"
              type="text"
            />
            <p
              v-if="$v.form2.country.$dirty && !$v.form2.country.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Область:
            <input
              class="form__input"
              :class="$v.form2.region.$error ? 'form__input--invalid' : ''"
              v-model.trim="form2.region"
              type="text"
            />
            <p
              v-if="$v.form2.region.$dirty && !$v.form2.region.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Город:*
            <input
              class="form__input"
              :class="$v.form2.city.$error ? 'form__input--invalid' : ''"
              v-model.trim="form2.city"
              type="text"
            />
            <p
              v-if="$v.form2.city.$dirty && !$v.form2.city.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
            <p
              v-if="$v.form2.city.$dirty && !$v.form2.city.required"
              class="form__invalid-message"
            >
              Обязательное поле
            </p>
          </label>
          <label class="form__label">
            Улица:
            <input
              class="form__input"
              :class="$v.form2.street.$error ? 'form__input--invalid' : ''"
              v-model.trim="form2.street"
              type="text"
            />
            <p
              v-if="$v.form2.street.$dirty && !$v.form2.street.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Дом:
            <input
              class="form__input"
              :class="$v.form2.building.$error ? 'form__input--invalid' : ''"
              v-model.trim="form2.building"
            />
            <p
              v-if="$v.form2.building.$dirty && !$v.form2.building.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
        </div>
        <button class="form__button" @click="previousStep" type="button">
          Назад
        </button>
        <button class="form__button" @click="checkForm2" type="button">
          Следующий шаг
        </button>
      </fieldset>

      <fieldset class="form__field" v-show="step === 3">
        <legend class="form__legend">Документ</legend>
        <div class="form__wrapper">
          <label class="form__label">
            Тип:
            <select class="form__input" v-model.trim="form3.documentType">
              <option
                v-for="(documentType, index) in documentTypes"
                :value="documentType.value"
                :key="index"
              >
                {{ documentType.label }}
              </option>
            </select>
          </label>
          <label class="form__label">
            Серия:
            <input
              class="form__input"
              :class="$v.form3.docSeries.$error ? 'form__input--invalid' : ''"
              v-model.trim="form3.docSeries"
              type="text"
            />
            <p
              v-if="$v.form3.docSeries.$dirty && !$v.form3.docSeries.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Номер:
            <input
              class="form__input"
              :class="$v.form3.docNumber.$error ? 'form__input--invalid' : ''"
              v-model.trim="form3.docNumber"
              type="number"
            />
            <p
              v-if="$v.form3.docNumber.$dirty && !$v.form3.docNumber.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Кем выдан:
            <input
              class="form__input"
              :class="$v.form3.issuedBy.$error ? 'form__input--invalid' : ''"
              v-model.trim="form3.issuedBy"
              type="text"
            />
            <p
              v-if="$v.form3.issuedBy.$dirty && !$v.form3.issuedBy.maxLength"
              class="form__invalid-message"
            >
              Количество символов не должно превышать 50
            </p>
          </label>
          <label class="form__label">
            Дата выдачи:*
            <input
              class="form__input"
              :class="$v.form3.dateOfIssue.$error ? 'form__input--invalid' : ''"
              v-model.trim="form3.dateOfIssue"
              type="date"
              placeholder="ДД.ММ.ГГГ"
            />
            <p
              v-if="
                $v.form3.dateOfIssue.$dirty && !$v.form3.dateOfIssue.required
              "
              class="form__invalid-message"
            >
              Обязательное поле
            </p>
          </label>
        </div>
        <button class="form__button" @click="previousStep" type="button">
          Назад
        </button>
        <button class="form__button" type="submit">Зарегистрироваться</button>
      </fieldset>
    </form>
    <div v-if="registered" class="popup">
      <div class="popup__inner">
        <div class="popup__content">
          <a @click="registered = false" class="popup__close" href="#">X</a>Вы
          успешно зарегистрированы!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      step: 1,
      registered: false,

      form1: {
        name: "",
        surname: "",
        middleName: "",
        dateOfBirth: "",
        phone: "",
        gender: "female",
        noSms: false,
        doctor: "ivanov",
        clientGroup: [],
      },
      form2: {
        postIndex: "",
        country: "",
        region: "",
        city: "",
        street: "",
        building: "",
      },
      form3: {
        documentType: "passport",
        docSeries: "",
        docNumber: "",
        issuedBy: "",
        dateOfIssue: "",
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
    previousStep() {
      if (this.step > 0) {
        this.step--;
      }
    },
    checkForm1() {
      this.$v.form1.$touch();
      if (!this.$v.form1.$error) {
        this.step++;
      }
    },
    checkForm2() {
      this.$v.form2.$touch();
      if (!this.$v.form2.$error) {
        this.step++;
      }
    },
    checkForm3() {
      this.$v.form3.$touch();
      if (!this.$v.form3.$error) {
        this.registered = true;
      }
    },
  },
  validations: {
    form1: {
      name: { required, maxLength: maxLength(50) },
      surname: { required, maxLength: maxLength(50) },
      middleName: { maxLength: maxLength(50) },
      dateOfBirth: { required },
      phone: {
        required,
        isPhoneNumber: (num) => {
          num = num.replace(/[+\s]/g, "");
          return (
            (/7[0-9]{10}/.test(num) && num.length === 11) || num.length === 0
          );
        },
      },
      gender: { required },
      clientGroup: { required },
    },
    form2: {
      postIndex: { maxLength: maxLength(20) },
      country: { maxLength: maxLength(50) },
      region: { maxLength: maxLength(50) },
      city: { required, maxLength: maxLength(50) },
      street: { maxLength: maxLength(50) },
      building: { maxLength: maxLength(50) },
    },
    form3: {
      documentType: { required },
      docSeries: { maxLength: maxLength(50) },
      docNumber: { maxLength: maxLength(50) },
      issuedBy: { maxLength: maxLength(50) },
      dateOfIssue: { required },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: $Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $lightBlue;
  margin-top: 60px;
}

.form {
  box-sizing: border-box;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: $mobileWidth) {
    padding: 0 2vw;
  }
}

.form__field {
  border: none;
  gap: 100px;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.form__legend {
  font-size: 25px;
}

.form__input {
  box-sizing: border-box;
  display: block;
  font-size: 20px;
  margin-left: 10px;
  padding: 5px;
  background-color: $mainWhite;
  border: 2px solid $darkBlue;
  border-radius: 5px;
  flex-grow: 1;

  &--invalid {
    border-color: $error;
  }

  @media (max-width: $mobileWidth) {
    font-size: 15px;
  }
}

.form__label {
  box-sizing: border-box;
  width: 400px;
  display: flex;
  margin-top: 15px;
  align-items: center;
  padding-bottom: 10px;
  position: relative;
  font-size: 20px;

  @media (max-width: $mobileWidth) {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    font-size: 15px;
  }
}

.form__invalid-message {
  font-size: 13px;
  color: $error;
  position: absolute;
  bottom: -22px;
  width: 100%;
  text-align: center;

  @media (max-width: $mobileWidth) {
    font-size: 10px;
    bottom: -15px;
  }
}

.form__wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
}

.form__gender-field {
  border: none;
  width: 400px;

  @media (max-width: $mobileWidth) {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
  }
}

.form__gender-field .form__label {
  width: auto;
}

.gender-wrapper {
  display: flex;
  justify-content: space-between;
}

.form__button {
  font-size: 20px;
  border: 2px solid $lightBlue;
  background-color: inherit;
  color: $mainWhite;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 20px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    background-color: #213474;
  }

  @media (max-width: $mobileWidth) {
    font-size: 15px;
  }
}

.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba($black, 0.7);
  top: 0;
  left: 0;
}

.popup__inner {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
}

.popup__content {
  box-sizing: border-box;
  position: relative;
  width: 500px;
  height: 300px;
  text-align: center;
  background-color: $mainWhite;
  border: 3px solid $darkBlue;
  padding-top: 130px;
  border-radius: 5px;
  color: $darkBlue;
  font-size: 25px;
}

.popup__close {
  position: absolute;
  right: 10px;
  top: 10px;
  display: block;
  text-decoration: none;
  color: $darkBlue;
}
</style>

<template>
  <div class="bg-gray-100 p-4 w-full h-full min-h-screen">
    <div class="relative">
      <div class="absolute left-1 top-1 flex items-center gap-2">
        <p class="bg-green-500 py-2 px-4 text-white rounded-lg">{{ authUser.cellphone }}</p>
        <a @click="logout" class="bg-red-500 text-white py-2 px-4 rounded-lg cursor-pointer"
          >خروج</a
        >
      </div>
    </div>

    <div
      class="flex flex-col container mx-auto justify-center mt-20 space-y-12 items-center"
    >
      <div class="flex w-5/12 justify-between items-center">
        <div class="bg-white rounded-lg p-2">
          <p>اطلاعات اولیه</p>
        </div>

        <div class="bg-white rounded-lg p-2">
          <p>بررسی اطلاعات</p>
        </div>

        <div class="bg-white rounded-lg p-2">
          <p>ثبت سفارش</p>
        </div>

        <div class="bg-white rounded-lg p-2">
          <p>ثبت کاربران</p>
        </div>
      </div>

      <FormKit
        type="form"
        @submit="createProfile"
        :incomplete-message="false"
        :actions="false"
        v-if="isSection(1000)"
      >
        <div class="bg-white shadow-lg p-4 w-full rounded-lg">
          <div class="flex flex-col space-y-10">
            <div class="flex justify-start items-center space-x-5">
              <label class="text-green-500">اطلاعات شخصی</label>
            </div>

            <div class="grid grid-cols-2 gap-10">
              <div>
                <FormKit
                  type="text"
                  name="name"
                  id="name"
                  label="نام و نام خانوادگی"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{
                    required: 'نام و نام خانوادگی الزامیست',
                  }"
                />
              </div>

              <div>
                <FormKit
                  type="text"
                  name="national"
                  id="national"
                  label="کد ملی"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'کدملی الزامیست' }"
                />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-5">
              <div>
                <FormKit
                  type="text"
                  name="cellphone"
                  id="cellphone"
                  label="شماره همراه"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'شماره همراه الزامیست' }"
                />
              </div>

              <div>
                <FormKit
                  type="text"
                  name="email"
                  id="email"
                  label="آدرس ایمیل"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'آدرس ایمیل الزامیست' }"
                />
              </div>

              <div class="flex flex-col space-y-5">
                <FormKit
                  type="text"
                  name="phone"
                  id="phone"
                  label="شماره تلفن ثابت"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'تلفن ثابت الزامیست' }"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-5">
              <div class="flex flex-col space-y-5">
                <FormKit
                  type="textarea"
                  name="address"
                  id="address"
                  label="آدرس محل سکونت"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'آدرس محل سکونت الزامیست' }"
                />
              </div>
            </div>

            <div class="flex justify-start items-center space-x-5">
              <label class="text-green-500">اطلاعات رستوران</label>
            </div>

            <div class="grid grid-cols-2 gap-5">
              <div>
                <FormKit
                  type="text"
                  name="shop_name"
                  id="shop_name"
                  label="نام فروشگاه"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'نام فروشگاه الزامیست' }"
                />
              </div>

              <div>
                <FormKit
                  type="text"
                  name="shop_type"
                  id="shop_type"
                  label="نوع فروشگاه"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'نوع فروشگاه الزامیست' }"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-5">
              <div>
                <FormKit
                  type="text"
                  name="shop_phone"
                  id="shop_phone"
                  label="شماره تماس فروشگاه"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{
                    required: 'شماره تماس فروشگاه الزامیست',
                  }"
                />
              </div>

              <div>
                <FormKit
                  type="text"
                  name="shop_city"
                  id="shop_city"
                  label="شهر"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: ' شهر الزامیست' }"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-5">
              <div class="flex flex-col space-y-5">
                <FormKit
                  type="textarea"
                  name="shop_address"
                  id="shop_address"
                  label="آدرس فروشگاه"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: 'آدرس فروشگاه الزامیست' }"
                />
              </div>
            </div>

            <div class="flex justify-start items-center space-x-5">
              <label class="text-green-500">ارسال مدارک</label>
            </div>

            <div class="flex justify-start items-center space-x-5">
              <p>
                لطفا تصویر کارت ملی، جواز کسب و سند مالکیت خود را ارسال کنید.
              </p>
            </div>

            <ClientOnly fallback-tag="span" fallback="در حال بارگذاری ...">
              <Upload @documents="(document) => (documents = document)" />
            </ClientOnly>

            <div class="flex justify-start items-center space-x-5">
              <label>اطلاعات بانکی</label>
            </div>

            <div class="grid grid-cols-2 gap-5">
              <div class="flex flex-col space-y-5">
                <FormKit
                  type="text"
                  name="bank_name"
                  id="bank_name"
                  label="نام بانک"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: ' نام بانک الزامیست' }"
                />
              </div>

              <div class="flex flex-col space-y-5">
                <FormKit
                  type="text"
                  name="bank_sheba"
                  id="bank_sheba"
                  label="شماره شبا"
                  label-class="text-sm"
                  input-class="w-full bg-gray-100 rounded-lg p-2"
                  messages-class="text-red-500 text-sm"
                  validation="required"
                  :validation-messages="{ required: ' شماره شبا الزامیست' }"
                />
              </div>
            </div>

            <div>
              <FormKit
                type="submit"
                input-class="bg-green-500 text-white w-full p-2 rounded-lg"
              >
                ارسال درخواست
              </FormKit>
            </div>
          </div>
        </div>
      </FormKit>

      <div class="w-7/12" v-if="isSection(2000)">
        <div class="flex flex-col space-y-10">
          <div
            v-if="profile.status == 'pending'"
            class="bg-blue-100 border border-blue-500 rounded-lg p-4"
          >
            <p class="text-blue-500">اطلاعات شما در حال بررسی می باشد.</p>
          </div>

          <div
            v-if="profile.status == 'approved'"
            class="bg-green-100 border border-green-500 rounded-lg p-4"
          >
            <p class="text-green-500">اطلاعات شما تایید شده است.</p>
          </div>

          <div
            v-if="profile.status == 'unapproved'"
            class="bg-red-100 border border-red-500 rounded-lg p-4"
          >
            <p class="text-red-500">متاسفانه اطلاعات شما تایید نشده است.</p>
          </div>

          <div class="grid grid-cols-1 gap-10">
            <div
              class="bg-white border border-gray-200 rounded-lg p-4 flex flex-col space-y-5"
            >
              <div class="flex justify-start items-center space-x-5">
                <label>اطلاعات شخصی</label>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">نام و نام خانوادگی</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.name }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">شماره همراه</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.cellphone }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">شماره ثابت</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.phone }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">کد ملی</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.national }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">ایمیل</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.email }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">آدرس</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.address }}
                  </label>
                </div>
              </div>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-lg p-4 flex flex-col space-y-5"
            >
              <div class="flex justify-start items-center space-x-5">
                <label>اطلاعات فروشگاه</label>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">نام فروشگاه</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.shop_name }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">نوع فروشگاه</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.shop_type }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">شماره تماس</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.shop_phone }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">آدرس</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.shop_address }}
                  </label>
                </div>
              </div>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-lg p-4 flex flex-col space-y-5"
            >
              <div class="flex justify-start items-center space-x-5">
                <label>اطلاعات مالی</label>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">نام بانک</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.bank_name }}
                  </label>
                </div>
              </div>

              <div class="flex justify-between items-center space-x-5">
                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-500">شماره شبا</label>
                </div>

                <div class="flex justify-start items-center space-x-5">
                  <label class="text-gray-800">
                    {{ profile.bank_sheba }}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col space-y-5">
            <button
              @click="showSection(1000)"
              type="button"
              class="bg-green-500 text-white rounded-lg p-2"
            >
              ویرایش
            </button>
          </div>
        </div>
      </div>

      <FormKit
        type="form"
        @submit="createOrder"
        :incomplete-message="false"
        :actions="false"
        v-if="isSection(3000)"
      >
        <div class="bg-white shadow-lg p-4 w-7/12 mx-auto rounded-lg">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-2">
              <div class="flex justify-start items-center space-x-5">
                <label class="text-gray-800">اطلاعیه</label>
              </div>

              <div class="flex flex-col space-y-2">
                <p class="text-gray-500 text-justify">
                  لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب خالی و
                  بدون محتوی می باشد که به صورت ایجاد شده است.
                </p>
              </div>
            </div>

            <div class="flex flex-col space-y-2">
              <div class="flex justify-start items-center space-x-5">
                <label class="text-gray-800">نحوه محاسبه</label>
              </div>

              <div class="flex flex-col space-y-2">
                <p class="text-gray-500 text-justify">
                  لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب خالی و
                  بدون محتوی می باشد که به صورت ایجاد شده است که لورم ایپسوم
                  دولور سیت امت یک متن برای پر کردن صفحات وب خالی و بدون محتوی
                  می باشد که به صورت ایجاد شده است.
                </p>
              </div>
            </div>

            <div class="flex flex-col space-y-5">
              <div class="grid grid-cols-2 gap-10">
                <div class="flex flex-col space-y-5">
                  <FormKit
                    type="text"
                    name="total"
                    id="total"
                    label="تعداد بیکن"
                    label-class="text-sm"
                    input-class="w-full bg-gray-100 rounded-lg p-2"
                    messages-class="text-red-500 text-sm"
                    validation="required"
                    :validation-messages="{
                      required: 'تعداد بیکن الزامی است.',
                    }"
                  />
                </div>

                <div class="flex flex-col space-y-5">
                  <FormKit
                    type="text"
                    name="amount"
                    id="amount"
                    label="مبلغ بیعانه"
                    label-class="text-sm"
                    input-class="w-full bg-gray-100 rounded-lg p-2"
                    messages-class="text-red-500 text-sm"
                    validation="required"
                    :validation-messages="{
                      required: 'مبلغ بیعانه الزامی است.',
                    }"
                  />
                </div>
              </div>

              <div class="flex flex-col space-y-5">
                <button type="submit" class="bg-green-500 text-white rounded-lg p-2">
                  پرداخت
                </button>
              </div>
            </div>
          </div>
        </div>
      </FormKit>

      <FormKit
        type="form"
        @submit="createMember"
        :incomplete-message="false"
        :actions="false"
        v-if="isSection(4000)"
      >
        <div class="bg-white shadow-lg p-4 mx-auto w-7/12 rounded-lg">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-2">
              <div class="flex justify-start items-center space-x-5">
                <label class="text-gray-800">راهنما</label>
              </div>

              <div class="flex flex-col space-y-2">
                <p class="text-gray-500 text-justify">
                  لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب خالی و
                  بدون محتوی می باشد که به صورت ایجاد شده است که لورم ایپسوم
                  دولور سیت امت یک متن برای پر کردن صفحات وب خالی و بدون محتوی
                  می باشد که به صورت ایجاد شده است.
                </p>
              </div>
            </div>

            <div class="flex flex-col space-y-5">
              <div v-for="member in members" class="grid grid-cols-3 gap-5">
                <div class="bg-gray-100 rounded-lg p-2">
                  <p class="text-gray-500">{{ member.username }}</p>
                </div>

                <div class="bg-gray-100 rounded-lg p-2">
                  <p class="text-gray-500">{{ member.password }}</p>
                </div>

                <div class="bg-gray-100 rounded-lg p-2">
                  <p v-if="member.type == 'admin'" class="text-gray-500">
                    مدیر
                  </p>
                  <p v-if="member.type == 'master'" class="text-gray-500">
                    سرآشپز
                  </p>
                  <p v-if="member.type == 'waiter'" class="text-gray-500">
                    گارسون
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-5">
                <div class="flex flex-col space-y-5">
                  <FormKit
                    type="text"
                    name="username"
                    id="username"
                    label="نام کاربری"
                    label-class="text-sm"
                    input-class="w-full bg-gray-100 rounded-lg p-2"
                    messages-class="text-red-500 text-sm"
                    validation="required"
                    :validation-messages="{
                      required: 'نام کاربری الزامی است.',
                    }"
                  />
                </div>

                <div class="flex flex-col space-y-5">
                  <FormKit
                    type="password"
                    name="password"
                    id="password"
                    label="کلمه عبور"
                    label-class="text-sm"
                    input-class="w-full bg-gray-100 rounded-lg p-2"
                    messages-class="text-red-500 text-sm"
                    validation="required"
                    :validation-messages="{ required: 'کلمه عبور الزامی است.' }"
                  />
                </div>

                <div class="flex flex-col space-y-5">
                  <FormKit
                    type="select"
                    name="type"
                    id="type"
                    label="نوع کاربر"
                    label-class="text-sm"
                    input-class="w-full bg-gray-100 rounded-lg p-2"
                    messages-class="text-red-500 text-sm"
                    validation="required"
                    :validation-messages="{ required: 'نوع کاربر الزامی است.' }"
                    :options="{
                      admin: 'مدیر',
                      master: 'سرآشپز',
                      waiter: 'گارسون',
                    }"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col space-y-5">
              <button type="submit" class="bg-green-500 rounded-lg p-2">
                ثبت کاربر
              </button>
            </div>
          </div>
        </div>
      </FormKit>
    </div>
  </div>
</template>


<script setup>
import { useToast } from "vue-toastification";

definePageMeta({
  middleware: "auth",
});
const { authUser } = useAuth();

const loading = ref(false);
const errors = ref([]);
const toast = useToast();

const documents = ref(null);

const profile = ref(null);
const orders = ref(null);

const members = ref([]);

const section = ref(1000);

async function logout() {
  await useFetch("/api/auth/logout", {
    method: "POST",
  });

  authUser.value = null;
  toast.warning("از سیستم خارج شدید");
  return navigateTo("/");
}

function isSection(value) {
  if (section.value == value) {
    return true;
  } else {
    return false;
  }
}

function showSection(value) {
  section.value = value;
}

function isApproved(status) {
  if (status == "approved") {
    return true;
  } else {
    return false;
  }
}

function isCompleted(status) {
  if (status == "completed") {
    return true;
  } else {
    return false;
  }
}

try {
  profile.value = await $fetch("/api/user/profile");

  let profileData = profile.value;

  if (!profileData) {
    showSection(1000);
  }

  if (profileData) {
    showSection(2000);
  }

  if (profileData && isApproved(profileData.status)) {
    showSection(3000);
  }

  orders.value = await $fetch("/api/user/orders");

  let ordersData = orders.value;

  let isPaid = false;

  ordersData.forEach(function (order) {
    if (isCompleted(order.status)) {
      isPaid = true;
    }
  });

  if (profileData && isApproved(profileData.status) && isPaid) {
    showSection(4000);
  }
} catch (error) {}

async function createProfile(data) {
  if (!documents.value) {
    toast.error("فیلد تصویر اصلی الزامیست");
    return;
  }

  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("documents", documents.value);
  formData.append("national", data.national);
  formData.append("email", data.email);
  formData.append("address", data.address);
  formData.append("cellphone", data.cellphone);
  formData.append("phone", data.phone);
  formData.append("shop_name", data.shop_name);
  formData.append("shop_type", data.shop_type);
  formData.append("shop_phone", data.shop_phone);
  formData.append("shop_address", data.shop_address);
  formData.append("shop_city", data.shop_city);

  formData.append("bank_name", data.bank_name);
  formData.append("bank_sheba", data.bank_sheba);
  formData.append("description", data.description);

  try {
    loading.value = true;
    errors.value = [];

    await $fetch("/api/user/createProfile", {
      method: "POST",
      body: formData,
    });

    toast.success(" درخواست شما باموفقیت ثبت شد");

    try {
      profile.value = await $fetch("/api/user/profile");
    } catch (error) {}

    showSection(2000);
  } catch (error) {
    errors.value = Object.values(error.data.data.message).flat();
  } finally {
    loading.value = false;
  }
}

async function createOrder(data) {
  try {
    loading.value = true;
    errors.value = [];

    let res = await $fetch("/api/user/createOrder", {
      method: "POST",
      body: data,
    });

    toast.success("در حال انتقال به صفحه پرداخت...");

    let address =
      "http://localhost:8000/user/payment/pay/purchase/" + res.id;

    window.location.href = address;
  } catch (error) {
    errors.value = Object.values(error.data.data.message).flat();
  } finally {
    loading.value = false;
  }
}

try {
  members.value = await $fetch("/api/user/members");
} catch (error) {}

async function createMember(data) {
  try {
    loading.value = true;
    errors.value = [];

    let res = await $fetch("/api/user/createMember", {
      method: "POST",
      body: data,
    });

    toast.success("کاربر جدید با موفقیت ایجاد شد.");

    try {
      members.value = await $fetch("/api/user/members");
    } catch (error) {}
  } catch (error) {
    errors.value = Object.values(error.data.data.message).flat();
  } finally {
    loading.value = false;
  }
}
</script>

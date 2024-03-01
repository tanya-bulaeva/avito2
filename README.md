# Сайт онлайн объявлений (аналог Авито)

Интернет-сервис для размещения объявлений о продаже товаров.

## Описание проекта

Главная страница содержит список всех доступных объявлений, поиск по объявлениям.

Доступно 2 алгоритма поведения - гость и авторизованный пользователь

Гость (незарегистрированный пользователь) может просматривать список объявлений, при клике на карточку объявления просматривать всю информацию о товаре, контакты продавца, отзывы о товаре(без возможности оставить свой отзыв).
При клике на имя продавца можно можно просмотреть подробный профайл на него - имя, телефон, информацию о городе проживания, все объявления продавца.
Доступна страница для регистрации

Авторизованный пользователь может создавать\редактировать\удалять свои объявления, оставлять отзывы на товары у других продавцов.
В своем профайле содержатся все данные продавца с возможностью их редактирования, список своих объявлений

## Нереализовано

-   удаление фотографий при редактировании своего объявления
-   адаптив

## Технический стек

-   React
-   Redux
-   REST API
-   React Router
-   Styled components

## Установка и запуск проекта:

-   Необходимо кланировать репозиторий
-   Установить заисимости: npm install;
-   Запустить приложение: npm run start;
-   Откройте http://localhost:3000, чтобы просмотреть приложение.

## Backend:

-   Для запуска бэкенда вам потребуется установить Docker.
-   Через терминал перейдите в папку back-skyVito.
-   Запустите в терминале команду: docker-compose -f docker-compose-backend.yaml up -d
-   После первого выполнения команды все образы подтянуться, но могут не запуститься, в этом случае повторно выполните команду: docker-compose -f docker-compose-backend.yaml up -d
-   После этого бэкенд и Swagger будут доступны по адресу http://localhost:8090/
-   Чтобы остановить работу бэкенда выполните:docker-compose down

## Визуал:

![image](https://github.com/tanya-bulaeva/avito2/assets/131000104/6ab05ec7-ab7e-44c4-8769-5b32140f0828)

![image](https://github.com/tanya-bulaeva/avito2/assets/131000104/46072f96-d8c2-455a-85d9-570a51ad7450)

![image](https://github.com/tanya-bulaeva/avito2/assets/131000104/8a5f00c2-4302-4a19-acd7-9def917d91e2)

![image](https://github.com/tanya-bulaeva/avito2/assets/131000104/c102a210-8ef0-464b-b786-96b0e92b3cf4)

![image](https://github.com/tanya-bulaeva/avito2/assets/131000104/985e2cdc-527c-4c17-8042-8be08c4d6722)

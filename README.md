# Интерактивная форма
## ❓ Задача
Реализовать функционал интерактивной анкеты

## 🔧 Требования к функционалу
- Шаги вопросов анкеты должны генерироваться на основе данных из json
-	Каждый шаг должен содержать заголовок, контент и кнопки действий Контент может быть произвольной html строкой или отсутствовать совсем
-	Функционал перехода между шагами должен учитывать условия из json
-	Должна быть индикация текущего шага и результатов предыдущих шагов

## 👀 Пример реализации
![Image1](https://user-images.githubusercontent.com/90103339/191057072-42b4ca57-b99f-42d1-b334-a86ca65b7545.png)
![Image2](https://user-images.githubusercontent.com/90103339/191057123-3fd9e70e-3e88-46ac-a138-08f583caba74.png)
![Image3](https://user-images.githubusercontent.com/90103339/191057135-8ce0d650-8071-4b0b-917a-5610f371743c.png)
![Image4](https://user-images.githubusercontent.com/90103339/191057157-54fa2e3c-e954-464e-be7d-c1927d64d467.png)
![Image5](https://user-images.githubusercontent.com/90103339/191057171-d8076503-33bb-4053-853c-447acb4c18ed.png)


## ⚙ How to install and use

### Setting
#### Steps
1) Clone repository
2) Install [Node.js](https://nodejs.org/en/download/) LTS version
3) In the console, go to the folder with the project (in windows - the command cd "full_path");
4) Go to the frontend and backend folders, in each of them run the commands in terminal:
```bash
npm cache clean --force
npm i
```
❗ If errors occur, use the command
```bash
npm audit fix
```
### Launch
#### Steps
1) Сheck if updates are needed
In your terminal run:
```bash
in main folder npm i
```
2) Run the project
In your terminal run:
```bash
in main folder npm start
```
You can access the site by writing "localhost:3000" in the address bar of your browser.

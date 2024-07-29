# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

   In the output, you'll find options to open the app in a

   - [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

   You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

3. To Add dependency

   ```bash
    yarn add ...
   ```

## Expo Go 사용법

- Expo Go 구글 플레이에서 설치
- PC와 같은 네트워크일 경우

  ```bash
   npx expo start
  ```

  로 실행 후 s를 눌러 expo go 모드로 변경

- PC와 다른 네트워크일 경우

  ```bash
   npx expo start --tunnel
  ```

  로 실행 후 s를 눌러 expo go 모드로 변경

- Windows 환경에서는 Windows Defender가 tunnel을 막을 수도 있으므로 예외 등록
- Scan으로는 잘 동작 안하므로 Expo Go 앱에서 URL을 입력하면 잘 동작할 수 있음

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

sudo rm -r ./android/app/build/*

sudo curl "http://localhost:8081/index.android.bundle?platform=android&dev=false" -o "android/app/src/main/assets/index.android"

react-native bundle \
    --dev false \
    --platform android \
    --entry-file index.android.js \
    --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle \
    --assets-dest ./android/app/build/intermediates/res/merged/debug \

cd android
sudo ./gradlew assembleRelease


# curl https://upload.diawi.com/ -F token='Fly7BpOXUrVbSBhruEAMXiZQmNu6vKcgmZbrFKKhaD' \
# -F file=@android/app/build/outputs/apk/app-release.apk \
# -F callback_emails='oteroeiras@gmail.com'
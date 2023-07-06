// TODO: write your code here

class Settings {
  constructor() {
    this.defaultSettings = new Map([
      [{ theme: ['dark', 'light', 'gray'] }, 'dark'],
      [{ music: ['pop', 'rock', 'chillout', 'off', 'trance'] }, 'trance'],
      [{ difficulty: ['normal', 'hard', 'nightmare', 'easy'] }, 'easy'],
    ]);
    this.userSettings = new Map();
  }

  setUserSetting(name, value) {
    for (const setting of this.defaultSettings.keys()) {
      if (setting[name]) {
        this.userSettings.set(setting, value);
        return setting;
      }
    }
    return 'нет такой настройки';
  }

  getSettings() {
    const allSettings = new Map([
      ...this.defaultSettings.entries(),
      ...this.userSettings.entries()]);
    return allSettings;
  }
}

const settings = new Settings();
export default settings;

import settings from '../app';

test('set new setting', () => {
  const settingWithNewValue = settings.setUserSetting('music', 'pop');
  expect(settings.getSettings().get(settingWithNewValue)).toBe('pop');
});

test('total number of settings is constant', () => {
  settings.setUserSetting('theme', 'light');
  expect(settings.getSettings().size).toBe(settings.defaultSettings.size);
});

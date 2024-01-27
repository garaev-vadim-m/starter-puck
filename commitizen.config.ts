module.exports = {
  types: [
    {
      value: 'build',
      name: 'build: Сборка проекта или изменения внешних зависимостей',
    },
    {
      value: 'ci',
      name: 'ci: Настройка CI и работа со скриптами',
    },
    {
      value: 'docs',
      name: 'docs: Обновление документации',
    },
    {
      value: 'feat',
      name: 'feat: Добавление нового функционала',
    },
    {
      value: 'fix',
      name: 'fix: Исправление ошибок',
    },
    {
      value: 'perf',
      name: 'perf: Изменения направленные на улучшение производительности',
    },
    {
      value: 'refactor',
      name: 'refactor: Правки кода без исправления ошибок или добавления новых функций',
    },
    {
      value: 'revert',
      name: 'revert: Откат на предыдущие коммиты',
    },
    {
      value: 'style',
      name: 'style: Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
    },
    {
      value: 'test',
      name: 'test: Добавление тестов',
    },
  ],
  scopes: [
    { name: 'application' },
  ],
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
    customScope: 'Укажите свою ОБЛАСТЬ:',
    ticketNumber: 'Укажите номер тикета (задачи в Jira), например, 21, 360:\n',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: false,
  allowTicketNumber: true,
  isTicketNumberRequired: true,
  ticketNumberPrefix: 'STARTER-PUCK-',
  ticketNumberRegExp: '\\d{1,5}',
  skipQuestions: ['footer'],
  subjectLimit: 72,
};

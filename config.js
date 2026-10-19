// ═══════════════════════════════════════════
// CONFIG — константы и настройки по умолчанию
// ═══════════════════════════════════════════

export const extensionName = 'reproductive-system';

export const defaultSettings = {
    isEnabled: true,
    showNotifications: true,
    language: 'en',
    // Legacy alias for old saves/UI. New code keeps separate protection per carrier.
    contraception: 'none',
    contraceptionUser: 'none',
    contraceptionChar: 'none',
    // Anti-resurrection blocks are per carrier so simultaneous pregnancies do not interfere.
    _conceptionBlockedUntilUser: null,
    _conceptionBlockedUntilChar: null,
    _birthBlockedUntilUser: null,
    _birthBlockedUntilChar: null,
    cycleDay: 1,
    lastCycleUpdate: null,
    totalChecks: 0,
    totalConceptions: 0,
    chatPregnancyData: {},
    pregnancyDuration: 40,
    twinsChance: 3,
    tripletsChance: 0.1,
    scanDepth: 10,
    scanResponseLength: 1500,
    autoScan: true,
    infoblockPosition: 'off',
    customInfoblockCss: '',
    // Реализм цикла: гигиена, протечки, фазовые эффекты, сбои цикла
    realism: false,
    menstruationEnabled: true,
    theme: 'glass',
    lightMode: false,
    // Возраст в RP-днях, после которого малыш считается «выросшим»: инфоблок сбрасывается,
    // ребёнок переходит в архив p.grownChildren. Дефолт 730 = 2 года.
    babyMaxAgeDays: 730,
    // Отладка: НЕ вырезать теги из текста сообщений (видны прямо в чате)
    debugKeepTags: false,

    // ── Кого отслеживаем: 'user' (юзер) | 'char' (персонаж/бот) | 'both' (оба) ──
    // Цикл, беременность и инфоблок строятся для выбранных носителей.
    trackFor: 'user',

    // Explicit selection also controls tracking. Legacy auto migrates from trackFor.
    carrierMode: 'user',
    // Changes only the ovulatory phase name, never anatomy or eligibility.
    universe: 'normal',
    userDesignation: 'omega',
    charDesignation: 'alpha',

    // Скрытая беременность: героиня не знает о зачатии, пока не сделает тест
    // или пока срок не станет очевидным. Трекер знает, промпт и инфоблок — молчат.
    hiddenPregnancy: true,
    // Неделя, после которой беременность становится очевидной сама собой
    obviousAtWeek: 12,
    // Режим «планируем»: подсветка фертильного окна и подсказки модели
    tryingToConceive: false,

};

export const defaultPregnancyData = {
    isPregnant: false,
    // Цикл — пер-чат
    cycleDay: 1,
    lastCycleUpdate: null,
    conceptionDate: null,
    pregnancyWeeks: 0,
    rpDate: null,
    _lastRpDateTag: null,
    fetusCount: 1,
    fetusSex: [],
    fetusSexRevealed: false,
    complications: [],
    _plannedComplications: [],
    healthStatus: 'normal',
    lastComplicationCheck: null,
    lastComplicationCheckRpDate: null,
    lastDoctorVisitRpDate: null,
    // Pregnancy extras
    mood: '',
    libido: '',
    weightGain: '',
    babyActivity: '',
    // Baby data (after birth)
    hasBaby: false,
    babyName: '',
    babySex: [],
    babyCount: 0,
    babyAge: '',
    babyHealth: 'normal',
    babyTeething: false,
    babyColicky: false,
    babyDiaperClean: true,
    babyFeedingType: '',
    babySleep: '',
    babyMood: '',
    babyMilestones: [],
    babyBirthRpDate: null,
    babyLastFeedRpDate: null,
    babyLastChangeRpDate: null,
    momState: '',
    // Per-baby data (array of individual baby objects)
    babies: [],
    // Архив выросших детей (>babyMaxAgeDays). Не показываются в инфоблоке, но помнятся для промпта.
    grownChildren: [],
    // Dynamic descriptions from AI
    _dynamic: {},

    // ── Знание о беременности (скрытая беременность) ──
    pregnancyKnown: false,   // героиня знает, что беременна
    testTakenAt: null,       // RP-дата последнего теста
    lastTestResult: null,    // 'positive' | 'negative' | 'faint'
    missedPeriodDays: 0,     // дней задержки

    // ── Послеродовое состояние ──
    postpartum: null,        // { startRpDate, lactating, healing, cycleReturned }

    // ── Реализм цикла ──
    hygieneType: 'pad',          // 'pad' | 'tampon' | 'cup' | 'none'
    hygieneChangedRpDate: null,  // когда последний раз меняли
    _cycleShift: 0,              // сбой цикла: на сколько дней он растянут

    // ── A/B/O-циклы носителя-юзера (только при universe='omegaverse') ──

    // ── Данные ПАРТНЁРА ({{char}}) — заполняются при trackFor 'char'/'both' ──
    // Дети (babies/grownChildren) ОБЩИЕ и живут в корне p — семья одна.
    partner: null, // { ...defaultPartnerData } создаётся лениво
};

// Носитель-партнёр: свой цикл и беременность, но общая семья.
export const defaultPartnerData = {
    isPregnant: false,
    cycleDay: 1,
    lastCycleUpdate: null,
    conceptionDate: null,
    pregnancyWeeks: 0,
    fetusCount: 1,
    fetusSex: [],
    fetusSexRevealed: false,
    complications: [],
    _plannedComplications: [],
    healthStatus: 'normal',
    mood: '',
    libido: '',
    weightGain: '',
    babyActivity: '',
    fatherName: '',
    pregnancyKnown: false,
    testTakenAt: null,
    lastTestResult: null,
    postpartum: null,
    _conceptionAnchored: false,
    _userSetWeeksAt: null,
    _userSetCycleAt: null,
    _dynamic: {},
    hygieneType: 'pad',
    hygieneChangedRpDate: null,
    _cycleShift: 0,
    // A/B/O
};

export const CHANCES = {
    base: 20,
    contraception: {
        none: 0,
        condom: 85,
        pill: 91,
        iud: 99,
    },
};

export const LANG = {
    ru: {
        title: 'Репродуктивная Система',
        enabled: 'Включено',
        notifications: 'Уведомления',
        contraceptionTitle: 'Контрацепция',
        contraceptionTypes: {
            none: 'Нет защиты',
            condom: 'Презерватив (85%)',
            pill: 'Таблетки (91%)',
            iud: 'ВМС (99%)',
        },
        cycleDay: 'День цикла',
        status: 'Статус',
        notPregnant: 'Не беременна',
        pregnant: 'Беременна',
        conceptionSuccess: 'ЗАЧАТИЕ ПРОИЗОШЛО!',
        conceptionFail: 'Зачатия не произошло',
        contraceptionFailed: 'Контрацепция ПОДВЕЛА!',
        stats: 'Проверок: {checks} | Зачатий: {conceptions}',
        reset: 'Сбросить беременность',
        scan: 'Сканировать чат',
        scanning: 'Сканирование...',
        scanDepth: 'Глубина сканирования',
        autoScan: 'Авто-сканирование',
    },
    en: {
        title: 'Reproductive System',
        enabled: 'Enable',
        notifications: 'Notifications',
        contraceptionTitle: 'Contraception',
        contraceptionTypes: {
            none: 'None',
            condom: 'Condom (85%)',
            pill: 'Pill (91%)',
            iud: 'IUD (99%)',
        },
        cycleDay: 'Cycle day',
        status: 'Status',
        notPregnant: 'Not pregnant',
        pregnant: 'Pregnant',
        conceptionSuccess: 'CONCEPTION!',
        conceptionFail: 'No conception',
        contraceptionFailed: 'Contraception failed!',
        stats: 'Checks: {checks} | Conceptions: {conceptions}',
        reset: 'Reset pregnancy',
        scan: 'Scan chat',
        scanning: 'Scanning...',
        scanDepth: 'Scan depth',
        autoScan: 'Auto-scan',
    },
};

export const REPRO_REGEX = /<repro>([\s\S]*?)<\/repro>/i;
export const EXPIRATION_DEPTH = 50;

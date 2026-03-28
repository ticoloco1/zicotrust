'use client';
export type Lang = 'en'|'pt'|'es'|'fr'|'de'|'ja'|'zh'|'ko'|'ru'|'sv'|'vi';

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code:'en', label:'English',    flag:'🇺🇸' },
  { code:'pt', label:'Português',  flag:'🇧🇷' },
  { code:'es', label:'Español',    flag:'🇪🇸' },
  { code:'fr', label:'Français',   flag:'🇫🇷' },
  { code:'de', label:'Deutsch',    flag:'🇩🇪' },
  { code:'ja', label:'日本語',      flag:'🇯🇵' },
  { code:'zh', label:'中文',        flag:'🇨🇳' },
  { code:'ko', label:'한국어',      flag:'🇰🇷' },
  { code:'ru', label:'Русский',    flag:'🇷🇺' },
  { code:'sv', label:'Svenska',    flag:'🇸🇪' },
  { code:'vi', label:'Tiếng Việt', flag:'🇻🇳' },
];

const T = {
  // NAV
  nav_properties:  { en:'Properties',  pt:'Imóveis',    es:'Inmuebles',   fr:'Immobilier',  de:'Immobilien',  ja:'物件',       zh:'房产',   ko:'부동산',    ru:'Недвижимость', sv:'Fastigheter', vi:'Bất động sản' },
  nav_cars:        { en:'Cars',         pt:'Carros',     es:'Autos',       fr:'Voitures',    de:'Autos',       ja:'車',         zh:'汽车',   ko:'자동차',    ru:'Автомобили',   sv:'Bilar',       vi:'Xe hơi' },
  nav_cvs:         { en:'CVs',          pt:'CVs',        es:'CVs',         fr:'CVs',         de:'CVs',         ja:'履歴書',     zh:'简历',   ko:'이력서',    ru:'Резюме',       sv:'CV',          vi:'CV' },
  nav_slugs:       { en:'Slugs',        pt:'Slugs',      es:'Slugs',       fr:'Slugs',       de:'Slugs',       ja:'スラッグ',   zh:'域名',   ko:'슬러그',    ru:'Слаги',        sv:'Slugs',       vi:'Slug' },
  nav_sites:       { en:'Sites',        pt:'Sites',      es:'Sitios',      fr:'Sites',       de:'Sites',       ja:'サイト',     zh:'网站',   ko:'사이트',    ru:'Сайты',        sv:'Sajter',      vi:'Trang web' },
  nav_videos:      { en:'Videos',       pt:'Vídeos',     es:'Videos',      fr:'Vidéos',      de:'Videos',      ja:'動画',       zh:'视频',   ko:'비디오',    ru:'Видео',        sv:'Videor',      vi:'Video' },
  nav_signin:      { en:'Sign In',      pt:'Entrar',     es:'Entrar',      fr:'Connexion',   de:'Anmelden',    ja:'ログイン',   zh:'登录',   ko:'로그인',    ru:'Войти',        sv:'Logga in',    vi:'Đăng nhập' },
  nav_editor:      { en:'Editor',       pt:'Editor',     es:'Editor',      fr:'Éditeur',     de:'Editor',      ja:'エディタ',   zh:'编辑器', ko:'에디터',    ru:'Редактор',     sv:'Redigera',    vi:'Trình soạn' },

  // HOME
  home_hero:       { en:'Your identity. Your revenue.', pt:'Sua identidade. Sua renda.', es:'Tu identidad. Tus ingresos.', fr:'Votre identité. Vos revenus.', de:'Deine Identität. Dein Einkommen.', ja:'あなたのアイデンティティ。あなたの収入。', zh:'您的身份。您的收入。', ko:'당신의 정체성. 당신의 수익.', ru:'Ваша личность. Ваш доход.', sv:'Din identitet. Din inkomst.', vi:'Danh tính của bạn. Thu nhập của bạn.' },
  home_sub:        { en:'Create a mini site, claim your slug, monetize videos with USDC paywall.', pt:'Crie um mini site, registre seu slug, monetize vídeos com paywall em USDC.', es:'Crea tu mini sitio, reclama tu slug, monetiza videos en USDC.', fr:'Créez votre mini site, réclamez votre slug, monétisez vos vidéos en USDC.', de:'Erstelle eine Mini-Site, sichere deinen Slug, monetarisiere Videos mit USDC.', ja:'ミニサイトを作成し、スラッグを取得し、USDCでビデオを収益化しましょう。', zh:'创建迷你网站，获取您的域名，通过USDC获得视频收益。', ko:'미니 사이트를 만들고, 슬러그를 등록하고, USDC로 비디오를 수익화하세요.', ru:'Создайте мини-сайт, зарегистрируйте слаг, монетизируйте видео через USDC.', sv:'Skapa en mini-site, ta ditt slug, monetisera videor med USDC.', vi:'Tạo trang web mini, đăng ký slug, kiếm tiền từ video bằng USDC.' },
  home_start:      { en:'Get Started Free', pt:'Criar Grátis', es:'Empezar Gratis', fr:'Commencer Gratuitement', de:'Kostenlos starten', ja:'無料で始める', zh:'免费开始', ko:'무료로 시작', ru:'Начать бесплатно', sv:'Börja gratis', vi:'Bắt đầu miễn phí' },
  home_browse:     { en:'Browse Slugs',    pt:'Ver Slugs',    es:'Ver Slugs',    fr:'Voir Slugs',              de:'Slugs ansehen', ja:'スラッグを見る', zh:'浏览域名', ko:'슬러그 보기', ru:'Просмотр слагов', sv:'Se Slugs', vi:'Xem Slug' },

  // EDITOR
  ed_save:         { en:'Save',        pt:'Salvar',     es:'Guardar',     fr:'Sauvegarder', de:'Speichern', ja:'保存',   zh:'保存', ko:'저장', ru:'Сохранить', sv:'Spara', vi:'Lưu' },
  ed_saving:       { en:'Saving…',     pt:'Salvando…',  es:'Guardando…',  fr:'Sauvegarde…', de:'Speichert…', ja:'保存中…', zh:'保存中…', ko:'저장 중…', ru:'Сохранение…', sv:'Sparar…', vi:'Đang lưu…' },
  ed_preview:      { en:'Preview',     pt:'Preview',    es:'Vista Previa', fr:'Aperçu',     de:'Vorschau',  ja:'プレビュー', zh:'预览', ko:'미리보기', ru:'Просмотр', sv:'Förhandsgranska', vi:'Xem trước' },
  ed_publish:      { en:'Publish',     pt:'Publicar',   es:'Publicar',    fr:'Publier',     de:'Veröffentlichen', ja:'公開', zh:'发布', ko:'게시', ru:'Опубликовать', sv:'Publicera', vi:'Xuất bản' },
  ed_profile:      { en:'Profile',     pt:'Perfil',     es:'Perfil',      fr:'Profil',      de:'Profil',    ja:'プロフィール', zh:'个人资料', ko:'프로필', ru:'Профиль', sv:'Profil', vi:'Hồ sơ' },
  ed_theme:        { en:'Theme',       pt:'Tema',       es:'Tema',        fr:'Thème',       de:'Thema',     ja:'テーマ', zh:'主题', ko:'테마', ru:'Тема', sv:'Tema', vi:'Chủ đề' },
  ed_links:        { en:'Links',       pt:'Links',      es:'Links',       fr:'Liens',       de:'Links',     ja:'リンク', zh:'链接', ko:'링크', ru:'Ссылки', sv:'Länkar', vi:'Liên kết' },
  ed_videos:       { en:'Videos',      pt:'Vídeos',     es:'Videos',      fr:'Vidéos',      de:'Videos',    ja:'動画', zh:'视频', ko:'비디오', ru:'Видео', sv:'Videor', vi:'Video' },
  ed_cv:           { en:'CV',          pt:'CV',         es:'CV',          fr:'CV',          de:'CV',        ja:'履歴書', zh:'简历', ko:'이력서', ru:'Резюме', sv:'CV', vi:'CV' },
  ed_feed:         { en:'Feed',        pt:'Feed',       es:'Feed',        fr:'Feed',        de:'Feed',      ja:'フィード', zh:'动态', ko:'피드', ru:'Лента', sv:'Flöde', vi:'Nguồn cấp' },

  // SLUGS
  slug_title:      { en:'Slug Marketplace', pt:'Marketplace de Slugs', es:'Mercado de Slugs', fr:'Marché des Slugs', de:'Slug-Marktplatz', ja:'スラッグマーケット', zh:'域名市场', ko:'슬러그 마켓', ru:'Рынок слагов', sv:'Slug-marknad', vi:'Chợ Slug' },
  slug_search:     { en:'Search your slug…', pt:'Buscar seu slug…', es:'Buscar tu slug…', fr:'Rechercher…', de:'Slug suchen…', ja:'スラッグを検索…', zh:'搜索域名…', ko:'슬러그 검색…', ru:'Поиск слага…', sv:'Sök slug…', vi:'Tìm slug…' },
  slug_available:  { en:'Available!',   pt:'Disponível!',  es:'¡Disponible!', fr:'Disponible!', de:'Verfügbar!', ja:'利用可能！', zh:'可用！', ko:'사용 가능!', ru:'Доступен!', sv:'Tillgänglig!', vi:'Có sẵn!' },
  slug_taken:      { en:'Taken',        pt:'Indisponível', es:'No disponible', fr:'Indisponible', de:'Vergeben', ja:'使用中', zh:'已占用', ko:'사용 중', ru:'Занят', sv:'Taget', vi:'Đã dùng' },
  slug_register:   { en:'Register',     pt:'Registrar',    es:'Registrar',    fr:'Enregistrer', de:'Registrieren', ja:'登録', zh:'注册', ko:'등록', ru:'Зарегистрировать', sv:'Registrera', vi:'Đăng ký' },
  slug_for_sale:   { en:'For Sale',     pt:'À Venda',      es:'En Venta',     fr:'À Vendre',    de:'Zu verkaufen', ja:'売り出し中', zh:'出售中', ko:'판매 중', ru:'На продажу', sv:'Till salu', vi:'Đang bán' },
  slug_auction:    { en:'Auction',      pt:'Leilão',       es:'Subasta',      fr:'Enchère',     de:'Auktion', ja:'オークション', zh:'拍卖', ko:'경매', ru:'Аукцион', sv:'Auktion', vi:'Đấu giá' },
  slug_transfer:   { en:'Transfer',     pt:'Transferir',   es:'Transferir',   fr:'Transférer',  de:'Übertragen', ja:'転送', zh:'转让', ko:'이전', ru:'Передать', sv:'Överför', vi:'Chuyển nhượng' },
  slug_vault:      { en:'My Vault',     pt:'Meu Cofre',    es:'Mi Cofre',     fr:'Mon Coffre',  de:'Mein Tresor', ja:'マイボルト', zh:'我的金库', ko:'내 금고', ru:'Мой сейф', sv:'Mitt valv', vi:'Kho của tôi' },

  // DASHBOARD  
  dash_title:      { en:'Dashboard',   pt:'Painel',      es:'Panel',        fr:'Tableau de Bord', de:'Dashboard', ja:'ダッシュボード', zh:'仪表板', ko:'대시보드', ru:'Панель', sv:'Instrumentpanel', vi:'Bảng điều khiển' },
  dash_overview:   { en:'Overview',    pt:'Visão Geral', es:'Resumen',      fr:'Aperçu',          de:'Übersicht', ja:'概要', zh:'概览', ko:'개요', ru:'Обзор', sv:'Översikt', vi:'Tổng quan' },
  dash_earnings:   { en:'Total Earned', pt:'Total Ganho', es:'Total Ganado', fr:'Total Gagné',    de:'Gesamtverdienst', ja:'総収益', zh:'总收入', ko:'총 수익', ru:'Всего заработано', sv:'Totalt intjänat', vi:'Tổng thu nhập' },

  // SITE PUBLIC
  site_share:      { en:'Share',       pt:'Compartilhar', es:'Compartir',   fr:'Partager',   de:'Teilen',    ja:'シェア', zh:'分享', ko:'공유', ru:'Поделиться', sv:'Dela', vi:'Chia sẻ' },
  site_posts:      { en:'Posts',       pt:'Posts',        es:'Posts',       fr:'Posts',      de:'Beiträge',  ja:'投稿', zh:'帖子', ko:'게시물', ru:'Записи', sv:'Inlägg', vi:'Bài đăng' },
  site_pinned:     { en:'PINNED',      pt:'FIXADO',       es:'FIJADO',      fr:'ÉPINGLÉ',    de:'ANGEHEFTET', ja:'固定', zh:'置顶', ko:'고정됨', ru:'ЗАКРЕПЛЕНО', sv:'FÄST', vi:'ĐÃ GHIM' },
  site_videos:     { en:'Videos',      pt:'Vídeos',       es:'Videos',      fr:'Vidéos',     de:'Videos',    ja:'動画', zh:'视频', ko:'비디오', ru:'Видео', sv:'Videor', vi:'Video' },
  site_not_found:  { en:'not found',   pt:'não encontrado', es:'no encontrado', fr:'introuvable', de:'nicht gefunden', ja:'見つかりません', zh:'未找到', ko:'찾을 수 없음', ru:'не найден', sv:'hittades inte', vi:'không tìm thấy' },

  // COMMON
  com_loading:     { en:'Loading…',   pt:'Carregando…', es:'Cargando…',   fr:'Chargement…', de:'Lädt…', ja:'読み込み中…', zh:'加载中…', ko:'로딩 중…', ru:'Загрузка…', sv:'Laddar…', vi:'Đang tải…' },
  com_save:        { en:'Save',       pt:'Salvar',      es:'Guardar',     fr:'Sauvegarder', de:'Speichern', ja:'保存', zh:'保存', ko:'저장', ru:'Сохранить', sv:'Spara', vi:'Lưu' },
  com_cancel:      { en:'Cancel',     pt:'Cancelar',    es:'Cancelar',    fr:'Annuler',     de:'Abbrechen', ja:'キャンセル', zh:'取消', ko:'취소', ru:'Отмена', sv:'Avbryt', vi:'Hủy' },
  com_add:         { en:'Add',        pt:'Adicionar',   es:'Agregar',     fr:'Ajouter',     de:'Hinzufügen', ja:'追加', zh:'添加', ko:'추가', ru:'Добавить', sv:'Lägg till', vi:'Thêm' },
  com_search:      { en:'Search',     pt:'Buscar',      es:'Buscar',      fr:'Rechercher',  de:'Suchen', ja:'検索', zh:'搜索', ko:'검색', ru:'Поиск', sv:'Sök', vi:'Tìm kiếm' },
  com_copy:        { en:'Copy',       pt:'Copiar',      es:'Copiar',      fr:'Copier',      de:'Kopieren', ja:'コピー', zh:'复制', ko:'복사', ru:'Копировать', sv:'Kopiera', vi:'Sao chép' },
  com_copied:      { en:'Copied!',    pt:'Copiado!',    es:'¡Copiado!',   fr:'Copié!',      de:'Kopiert!', ja:'コピーしました！', zh:'已复制！', ko:'복사됨!', ru:'Скопировано!', sv:'Kopierat!', vi:'Đã sao chép!' },
  com_back:        { en:'Back',       pt:'Voltar',      es:'Volver',      fr:'Retour',      de:'Zurück', ja:'戻る', zh:'返回', ko:'뒤로', ru:'Назад', sv:'Tillbaka', vi:'Quay lại' },
  com_delete:      { en:'Delete',     pt:'Deletar',     es:'Eliminar',    fr:'Supprimer',   de:'Löschen', ja:'削除', zh:'删除', ko:'삭제', ru:'Удалить', sv:'Ta bort', vi:'Xóa' },
  com_new_post:    { en:'New post',   pt:'Novo post',   es:'Nuevo post',  fr:'Nouveau post', de:'Neuer Beitrag', ja:'新しい投稿', zh:'新帖子', ko:'새 게시물', ru:'Новая запись', sv:'Nytt inlägg', vi:'Bài đăng mới' },
  com_photo:       { en:'Photo',      pt:'Foto',        es:'Foto',        fr:'Photo',       de:'Foto', ja:'写真', zh:'照片', ko:'사진', ru:'Фото', sv:'Foto', vi:'Ảnh' },
  com_upload:      { en:'Upload',     pt:'Enviar',      es:'Subir',       fr:'Télécharger', de:'Hochladen', ja:'アップロード', zh:'上传', ko:'업로드', ru:'Загрузить', sv:'Ladda upp', vi:'Tải lên' },
  com_close:       { en:'Close',      pt:'Fechar',      es:'Cerrar',      fr:'Fermer',      de:'Schließen', ja:'閉じる', zh:'关闭', ko:'닫기', ru:'Закрыть', sv:'Stäng', vi:'Đóng' },
  com_edit:        { en:'Edit',       pt:'Editar',      es:'Editar',      fr:'Modifier',    de:'Bearbeiten', ja:'編集', zh:'编辑', ko:'편집', ru:'Редактировать', sv:'Redigera', vi:'Chỉnh sửa' },

  // FEED
  fd_show:         { en:'Show Feed',  pt:'Mostrar Feed', es:'Mostrar Feed', fr:'Afficher Feed', de:'Feed anzeigen', ja:'フィードを表示', zh:'显示动态', ko:'피드 보기', ru:'Показать ленту', sv:'Visa flöde', vi:'Hiển thị nguồn cấp' },
  fd_pin_post:     { en:'📌 Pin · $10', pt:'📌 Fixar · $10', es:'📌 Fijar · $10', fr:'📌 Épingler · $10', de:'📌 Anheften · $10', ja:'📌 固定 · $10', zh:'📌 置顶 · $10', ko:'📌 고정 · $10', ru:'📌 Закрепить · $10', sv:'📌 Fäst · $10', vi:'📌 Ghim · $10' },
  fd_publish_post: { en:'Publish',    pt:'Publicar',    es:'Publicar',    fr:'Publier',     de:'Veröffentlichen', ja:'投稿', zh:'发布', ko:'게시', ru:'Опубликовать', sv:'Publicera', vi:'Xuất bản' },
  fd_post_placeholder: { en:'What do you want to share?', pt:'O que você quer compartilhar?', es:'¿Qué quieres compartir?', fr:'Que voulez-vous partager?', de:'Was möchtest du teilen?', ja:'何を共有しますか？', zh:'你想分享什么？', ko:'무엇을 공유하시겠어요?', ru:'Что вы хотите поделиться?', sv:'Vad vill du dela?', vi:'Bạn muốn chia sẻ gì?' },
  fd_expires:      { en:'Posts expire in 7 days · Pin = 365 days for $10', pt:'Posts expiram em 7 dias · Fixar = 365 dias por $10', es:'Posts expiran en 7 días · Fijar = 365 días por $10', fr:'Posts expirent dans 7 jours · Épingler = 365 jours pour $10', de:'Beiträge verfallen nach 7 Tagen · Anheften = 365 Tage für $10', ja:'投稿は7日で期限切れ · 固定 = 365日で$10', zh:'帖子7天后过期 · 置顶 = 365天$10', ko:'게시물은 7일 후 만료 · 고정 = 365일 $10', ru:'Записи истекают через 7 дней · Закрепить = 365 дней за $10', sv:'Inlägg löper ut efter 7 dagar · Fäst = 365 dagar för $10', vi:'Bài đăng hết hạn sau 7 ngày · Ghim = 365 ngày với $10' },

  // AUTH
  auth_signin:     { en:'Sign In',     pt:'Entrar',      es:'Entrar',      fr:'Connexion',   de:'Anmelden', ja:'ログイン', zh:'登录', ko:'로그인', ru:'Войти', sv:'Logga in', vi:'Đăng nhập' },
  auth_signup:     { en:'Create Account', pt:'Criar Conta', es:'Crear Cuenta', fr:'Créer un Compte', de:'Konto erstellen', ja:'アカウント作成', zh:'创建账户', ko:'계정 만들기', ru:'Создать аккаунт', sv:'Skapa konto', vi:'Tạo tài khoản' },
  auth_google:     { en:'Continue with Google', pt:'Continuar com Google', es:'Continuar con Google', fr:'Continuer avec Google', de:'Mit Google fortfahren', ja:'Googleで続ける', zh:'使用Google继续', ko:'Google로 계속', ru:'Продолжить с Google', sv:'Fortsätt med Google', vi:'Tiếp tục với Google' },

  // PLANS
  plans_title:     { en:'Plans & Pricing', pt:'Planos e Preços', es:'Planes y Precios', fr:'Plans et Tarifs', de:'Pläne & Preise', ja:'プランと料金', zh:'计划与定价', ko:'플랜 및 가격', ru:'Планы и цены', sv:'Planer och priser', vi:'Gói và giá' },
  plans_start:     { en:'Get Started',     pt:'Começar',         es:'Empezar',         fr:'Commencer',      de:'Loslegen', ja:'始める', zh:'开始', ko:'시작하기', ru:'Начать', sv:'Kom igång', vi:'Bắt đầu' },

  // FOOTER
  footer_legal:    { en:'TrustBank is a decentralized content and classifieds platform. Not a bank.', pt:'TrustBank é uma plataforma descentralizada de conteúdo e classificados. Não é um banco.', es:'TrustBank es una plataforma descentralizada. No es un banco.', fr:"TrustBank est une plateforme décentralisée. Pas une banque.", de:'TrustBank ist eine dezentrale Plattform. Keine Bank.', ja:'TrustBankは分散型プラットフォームです。銀行ではありません。', zh:'TrustBank是去中心化平台，不是银行。', ko:'TrustBank는 탈중앙화 플랫폼입니다. 은행이 아닙니다.', ru:'TrustBank — децентрализованная платформа. Не банк.', sv:'TrustBank är en decentraliserad plattform. Ingen bank.', vi:'TrustBank là nền tảng phi tập trung. Không phải ngân hàng.' },
  footer_rights:   { en:'All rights reserved.', pt:'Todos os direitos reservados.', es:'Todos los derechos reservados.', fr:'Tous droits réservés.', de:'Alle Rechte vorbehalten.', ja:'全著作権所有。', zh:'版权所有。', ko:'모든 권리 보유.', ru:'Все права защищены.', sv:'Alla rättigheter reserverade.', vi:'Đã đăng ký bản quyền.' },
} as const;

export type TKey = keyof typeof T;

export function getLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('i18n-lang') as Lang;
  if (saved && LANGS.find(l => l.code === saved)) return saved;
  const browser = navigator.language.split('-')[0] as Lang;
  if (LANGS.find(l => l.code === browser)) return browser;
  return 'en';
}

export function setLang(lang: Lang) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('i18n-lang', lang);
  window.location.reload();
}

export function t(key: TKey, lang?: Lang): string {
  const l = lang || getLang();
  const entry = T[key] as any;
  if (!entry) return key;
  return entry[l] || entry['en'] || key;
}

export function useT() {
  const lang = getLang();
  return (key: TKey) => t(key, lang);
}

const i18n = { changeLanguage: (l: string) => setLang(l as Lang), language: 'en' };
export default i18n;

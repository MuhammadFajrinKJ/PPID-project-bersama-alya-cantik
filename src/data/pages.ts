/**
 * Konten halaman detail PPID BBPPMPV BMTI.
 *
 * SELURUH isi file ini disalin dari situs sumber
 * https://bbppmpvbmti.kemendikdasmen.go.id/Ppid/ (dirayapi 11 November 2026).
 * Tidak ada informasi yang dikarang. Halaman yang pada situs sumber
 * kosong / tombolnya tidak bertautan ditandai dengan blok `notice`
 * agar dapat dilengkapi kemudian oleh pengelola.
 *
 * Catatan: teks spam (judi online) yang disisipkan pihak tidak bertanggung
 * jawab pada halaman Beranda, Profil, Prosedur Pelayanan, dan Standar
 * Pelayanan situs sumber TIDAK diikutsertakan.
 */

export type DocKind = "folder" | "file" | "form" | "sheet" | "doc" | "web" | "pdf" | "video";

export type DocItem = {
  title: string;
  href?: string;
  kind: DocKind;
  category?: string;
  description?: string;
};

export type ImageItem = { src: string; alt: string; caption?: string; href?: string };

export type Block =
  | { type: "heading"; text: string; eyebrow?: string }
  | { type: "text"; html: string }
  | { type: "list"; items: string[]; ordered?: boolean; title?: string }
  | { type: "docs"; title?: string; items: DocItem[] }
  | { type: "embed"; src: string; title: string; href?: string }
  | { type: "images"; images: ImageItem[]; layout?: "gallery" | "portrait" | "single" | "wide" }
  | { type: "profile"; photo: string; name: string; position: string; address: string; education: string[]; experience: { period: string; role: string }[] }
  | { type: "schedule"; title: string; rows: { label: string; value: string }[] }
  | { type: "steps"; title?: string; items: string[] }
  | { type: "notice"; html: string }
  | { type: "contact" }
  | { type: "children" }
  | { type: "yearDocs"; groups: { year: string; items: DocItem[] }[] };

export type PageData = {
  title: string;
  description?: string;
  /** URL halaman asli pada situs sumber (untuk rujukan) */
  source?: string;
  blocks: Block[];
};

const S = "https://bbppmpvbmti.kemendikdasmen.go.id/Ppid";

/* Teks bersama yang muncul identik di beberapa halaman sumber */
const prosedurPermintaan: Block[] = [
  { type: "heading", text: "Permintaan Informasi" },
  {
    type: "text",
    html: "Punya permintaan? Kami siap membantu Anda. Pelayanan permintaan informasi dan dokumen dilakukan saat jam kerja melalui pengumuman dan melalui prosedur permintaan atau permohonan informasi secara langsung/tidak langsung",
  },
  { type: "contact" },
  {
    type: "steps",
    title: "Ketentuan Permohonan Informasi",
    items: [
      "Layanan informasi di BBPPMPV BMTI dikelola secara terpusat satu pintu oleh Pejabat Pengelola Informasi dan Dokumentasi (PPID) yaitu Kepala Bagian Tata Usaha BBPPMPV BMTI.",
      "Unit layanan informasi publik diselenggarakan di Unit Layanan Publik (ULP). Jl. Pesantren KM 2, Cibabat, Cimahi Utara, di bawah Penanggung Jawab Hubungan Masyarakat dan Pelayanan Publik.",
      'Permohonan informasi ke PPID BBPPMPV BMTI, dapat disampaikan secara langsung datang ke ULP maupun tidak langsung melalui telepon, SMS, email, surat, faks, dan laman <a href="https://docs.google.com/forms/d/1PEU05Fa7wrA5qa7bFhx8fEFlt_bhKKFSKr4wLUehN00/viewform" target="_blank" rel="noopener">klik disini</a>.',
      "Pemohon informasi <strong>wajib</strong> mengikuti ketentuan yang berlaku, sebagai berikut:<ol><li>Apabila pemohon mengatasnamakan <strong>pribadi</strong>, wajib melampirkan <strong>fotocopy KTP</strong>.</li><li>Apabila pemohon mengatasnamakan <strong>LSM</strong>, wajib menyertakan <strong>fotocopy akta notaris</strong> yang mencantumkan nomor registrasi bahwa LSM tersebut terdaftar di Kementerian Hukum dan HAM atau Kementerian Dalam Negeri.</li><li>Apabila pemohon mengatasnamakan <strong>perusahaan</strong>, wajib menyertakan <strong>foto copy akta pendirian perusahaan</strong>.</li></ol>",
      'Berdasarkan <a href="http://ult.kemdikbud.go.id/uploads/dokumen/undang-undang-nomor-14-tahun-2008.pdf" target="_blank" rel="noopener">Undang-Undang Nomor 14 Tahun 2008</a> tentang Keterbukaan Informasi Publik, jangka waktu pemenuhan informasi berlangsung selama 10 hari kerja dan dapat di tambah 7 hari kerja.',
      "Pemohon informasi ini <strong>tidak dipungut biaya</strong>, namun jika ada dokumen yang harus di fotocopy dan penggandaan CD dibebankan kepada pemohon informasi.",
    ],
  },
  {
    type: "schedule",
    title: "Jadwal Pelayanan Informasi",
    rows: [
      { label: "Pendaftaran", value: "08.00 – 11.00 WIB" },
      { label: "Senin – Kamis", value: "09.00 – 15.00 WIB" },
      { label: "Istirahat", value: "12.00 – 13.00 WIB" },
      { label: "Jum'at", value: "09.00 – 15.30 WIB" },
      { label: "Istirahat", value: "11.30 – 13.30 WIB" },
    ],
  },
];

const pengaduanWbs: Block[] = [
  {
    type: "text",
    html: "Jika Anda menemukan penyalahgunaan wewenang atau pelanggaran di BBPPMPV BMTI, silakan laporakan melalui kanal di bawah ini:",
  },
  {
    type: "docs",
    items: [
      { title: "Jika Anda pegawai Kemendikdasmen, klik di sini!", href: "https://wbs.kemendikdasmen.go.id/", kind: "web", category: "WBS Kemendikdasmen" },
      { title: "Jika Anda nonpegawai Kemendikdasmen, klik di sini!", href: "https://posko-pengaduan.itjen.kemendikdasmen.go.id/", kind: "web", category: "Posko Pengaduan Itjen" },
    ],
  },
  {
    type: "notice",
    html: "Anda tidak perlu khawatir terungkapnya identitas diri Anda karena kami akan merahasiakan identitas diri Anda sebagai pelapor. Kami menghargai informasi yang Anda laporkan dan fokus kami kepada materi informasi yang Anda Laporkan.<br/><br/>Hindari orang lain mengetahui nama samaran (username atau alamat email), kata sandi (password) serta nomor pengaduan Anda.",
  },
  { type: "embed", src: "https://drive.google.com/file/d/1aiTU-CwBx6iqf8Su5jQ4b9MMxXulk7X0/preview", title: "Dokumen Prosedur Pengaduan", href: "https://drive.google.com/file/d/1aiTU-CwBx6iqf8Su5jQ4b9MMxXulk7X0/view" },
];

const emptyNotice = (what = "Halaman ini") =>
  ({ type: "notice", html: `${what} pada situs sumber belum memuat konten. Silakan gunakan tautan terkait di bawah ini. <em>(Ditandai untuk dilengkapi pengelola.)</em>` }) as Block;

export const pages: Record<string, PageData> = {
  /* ============================== PROFIL ============================== */
  "profil/profil-ppid": {
    title: "Profil PPID BBPPMPV BMTI",
    source: `${S}/profil-ppid-bbppmpv-bmti/`,
    blocks: [emptyNotice("Halaman Profil PPID BBPPMPV BMTI"), { type: "children" }],
  },
  "profil/struktur-organisasi": {
    title: "Struktur Organisasi PPID",
    description: "Bagan struktur organisasi PPID BBPPMPV BMTI.",
    source: `${S}/struktur-organisasi-ppid-2/`,
    blocks: [{ type: "images", layout: "wide", images: [{ src: "profil/struktur-ppid.png", alt: "Bagan Struktur Organisasi PPID BBPPMPV BMTI" }] }],
  },
  "profil/tugas-dan-fungsi": {
    title: "Tugas dan Fungsi PPID",
    source: `${S}/tugas-dan-fungsi-ppid/`,
    blocks: [
      {
        type: "list",
        title: "Tugas",
        items: [
          "Mengkoordinasikan dan mengkonsolidasikan pengumpulan bahan informasi dan dokumentasi;",
          "Menyimpan, mendokumentasikan, menyediakan dan memberi pelayanan informasi kepada publik;",
          "Melakukan verifikasi bahan informasi publik;",
          "Melakukan uji konsekuensi atas informasi yang dikecualikan;",
          "Melakukan pemutakhiran informasi dan dokumentasi;",
          "Menyediakan informasi dan dokumentasi untuk diakses oleh masyarakat;",
          "Menyediakan dan mengamankan Informasi Publik;",
          "Memberikan pelayanan Informasi Publik yang cepat, tepat, dan sederhana;",
        ],
      },
      {
        type: "list",
        title: "Fungsi",
        items: [
          "Pelaksanaan Pengelolaan Informasi Publik;",
          "Penyusunan dan pemutakhiran Daftar Informasi Publik;",
          "Pelayanan perlindungan data pribadi;",
          "Pengembangan Sistem Informasi Publik;",
          "Pelayanan permintaan informasi dan pengaduan;",
          "Pengelolaan akun media sosial;",
          "Penyusunan laporan semester dan tahunan pelaksanaan Pengelolaan Informasi Publik;",
          "Pembinaan, pengawasan, dan evaluasi pelaksanaan Pengelolaan Informasi Publik.",
        ],
      },
    ],
  },
  "profil/visi-dan-misi": {
    title: "Visi dan Misi PPID",
    source: `${S}/visi-dan-misi-ppid-2/`,
    blocks: [
      { type: "heading", eyebrow: "Visi", text: "Terwujudnya pelayanan informasi yang adil, transparan, responsif, independen, dan akuntabel (ATRIA) untuk memenuhi hak pemohon informasi publik sesuai dengan ketentuan peraturan perundang-undangan yang berlaku." },
      {
        type: "list",
        title: "Misi",
        ordered: true,
        items: [
          "Menyediakan informasi publik yang akurat dan dapat dipertanggungjawabkan",
          "Membangun dan mengembangkan sistem penyediaan dan layanan informasi",
          "Meningkatkan pengelolaan informasi dan dokumentasi secara baik, efisien, mudah diakses, dan bersifat desentralisasi",
          "Memanfaatkan teknologi informasi dalam memberikan layanan informasi publik kepada masyarakat dan mendukung pengelolaan keterbukaan informasi publik",
        ],
      },
    ],
  },

  /* ========================= INFORMASI PUBLIK ========================= */
  "informasi-publik/regulasi": {
    title: "Regulasi",
    description: "Regulasi dan POS Layanan Informasi Publik.",
    source: `${S}/regulasi-2/`,
    blocks: [
      { type: "heading", text: "Regulasi dan POS Layanan Informasi Publik" },
      { type: "text", html: "Berikut adalah regulasi yang berkaitan dengan keterbukaan informasi publik secara umum :" },
      {
        type: "docs",
        items: [
          { title: "Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1TDg2oArS056gyrfwnLeA-9RyTtcI0JW3", kind: "folder", category: "Undang-Undang" },
          { title: "Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan Undang-undang Keterbukaan Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1b44TcMX_-EjWAE2_EES9kt8JMwYIKbRh", kind: "folder", category: "Peraturan Pemerintah" },
          { title: "Peraturan Mahkamah Agung Nomor 2 Tahun 2011 tentang Tata Cara Penyelesaian Sengketa Informasi Publik di Pengadilan", href: "https://drive.google.com/drive/u/1/folders/1N_zq4JAWnGa-lSZLEFaZCCMJl2YjUYZr", kind: "folder", category: "Peraturan Mahkamah Agung" },
          { title: "Peraturan Komisi Informasi Pusat Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1lyJGWwHEcrg6gvNMhMf4ZXDQOZsTgLWK", kind: "folder", category: "Peraturan Komisi Informasi" },
        ],
      },
      { type: "text", html: "Regulasi yang berkaitan dengan keterbukaan informasi publik di Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi diatur dalam Peraturan Menteri Pendidikan dan Kebudayaan Nomor 41 Tahun 2020 tentang Layanan Informasi Publik di Kementerian Pendidikan dan Kebudayaan" },
      { type: "text", html: "Terkait pelaksanaan tugas dalam memberikan layanan informasi publik, PPID BBPPMPV BMTI telah menyusun prosedur operasional standar (POS) di antaranya sebagai berikut:" },
      {
        type: "docs",
        items: [
          { title: "POS Layanan Permohonan Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1aQzT5stIxnuSDSDM0vX92yL1F-Pyr4vg", kind: "folder", category: "POS" },
          { title: "POS Layanan Keberatan Atas Permohonan Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1QOf0UqqN1tQMntCaBxFYAYAYIm6UArHM", kind: "folder", category: "POS" },
          { title: "POS Penetapan dan Pemutakhiran Daftar Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1bXCogtEjgmPdb7qkRm64zPYGt64xCyNW", kind: "folder", category: "POS" },
          { title: "POS Pendokumentasian Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1liXoeF5h4toSf_26h43XhOOqkW5hd0Wu", kind: "folder", category: "POS" },
          { title: "POS Layanan Pengumuman Informasi Publik", kind: "folder", category: "POS", description: "Belum ditautkan pada situs sumber." },
        ],
      },
    ],
  },
  "informasi-publik/daftar-informasi-publik": {
    title: "Daftar Informasi Publik",
    source: `${S}/daftar-informasi-publik-4/`,
    blocks: [
      { type: "docs", items: [{ title: "Daftar Informasi Publik", href: "https://drive.google.com/file/d/1tbF4UmeVeaX7Qf-0ccToNFM6KG8LW2e7/view?usp=sharing", kind: "file", category: "Daftar Informasi Publik" }] },
      { type: "embed", src: "https://drive.google.com/file/d/1tbF4UmeVeaX7Qf-0ccToNFM6KG8LW2e7/preview", title: "Daftar Informasi Publik", href: "https://drive.google.com/file/d/1tbF4UmeVeaX7Qf-0ccToNFM6KG8LW2e7/view?usp=sharing" },
    ],
  },
  "informasi-publik/informasi-berkala": { title: "Informasi Berkala", source: `${S}/informasi-berkala/`, blocks: [{ type: "children" }] },
  "informasi-publik/informasi-setiap-saat": { title: "Informasi Setiap Saat", source: `${S}/informasi-setiap-saat-2/`, blocks: [{ type: "children" }] },
  "informasi-publik/informasi-serta-merta": { title: "Informasi Serta Merta", source: `${S}/informasi-serta-merta/`, blocks: [{ type: "children" }] },

  "informasi-publik/tata-cara-memperoleh-informasi-publik": {
    title: "Tata Cara Memperoleh Informasi Publik",
    source: `${S}/tata-cara-memperoleh-informasi-publik/`,
    blocks: prosedurPermintaan,
  },
  "informasi-publik/ringkasan-informasi-program-dan-kegiatan": {
    title: "Ringkasan Informasi Program dan/Kegiatan",
    source: `${S}/ringkasan-informasi-program-dan-kegiatan/`,
    blocks: [{ type: "docs", items: [{ title: "Ringkasan Informasi Program dan/Kegiatan", href: "https://drive.google.com/file/d/136Sz2izLZYofQQEec0SEQL0YaY5d1c_-/view?usp=sharing", kind: "file", category: "Informasi Berkala" }] }],
  },
  "informasi-publik/peraturan-keputusan-dan-kebijakan": {
    title: "Peraturan, Keputusan, dan/atau Kebijakan bagi Publik",
    source: `${S}/peraturan-keputusan-dan-atau-kebijakan-bagi-publik/`,
    blocks: [
      { type: "heading", eyebrow: "Rekap Surat", text: "Keputusan Tahun 2026" },
      { type: "docs", items: [{ title: "Rekap Surat Keputusan Tahun 2026", href: "https://docs.google.com/spreadsheets/d/1cCAb24EnlZuhiSOxB1qoe47uhnQo2TpBUrzWJmTNbIg/edit?usp=sharing", kind: "sheet", category: "Rekap Surat Keputusan" }] },
      { type: "embed", src: "https://docs.google.com/spreadsheets/d/1cCAb24EnlZuhiSOxB1qoe47uhnQo2TpBUrzWJmTNbIg/preview", title: "Rekap Surat Keputusan Tahun 2026", href: "https://docs.google.com/spreadsheets/d/1cCAb24EnlZuhiSOxB1qoe47uhnQo2TpBUrzWJmTNbIg/edit?usp=sharing" },
      { type: "heading", eyebrow: "Rekap Surat", text: "Keputusan Tahun 2025" },
      { type: "docs", items: [{ title: "Rekap Surat Keputusan Tahun 2025", href: "https://docs.google.com/spreadsheets/d/1h9HPRWcIKP5fOXpoxRRkNDrhXsyxBBa-/edit?gid=1129361898#gid=1129361898", kind: "sheet", category: "Rekap Surat Keputusan" }] },
      { type: "embed", src: "https://docs.google.com/spreadsheets/d/1h9HPRWcIKP5fOXpoxRRkNDrhXsyxBBa-/preview", title: "Rekap Surat Keputusan Tahun 2025", href: "https://docs.google.com/spreadsheets/d/1h9HPRWcIKP5fOXpoxRRkNDrhXsyxBBa-/edit?gid=1129361898#gid=1129361898" },
    ],
  },
  "informasi-publik/informasi-keuangan-lainnya": {
    title: "Informasi Keuangan Lainnya",
    source: `${S}/informasi-keuangan-lainnya/`,
    blocks: [
      {
        type: "docs",
        items: [
          { title: "Folder Informasi Keuangan", href: "https://drive.google.com/drive/u/1/folders/1pQRYmENP5eFbfsdq8ix98u-Vbcy6--1S", kind: "folder", category: "Informasi Keuangan" },
          { title: "Realisasi Pendapatan Per Akun 2025", href: "https://bbppmpvbmti.kemendikdasmen.go.id/Ppid/wp-content/uploads/2025/10/Realisasi-Pendapatan-Per-Akun-2025.pdf", kind: "pdf", category: "Informasi Keuangan" },
        ],
      },
      { type: "heading", text: "Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP)" },
      { type: "notice", html: "Tombol <strong>“Buka Dokumen”</strong> untuk LAKIP 2017–2023 pada situs sumber belum memiliki tautan. Dokumen dapat dicari melalui folder Informasi Keuangan di atas. <em>(Ditandai untuk dilengkapi pengelola.)</em>" },
      {
        type: "docs",
        items: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"].map((y) => ({ title: `LAKIP ${y}`, kind: "file" as const, category: "LAKIP" })),
      },
    ],
  },
  "informasi-publik/pengadaan-barang-jasa": {
    title: "Pengadaan Barang/Jasa",
    source: `${S}/pengadaan-barang-jasa/`,
    blocks: [
      emptyNotice("Halaman Pengadaan Barang/Jasa (Informasi Berkala)"),
      {
        type: "docs",
        title: "Informasi pengadaan yang tersedia pada menu PBJ",
        items: [
          { title: "Rencana Umum Pengadaan Barang/Jasa", href: "https://sirup.inaproc.id/sirup/home/penyediaSatker?idSatker=386055", kind: "web", category: "SiRUP" },
          { title: "Pengumuman Pengadaan Barang/Jasa", href: "https://spse.inaproc.id/kemendikdasmen/", kind: "web", category: "SPSE" },
          { title: "Dokumen Pengadaan Barang/Jasa", href: "/pbj/dokumen-pengadaan-barang-jasa", kind: "web", category: "PBJ" },
        ],
      },
    ],
  },
  "informasi-publik/laporan-akuntabilitas-kinerja": {
    title: "Laporan Akuntabilitas Kinerja",
    source: `${S}/laporan-akuntabilitas-kinerja/`,
    blocks: [
      {
        type: "docs",
        items: [
          { title: "Folder Laporan Akuntabilitas", href: "https://drive.google.com/drive/u/1/folders/1iPoR6WxdQgO-9FrU0pmUwi3sNWQkqm7C", kind: "folder", category: "Laporan Akuntabilitas" },
          { title: "LHKPN Heri Sutanto", href: "https://drive.google.com/file/d/1RYhuTCMoI7cWPWvCvGKi-McYBI7d9GYI/view?usp=sharing", kind: "file", category: "LHKPN" },
          { title: "LHKPN Anwar Sidarta", href: "https://drive.google.com/file/d/17DiIUUUtm3StaES_lAfxWaclmoT0nzdo/view?usp=sharing", kind: "file", category: "LHKPN" },
        ],
      },
    ],
  },
  "informasi-publik/ringkasan-laporan-keuangan": {
    title: "Ringkasan Laporan Keuangan",
    source: `${S}/ringkasan-laporan-keuangan/`,
    blocks: [
      { type: "docs", items: [{ title: "Laporan Keuangan — Realisasi Anggaran Belanja", href: "https://bbppmpvbmti.kemendikdasmen.go.id/informasi-publik/realisasi-anggaran-belanja", kind: "web", category: "Laman BBPPMPV BMTI" }] },
    ],
  },
  "informasi-publik/survei-kepuasan-masyarakat": {
    title: "Survei Kepuasan Masyarakat",
    source: `${S}/survei-kepuasan-masyarakat/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Survei Kepuasan Masyarakat", href: "https://drive.google.com/drive/u/1/folders/1VA6iLIAOdauLnZb0ZpALGoOT36ckHMPX", kind: "folder", category: "SKM" }] },
      {
        type: "images",
        layout: "gallery",
        images: [
          { src: "informasi/skm-tw-1.png", alt: "Hasil Survei Kepuasan Masyarakat Triwulan I", caption: "Triwulan I" },
          { src: "informasi/skm-tw-2.png", alt: "Hasil Survei Kepuasan Masyarakat Triwulan II", caption: "Triwulan II" },
          { src: "informasi/skm-tw-3.png", alt: "Hasil Survei Kepuasan Masyarakat Triwulan III", caption: "Triwulan III" },
        ],
      },
    ],
  },
  "informasi-publik/daftar-kepala": {
    title: "Daftar Kepala",
    description: "Daftar Kepala BBPPMPV BMTI dari masa ke masa.",
    source: `${S}/daftar-kepala/`,
    blocks: [
      {
        type: "images",
        layout: "portrait",
        images: [
          ["1980-1992", "Drs. Jorlin Pakpahan"],
          ["1992-1997", "Achmad Suwarna, BE"],
          ["1997-1999", "Ir. Eddi Suwarni, M.Si"],
          ["1999-2004", "Dr. Masriam Bukit"],
          ["2004-2006", "Drs. Sutomo, M.Ed"],
          ["2006-2008", "Drs. A. Dasuki, MM"],
          ["2008-2010", "Dr. Murtoyo, MM"],
          ["2010-2014", "Dr. Deddy H. Karwan"],
          ["2014-2015", "Dr. Nurzaman AM, MM"],
          ["2015-2019", "Drs. Marthen KP, MM"],
          ["2019-2023", "Supriyono, M.Si"],
          ["2023-2024", "Saryadi, S.T., M.B.A."],
          ["2024-sekarang", "Dr. Anwar Sidarta, M.Si"],
        ].map(([p, n], i) => ({ src: `kepala/kepala-${String(i + 1).padStart(2, "0")}.png`, alt: `${n} (${p})`, caption: `${p} · ${n}` })),
      },
    ],
  },
  "informasi-publik/daftar-pejabat-struktural": {
    title: "Daftar Pejabat Struktural",
    source: `${S}/daftar-pejabat-struktural/`,
    blocks: [
      {
        type: "profile",
        photo: "pejabat/anwar-sidarta.webp",
        name: "Dr. Anwar Sidarta, S.Si.,M.Si.",
        position: "Kepala Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri",
        address: "Jalan Pasantren Km 2, Kelurahan Cibabat, Kec Cimahi Utara, Kota Cimahi, Jawa Barat 40513",
        education: ["S2 Magister Sains, Institut Teknologi Sepuluh Nopember", "S3 Doktor Manajemen Pendidikan Universitas Negeri Surabaya"],
        experience: [
          { period: "2024 – Sekarang", role: "Kepala BBPPMPV BMTI" },
          { period: "2022 – 2024", role: "Kepala Bagian Tata Usaha" },
          { period: "2020 – 2022", role: "Ketua Tim ZI WBBM" },
          { period: "2020 – 2022", role: "Pengembang Teknologi Pembelajaran Ahli Madya" },
          { period: "2019 – 2020", role: "Kepala Bidang Fasilitasi Peningkatan Kompetensi PTK" },
        ],
      },
      {
        type: "profile",
        photo: "pejabat/heri-sutanto.jpg",
        name: "Heri Sutanto, S.Kom., M.Kes.",
        position: "Kepala Bagian Tata Usaha Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri",
        address: "Jalan Pasantren Km 2, Kelurahan Cibabat, Kec Cimahi Utara, Kota Cimahi, Jawa Barat 40513",
        education: ["SLTA atau Setara Sma Negeri 1 Demak", "Diploma IV/ S1 Stmik Akakom Yogyakarta", "S2 Universitas Diponegoro"],
        experience: [
          { period: "2024 – Sekarang", role: "Kepala Bagian Tata Usaha BBPPMPV BMTI Dit. Suslat, Ditjen DIKSI" },
          { period: "Jan 2022 – 2024", role: "Kasubbag Tata Usaha Dit. Suslat, Ditjen DIKSI" },
          { period: "Des 2021 – Jan 2022", role: "Analis Kepegawaian Ahli Muda Dit. Suslat, Ditjen DIKSI" },
          { period: "Agus 2020 – Des 2021", role: "Kasubbag Tata Usaha Dit. Suslat, Ditjen DIKSI" },
          { period: "Maret 2020 – Agus 2020", role: "Perencana Ahli Muda Dit. Mitras DUDI Ditjen DIKSI" },
          { period: "Jan 2018 – Maret 2020", role: "Kepala Seksi Prasarana Dit. Binsuslat, Ditjen PAUD DIKMAS" },
          { period: "Sept 2015 – Des 2017", role: "Kepala Seksi Evaluasi Dit. Binsuslat, Ditjen PAUD DIKMAS" },
          { period: "Maret 2013 – Sept 2015", role: "Kepala Seksi Evaluasi Dit. Binsuslat, Ditjen PAUDNI" },
        ],
      },
    ],
  },
  "informasi-publik/rkakl-dan-dipa": {
    title: "RKAKL dan DIPA",
    source: `${S}/rkakl-dan-dipa/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder RKAKL dan DIPA", href: "https://drive.google.com/drive/folders/1xx6tOXZIG26WhSx5DfXTuNMBpn7O8ev6?usp=drive_link", kind: "folder", category: "RKAKL dan DIPA" }] },
      { type: "embed", src: "https://drive.google.com/file/d/1jOZWtaYSCdP9mB8v2VpJsLMv-WIRZzVD/preview", title: "Dokumen RKAKL dan DIPA (1)", href: "https://drive.google.com/file/d/1jOZWtaYSCdP9mB8v2VpJsLMv-WIRZzVD/view" },
      { type: "embed", src: "https://drive.google.com/file/d/1ZXOFs_XkfXEqAHzcstyJA3Iy9mvIr4gQ/preview", title: "Dokumen RKAKL dan DIPA (2)", href: "https://drive.google.com/file/d/1ZXOFs_XkfXEqAHzcstyJA3Iy9mvIr4gQ/view" },
    ],
  },
  "informasi-publik/lhkpn": {
    title: "LHKPN",
    description: "Laporan Harta Kekayaan Penyelenggara Negara.",
    source: `${S}/lhkpm/`,
    blocks: [
      {
        type: "docs",
        items: [
          { title: "LHKPN Anwar Sidarta", href: "https://drive.google.com/file/d/17DiIUUUtm3StaES_lAfxWaclmoT0nzdo/view?usp=drive_link", kind: "file", category: "LHKPN" },
          { title: "LHKPN Heri Sutanto", href: "https://drive.google.com/file/d/1RYhuTCMoI7cWPWvCvGKi-McYBI7d9GYI/view?usp=drive_link", kind: "file", category: "LHKPN" },
        ],
      },
    ],
  },
  "informasi-publik/realisasi-anggaran-belanja": {
    title: "Realisasi Anggaran Belanja",
    source: `${S}/realisasi-anggaran-belanja/`,
    blocks: [{ type: "docs", items: [{ title: "Folder Realisasi Anggaran Belanja", href: "https://drive.google.com/drive/u/1/folders/14R29_bAFVCcMD-JjqirDwpHFdwTLMnk7", kind: "folder", category: "Realisasi Anggaran" }] }],
  },
  "informasi-publik/informasi-kepegawaian": {
    title: "Informasi Kepegawaian",
    source: `${S}/informasi-kepegawaian/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Informasi Kepegawaian", href: "https://drive.google.com/drive/u/1/folders/1u-WP4aOU4h9ELYy-zdc5xrSUxivq1q-n", kind: "folder", category: "Kepegawaian" }] },
      { type: "images", layout: "single", images: [{ src: "informasi/profil-data-kepegawaian.png", alt: "Profile Data Kepegawaian BBPPMPV BMTI" }] },
    ],
  },
  "informasi-publik/organisasi-administrasi-kepegawaian-dan-keuangan": {
    title: "Organisasi, Administrasi, Kepegawaian, dan Keuangan",
    source: `${S}/organisasi-administrasi-kepegawaian-dan-keuangan-2/`,
    blocks: [
      {
        type: "docs",
        items: [
          { title: "Folder Utama", href: "https://drive.google.com/drive/u/1/folders/1aPKNwAb-i1FswVjyJrIDzVRXJsNNFrot", kind: "folder", category: "Informasi Setiap Saat" },
          { title: "Organisasi", href: "https://drive.google.com/drive/folders/1bN14Fu5T18Wmi33nDU1WkKf2xpOHiIyy?usp=drive_link", kind: "folder", category: "Organisasi" },
          { title: "Administrasi", href: "https://drive.google.com/drive/folders/1jyU1lo-4UJAp5eFavjCm1w-1wUWmpce9?usp=drive_link", kind: "folder", category: "Administrasi" },
          { title: "Kepegawaian", href: "https://drive.google.com/drive/folders/1zq0mhquS_RGV-27FBB-9p7px5t187-gc?usp=drive_link", kind: "folder", category: "Kepegawaian" },
          { title: "Keuangan", href: "https://drive.google.com/drive/folders/1g0ESC0NPzKttjV9x3wAikrQIUlqnlcHl?usp=drive_link", kind: "folder", category: "Keuangan" },
        ],
      },
      { type: "embed", src: "https://drive.google.com/file/d/1UTiwLEdgZpgkCX7F58NVl80-mo8DX8_Q/preview", title: "Dokumen Organisasi, Administrasi, Kepegawaian, dan Keuangan (1)", href: "https://drive.google.com/file/d/1UTiwLEdgZpgkCX7F58NVl80-mo8DX8_Q/view" },
      { type: "embed", src: "https://drive.google.com/file/d/1gYBoIuUBMwP3IqGXaIZDn4h2k1zVfLvw/preview", title: "Dokumen Organisasi, Administrasi, Kepegawaian, dan Keuangan (2)", href: "https://drive.google.com/file/d/1gYBoIuUBMwP3IqGXaIZDn4h2k1zVfLvw/view" },
    ],
  },
  "informasi-publik/prosedur-pengaduan-penyalahgunaan-wewenang": {
    title: "Prosedur Pengaduan Penyalahgunaan Wewenang atau Pelanggaran",
    source: `${S}/posedur-pengaduan-penyalahgunaan-wewenang-atau-pelanggaran/`,
    blocks: pengaduanWbs,
  },
  "informasi-publik/ringkasan-laporan-akses-informasi-publik": {
    title: "Ringkasan Laporan Akses Informasi Publik",
    source: `${S}/ringkasan-laporan-akses-informasi-publik-3/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Ringkasan Laporan Akses Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1wbF35VBDFzuyEd2DZ-HzUCRl828bm8cK", kind: "folder", category: "Laporan Akses Informasi" }] },
      { type: "embed", src: "https://drive.google.com/file/d/1AK_TJ_f8nUl95m8UCQrLTlhx3x-SQdSM/preview", title: "Ringkasan Laporan Akses Informasi Publik (1)", href: "https://drive.google.com/file/d/1AK_TJ_f8nUl95m8UCQrLTlhx3x-SQdSM/view" },
      { type: "embed", src: "https://drive.google.com/file/d/1o9HT4k7KbcElD0IgbvcIEWH9DRtTmmu6/preview", title: "Ringkasan Laporan Akses Informasi Publik (2)", href: "https://drive.google.com/file/d/1o9HT4k7KbcElD0IgbvcIEWH9DRtTmmu6/view" },
    ],
  },
  "informasi-publik/persuratan": {
    title: "Persuratan",
    source: `${S}/persuratan-2/`,
    blocks: [{ type: "docs", items: [{ title: "Folder Persuratan", href: "https://drive.google.com/drive/u/1/folders/1cBDORnKZRWKH4ZoxGQlFijSe9XywzYhy", kind: "folder", category: "Persuratan" }] }],
  },
  "informasi-publik/informasi-aset": {
    title: "Informasi Aset",
    source: `${S}/informasi-aset-2/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Informasi Aset", href: "https://drive.google.com/drive/u/1/folders/1Lh5BiKrx9Om8jRabpncD6ahax5thNiH8", kind: "folder", category: "Aset" }] },
      { type: "embed", src: "https://drive.google.com/file/d/1x6RYfsWJWBTcyj8h_GciP1NyQjyTEfDt/preview", title: "Dokumen Informasi Aset", href: "https://drive.google.com/file/d/1x6RYfsWJWBTcyj8h_GciP1NyQjyTEfDt/view" },
    ],
  },
  "informasi-publik/rencana-strategis": {
    title: "Rencana Strategis",
    source: `${S}/rencana-strategis/`,
    blocks: [
      { type: "notice", html: "Tombol <strong>“Buka Dokumen”</strong> pada halaman Rencana Strategis situs sumber belum memiliki tautan dokumen. <em>(Ditandai untuk dilengkapi pengelola.)</em>" },
      {
        type: "docs",
        items: [
          "Renstra rev2017",
          "Renstra rev2018 v.1",
          "Renstra rev2018 v.2",
          "Renstra rev2019",
          "Renstra Revisi 2 Tahun 2019_rev (25-01-2020)",
          "Renstra 2020-2024",
          "Renstra 2020-2024 Rev.2",
          "Renstra 2020-2024 Rev.3",
          "Renstra 2020-2024 Rev.4",
        ].map((t) => ({ title: t, kind: "file" as const, category: "Renstra" })),
      },
    ],
  },
  "informasi-publik/agenda-kegiatan": {
    title: "Agenda Kegiatan",
    source: `${S}/agenda-kegiatan-2/`,
    blocks: [
      { type: "docs", items: [{ title: "Agenda Kegiatan", href: "https://docs.google.com/spreadsheets/d/1nEjPye4GpH8dTASmg0Chelc0tviMVPiZ/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "sheet", category: "Agenda" }] },
      { type: "embed", src: "https://docs.google.com/spreadsheets/d/1nEjPye4GpH8dTASmg0Chelc0tviMVPiZ/preview", title: "Agenda Kegiatan", href: "https://docs.google.com/spreadsheets/d/1nEjPye4GpH8dTASmg0Chelc0tviMVPiZ/edit?usp=sharing" },
    ],
  },
  "informasi-publik/informasi-dikecualikan": {
    title: "Informasi Dikecualikan",
    source: `${S}/informasi-dikecualikan-2/`,
    blocks: [
      {
        type: "list",
        title: "Informasi yang Dikecualikan di Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) berdasarkan hasil pengujian konsekuensi atas informasi tersebut di antaranya meliputi:",
        items: [
          "Data pribadi pegawai Kemendikdasmen;",
          "Data pribadi peserta didik;",
          "Data pribadi pendidik dan tenaga kependidikan;",
          "Laporan keuangan yang belum diaudit oleh Badan Pengawas Keuangan;",
          "Surat menyurat yang sifatnya rahasia;",
          "Perjanjian kerja sama dengan pihak ketiga yang sifatnya rahasia;",
          "Soal dan kunci jawaban asesmen pegawai Kemendikdasmen;",
          "Soal dan kunci jawaban seleksi Calon Aparatus Sipil Negara Kemendikdasmen;",
          "Data pribadi penulis soal dan kunci jawaban seleksi Calon Aparatur Sipil Negara Kemendikdasmen;",
          "Data pribadi penerima bantuan pemerintah dan atau bantuan sosial dari Kemendikdasmen; dan",
          "Data pribadi pelaku dan korban kekerasan di satuan pendidikan;",
          "Data pribadi satuan tugas dan tim pencegahan dan penanganan kekerasan di satuan pendidikan;",
          "Lainnya.",
        ],
      },
    ],
  },
  "informasi-publik/indeks-kepuasan-masyarakat": {
    title: "Indeks Kepuasan Masyarakat",
    source: `${S}/indeks-kepuasan-masyarakat-2/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Indeks Kepuasan Masyarakat", href: "https://drive.google.com/drive/u/1/folders/1LJAqTo_snusntiTkt9WPzAnR5conNpAc", kind: "folder", category: "IKM" }] },
      { type: "embed", src: "https://drive.google.com/file/d/1VrwIEEQtK2JJH0Lx58eWxNRrJXOo-wT0/preview", title: "Indeks Kepuasan Masyarakat (1)", href: "https://drive.google.com/file/d/1VrwIEEQtK2JJH0Lx58eWxNRrJXOo-wT0/view" },
      { type: "embed", src: "https://drive.google.com/file/d/1GVbvsAF0011ScebMzJY9YGRxgM1j70g6/preview", title: "Indeks Kepuasan Masyarakat (2)", href: "https://drive.google.com/file/d/1GVbvsAF0011ScebMzJY9YGRxgM1j70g6/view" },
      { type: "embed", src: "https://drive.google.com/file/d/1i_hNcHWsBuhdTU9YbIhhpfdwfkcHeUiF/preview", title: "Indeks Kepuasan Masyarakat (3)", href: "https://drive.google.com/file/d/1i_hNcHWsBuhdTU9YbIhhpfdwfkcHeUiF/view" },
    ],
  },

  /* ======================== LAYANAN INFORMASI ======================== */
  "layanan-informasi/maklumat": { title: "Maklumat Pelayanan", source: `${S}/maklumat-pelayanan-4/`, blocks: [{ type: "children" }] },
  "layanan-informasi/maklumat-pelayanan": {
    title: "Maklumat Pelayanan",
    source: `${S}/maklumat-pelayanan-2/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Maklumat Pelayanan", href: "https://drive.google.com/drive/u/1/folders/1R4DR1d3f4nWqCg8OpgbXM_dcfMx98p1e", kind: "folder", category: "Maklumat" }] },
      { type: "images", layout: "wide", images: [{ src: "layanan/maklumat-pelayanan.png", alt: "Maklumat Pelayanan BBPPMPV BMTI" }] },
    ],
  },
  "layanan-informasi/maklumat-pelayanan-informasi-publik": {
    title: "Maklumat Pelayanan Informasi Publik",
    source: `${S}/makmulat-pelayanan-informasi-publik/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Maklumat Pelayanan Informasi Publik", href: "https://drive.google.com/drive/u/1/folders/1NiSFrT7uErB5kePInPPlTWu0vtHt5dOa", kind: "folder", category: "Maklumat" }] },
      { type: "images", layout: "wide", images: [{ src: "layanan/maklumat-ppid.png", alt: "Maklumat Pelayanan Informasi Publik PPID BBPPMPV BMTI" }] },
    ],
  },
  "layanan-informasi/standar-pelayanan": {
    title: "Standar Pelayanan",
    source: `${S}/standart-pelayanan/`,
    blocks: [
      { type: "heading", text: "Pelatihan Tatap Muka" },
      { type: "docs", items: [{ title: "Standar Pelayanan", href: "https://drive.google.com/file/d/1oO6Vi7vIQNlT8YSBN4gAc1xQCH5GqYOd/view?usp=sharing", kind: "file", category: "Standar Pelayanan" }] },
      { type: "images", layout: "single", images: [{ src: "layanan/standar-pelayanan.jpeg", alt: "Banner Standar Pelayanan", href: "https://drive.google.com/file/d/1oO6Vi7vIQNlT8YSBN4gAc1xQCH5GqYOd/view?usp=sharing" }] },
    ],
  },
  "layanan-informasi/prosedur-pelayanan": {
    title: "Prosedur Pelayanan",
    source: `${S}/prosedur-pelayanan/`,
    blocks: [{ type: "children" }],
  },
  "layanan-informasi/prosedur-permintaan-informasi": {
    title: "Prosedur Permintaan Informasi",
    source: `${S}/prosedur-permintaan-informasi-2/`,
    blocks: prosedurPermintaan,
  },
  "layanan-informasi/prosedur-pengajuan-keberatan": {
    title: "Prosedur Pengajuan Keberatan",
    source: `${S}/prosedur-pengajuan-keberetan/`,
    blocks: [
      {
        type: "steps",
        items: [
          "Layanan informasi BBPPMPV BMTI dikelola secara terpusat (satu pintu) oleh Pejabat Pengelola Informasi dan Dokumentasi (PPID) yaitu Kepala Bagian Tata Usaha BBPPMPV BMTI.",
          "Unit layanan informasi publik diselenggarakan di Unit Layanan Publik (ULP). Jl. Pesantren KM 2, Cibabat, Cimahi Utara, di bawah di bawah Bagian Tata Usaha.",
          "Pemohon informasi yang telah menerima tanggapan tertulis dari PPID BBPPMPV BMTI dan dinilai tidak memenuhi permintaan informasi dan atau alasan lainnya sesuai dengan Undang-undang Keterbukaan Informasi Publik Nomor 14 Tahun 2008 dapat mengajukan keberatan informasi kepada Atasan PPID BBPPMPV BMTI;",
          "Sesuai ketentuan Undang-undang tersebut, jangka waktu pengajuan keberatan informasi selambat-lambatnya 30 (tiga puluh) hari kerja sejak diterimanya tanggapan tertulis dari PPID BBPPMPV BMTI.",
          "Dalam waktu maksimal 30 hari kerja sejak diterimanya pengajuan keberatan informasi dari pemohon informasi yang telah teregister, Atasan PPID BBPPMPV BMTI akan memberikan tanggapan tertulis atas pengajuan keberatan informasi tersebut;",
          "Atasan PPID BBPPMPV BMTI dalam hal ini Kepala BBPPMPV BMTI.",
        ],
      },
      {
        type: "schedule",
        title: "Jadwal layanan pengajuan keberatan informasi",
        rows: [
          { label: "Senin – Kamis", value: "Pukul 09.00-12.00 WIB dan Pukul 13.00-15.00 WIB" },
          { label: "Jumat", value: "Pukul 09.00-11.30 WIB dan Pukul 13.30-15.00 WIB" },
        ],
      },
    ],
  },
  "layanan-informasi/prosedur-penyelesaian-sengketa": {
    title: "Prosedur Penyelesaian Sengketa Informasi",
    source: `${S}/prosedur-penyelesain-sengkete-informasi/`,
    blocks: [
      {
        type: "steps",
        items: [
          "Layanan informasi BBPPMPV BMTI dikelola secara terpusat (satu pintu) oleh Pejabat Pengelola Informasi dan Dokumentasi (PPID) yaitu Kepala Bagian Tata Usaha BBPPMPV BMTI.",
          "Unit layanan informasi publik diselenggarakan di Unit Layanan Publik (ULP). Jl. Pesantren KM 2, Cibabat, Cimahi Utara, di bawah di bawah Bagian Tata Usaha.",
          'Pemohon informasi yang telah menerima tanggapan tertulis dari PPID BBPPMPV BMTI dan dinilai tidak memenuhi permintaan informasi dan atau alasan lainnya sesuai dengan Undang-undang Keterbukaan Informasi Publik Nomor 14 Tahun 2008 dapat mengajukan sengketa informasi ke Komisi Informasi Pusat dengan alamat Wisma BSG Gedung Annex Lantai 1, Jl Abdul Muis No. 40, Jakarta Pusat 10110 atau melalui laman berikut : <a href="https://simsi.komisiinformasi.go.id/register" target="_blank" rel="noopener">simsi.komisiinformasi.go.id/register</a>;',
          "Sesuai ketentuan Undang-undang tersebut, jangka waktu pengajuan sengketa informasi selambat-lambatnya 14 (empat belas) hari kerja sejak diterimanya tanggapan tertulis dari Atasan PPID BBPPMPV BMTI, dalam hal ini Kepala BBPPMPV BMTI;",
          "Dalam waktu 14 hari kerja sejak diterimanya permohonan penyelesaian sengketa dari pemohon informasi, Komisi Informasi mulai melakukan proses penyelesaian sengketa;",
          "Proses penyelesaian sengketa informasi dapat dilakukan melalui jalur mediasi dan atau sidang adjudikasi nonlitigasi paling lambat 100 hari kerja.",
        ],
      },
      { type: "text", html: 'Informasi lebih lengkap mengenai penyelesaian sengketa informasi dapat mengunjungi laman berikut: <a href="https://simsi.komisiinformasi.go.id/" target="_blank" rel="noopener">simsi.komisiinformasi.go.id/</a>' },
    ],
  },
  "layanan-informasi/prosedur-pengaduan-via-wbs": {
    title: "Prosedur Pengaduan via WBS",
    source: `${S}/prosedur-pengaduan-via-wbs-2/`,
    blocks: pengaduanWbs,
  },
  "layanan-informasi/layanan-ppid": { title: "Layanan PPID BBPPMPV BMTI", source: `${S}/layanan-ppid-bbppmpv-bmti/`, blocks: [{ type: "children" }] },
  "layanan-informasi/formulir-permintaan-informasi": {
    title: "Formulir Permintaan Informasi",
    source: `${S}/formulir-permintaan-informasi/`,
    blocks: [
      {
        type: "docs",
        items: [
          { title: "Formulir Online Permintaan Informasi", href: "https://docs.google.com/forms/d/e/1FAIpQLSfZH6eWc5zwnniOs0-jn6siXyABt5-eW2W5RrUSy0eSHoRJbQ/viewform", kind: "form", category: "Online" },
          { title: "Formulir Offline Permintaan Informasi", href: "https://drive.google.com/file/d/1SJNJKotv7UxxFmR9WUxR1A8ICWHIjovl/view", kind: "file", category: "Offline" },
          { title: "Formulir Offline Permintaan Informasi bermaterai", href: "https://drive.google.com/file/d/1CjpifH_ZxU0BLoSN4tFJNkYxEJlDkpP8/view", kind: "file", category: "Offline" },
        ],
      },
    ],
  },
  "layanan-informasi/formulir-keberatan-informasi": {
    title: "Formulir Keberatan Informasi",
    source: `${S}/formulir-keberetan-informasi/`,
    blocks: [
      { type: "text", html: "Bila Anda Merasa Menerima Keberatan Sebuah Informasi Silahkan isi Formulir Berikut" },
      {
        type: "docs",
        items: [
          { title: "Form Offline", href: "https://drive.google.com/drive/u/1/folders/1ZDbuIZpV6Fg0AgcUPl_qbKzM9PZra83e", kind: "folder", category: "Offline" },
          { title: "Form Online", href: "https://docs.google.com/forms/d/170FUxSNhSmZuMIt3RAiSTl3qYsUImNLQgUT97cEvsM8/viewform", kind: "form", category: "Online" },
        ],
      },
    ],
  },

  /* ============================ PUBLIKASI ============================ */
  "publikasi/majalah-swara": {
    title: "Majalah Swara",
    source: `${S}/majalah-swara/`,
    blocks: [
      { type: "docs", items: [{ title: "Folder Majalah Swara", href: "https://drive.google.com/drive/u/1/folders/1VA6iLIAOdauLnZb0ZpALGoOT36ckHMPX", kind: "folder", category: "Majalah Swara" }] },
      {
        type: "images",
        layout: "portrait",
        images: [
          { src: "publikasi/majalah-swara-1.png", alt: "Sampul Majalah Swara", href: "https://drive.google.com/file/d/16tyJkQSN3b7w-k6Pdv6KDvn5a_QKugmq/view?usp=sharing" },
          { src: "publikasi/majalah-swara-2.png", alt: "Sampul Majalah Swara" },
          { src: "publikasi/majalah-swara-3.png", alt: "Sampul Majalah Swara" },
          { src: "publikasi/majalah-swara-4.png", alt: "Sampul Majalah Swara" },
          { src: "publikasi/majalah-swara-5.png", alt: "Sampul Majalah Swara" },
        ],
      },
    ],
  },
  "publikasi/galeri-dokumentasi": {
    title: "Galeri Dokumentasi",
    description: "Dokumentasi kegiatan, layanan, dan sinergi kelembagaan di lingkungan BBPPMPV BMTI Kemendikdasmen.",
    source: `${S}/galeri-dokumentasi/`,
    blocks: [
      {
        type: "images",
        layout: "gallery",
        images: [
          {
            src: "galeri/hari-kesaktian-pancasila-2025.jpg",
            alt: "Upacara Peringatan Hari Kesaktian Pancasila 2025 di BBPPMPV BMTI",
            caption: "Upacara Peringatan Hari Kesaktian Pancasila (1 Oktober 2025)",
          },
          {
            src: "galeri/iht-pemanfaatan-ai.jpg",
            alt: "In House Training Pemanfaatan AI dalam Pelatihan dan Penandatanganan Kerja Sama dengan SEAMOLEC",
            caption: "IHT Pemanfaatan AI dalam Pelatihan & Penandatanganan PKS dengan SEAMOLEC",
          },
          {
            src: "galeri/pelatihan-kurikulum-pm-guru.jpg",
            alt: "Pelatihan Kurikulum Pembelajaran Mendalam bagi Guru Vokasi di BBPPMPV BMTI",
            caption: "Pelatihan Kurikulum dan Peningkatan Kompetensi Pendidik Vokasi",
          },
          {
            src: "galeri/kunjungan-itjen.jpg",
            alt: "Kunjungan Inspektorat Jenderal Kemendikdasmen di BBPPMPV BMTI",
            caption: "Kunjungan Kerja dan Pendampingan Inspektorat Jenderal Kemendikdasmen",
          },
          {
            src: "galeri/kerjasama-disperindag.jpg",
            alt: "Koordinasi dan Kerja Sama BBPPMPV BMTI dengan Disperindag",
            caption: "Sinergi dan Kerja Sama Lintas Instansi bersama Disperindag",
          },
          {
            src: "galeri/studi-tiru-bpmp-jateng.jpg",
            alt: "Kunjungan Studi Tiru Zona Integritas WBK/WBBM di BBPPMPV BMTI",
            caption: "Studi Tiru Zona Integritas WBK/WBBM BPMP Jawa Tengah ke BBPPMPV BMTI",
          },
        ],
      },
    ],
  },

  /* =============================== PBJ =============================== */
  "pbj/dokumen-pengadaan-barang-jasa": {
    title: "Dokumen Pengadaan Barang/Jasa",
    source: `${S}/dokumen-pengadaan-barang-jasa/`,
    blocks: [
      { type: "text", html: 'Berikut adalah beberapa dokumen paket pengadaan barang/jasa yang ada di BBPPMPV BMTI meliputi:<br/>Daftar Dokumen Kontrak yang telah dikuasai – <a href="/pbj/daftar-kontrak-pbj">Lihat dokumen di sini!</a>' },
      {
        type: "yearDocs",
        groups: [
          {
            year: "2026",
            items: [
              { title: "Paket Fullboard Meeting Rapat Koordinasi Program Upskilling dan Reskilling PTK Vokasi pada BBPPMPV BMTI Tahun 2026", href: "https://docs.google.com/document/d/167r85ldGDLhckGq3GvtDuROZx3Rpqo9B/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
              { title: "Pengadaan Langsung Pemeliharaan Gedung/ Bangunan Kantor Bertingkat (Pemeliharaan Arsitektur Lobi Asrama Waskita)", href: "https://docs.google.com/document/d/10akEJecLMQ_fx8TlpnZRjdxYEBtydvxc/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
            ],
          },
          {
            year: "2025",
            items: [
              { title: "Tender Pekerjaan Jasa Konstruksi Renovasi Ruang Makan Asrama BBPPMPV BMTI Tahun 2025", href: "https://docs.google.com/document/d/17DCD5XLBJ-lccUVgxByp71ToHamgUi9R/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
              { title: "Pengadaan Langsung Pemeliharaan Gedung/ Bangunan Kantor Bertingkat (Pemeliharaan Kamar Asrama Waskita 11 Unit) BBPPMPV BMTI Tahun 2025", href: "https://docs.google.com/document/d/1cCkwYUZfa_BFy0vC7HnR1iIwac3LOCEU/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
            ],
          },
          {
            year: "2024",
            items: [
              { title: "Pengadaan Paket Fullboard Meeting Rapat Koordinasi Upskilling dan Reskilling Pendidik dan Tenaga Kependidikan Vokasi Berstandar Industri Tahun 2024", href: "https://docs.google.com/document/d/1Pm9FhCwRTBc1a3M_IOeTMZLLTKseUOpN/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
              { title: "Pengadaan Langsung Pemeliharaan Gedung/Bangunan Kantor Bertingkat (Pemeliharaan Ruang Gas dan Gudang Utama Program Keahlian Las dan Pabrikasi Logam)", href: "https://docs.google.com/document/d/1e70t6JBMuGwMrsQS3gGC3zN9VTIy9b3v/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
            ],
          },
          {
            year: "2023",
            items: [
              { title: "Pengadaan Paket Fullboard Meeting Workshop Penelusuran Data BMW Lulusan di SMK dan Tindak Lanjut Percepatan Capaian Tracer Studiy Lulusan SMK Tahun 2023 pada BBPPMPV BMTI", href: "https://docs.google.com/document/d/1vddsL2rmq6RjHcr1yT8WZ-HfGyP5xShW/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
              { title: "Pengadaan Langsung Pemeliharaan Gedung/ Bangunan Kantor Bertingkat (Pekerjaan Interior Mushola Gedung Administrasi Lantai 2)", href: "https://docs.google.com/document/d/1ZmwL-_hCxHZMb7vvEfBZpx8-UWdMZ8qu/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc" },
            ],
          },
        ],
      },
    ],
  },
  "pbj/daftar-kontrak-pbj": {
    title: "Daftar Kontrak PBJ",
    description: "Daftar Kontrak Pengadaan Barang dan Jasa yang Dikuasai.",
    source: `${S}/daftar-kontrak-pbj-2/`,
    blocks: [
      { type: "text", html: "Daftar Kontrak Pengadaan Barang dan Jasa yang Dikuasai:" },
      {
        type: "docs",
        items: [
          { title: "Paket Fullboard Meeting Rapat Koordinasi Program Upskilling dan Reskilling PTK Vokasi pada BBPPMPV BMTI Tahun 2026", href: "https://docs.google.com/document/d/167r85ldGDLhckGq3GvtDuROZx3Rpqo9B/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc", category: "Kontrak 1" },
          { title: "Pengadaan Langsung Pemeliharaan Gedung/ Bangunan Kantor Bertingkat (Pekerjaan Interior Mushola Gedung Administrasi Lantai 2)", href: "https://docs.google.com/document/d/10akEJecLMQ_fx8TlpnZRjdxYEBtydvxc/edit?usp=sharing&ouid=108439013394013240914&rtpof=true&sd=true", kind: "doc", category: "Kontrak 2" },
        ],
      },
    ],
  },
};


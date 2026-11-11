import { pages } from "./pages";

export interface NavSubItem {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  children?: { label: string; href: string; external?: boolean }[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavSubItem[];
}

export const siteConfig = {
  name: "PPID BBPPMPV BMTI",
  shortName: "PPID BMTI",
  fullName: "Pejabat Pengelola Informasi dan Dokumentasi BBPPMPV BMTI",
  institution:
    "Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri",
  ministry: "Kementerian Pendidikan Dasar dan Menengah",
  tagline: "Layanan Informasi Publik yang Adil, Transparan, Responsif, Independen, dan Akuntabel (ATRIA)",
  motto: "Cepat · Tepat · Efisien",
  sourceUrl: "https://bbppmpvbmti.kemendikdasmen.go.id/Ppid",
  mainSiteUrl: "https://bbppmpvbmti.kemendikdasmen.go.id",
  contact: {
    unit: "Unit Layanan Publik (ULP) — Bagian Tata Usaha BBPPMPV BMTI",
    address: "Jl. Pesantren KM 2, Kelurahan Cibabat, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513",
    phone: "(022) 6652326",
    phoneHref: "tel:+62226652326",
    fax: "(022) 6654698",
    whatsapp: "+62 811-2242-326",
    whatsappHref: "https://wa.me/628112242326",
    whatsappUlp: "0821-2190-0022",
    whatsappUlpHref: "https://wa.me/6282121900022",
    whatsappPengaduan: "0821-2190-0021",
    whatsappPengaduanHref: "https://wa.me/6282121900021",
    email: "bbppmpv.bmti@kemendikdasmen.go.id",
    emailAlt: "bbppmpv.bmti@kemdikbud.go.id",
    emailPengaduan: "Pengaduan.bmti@kemendikdasmen.go.id",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=bbppmpv%20bmti%20cimahi&t=m&z=15&output=embed&iwloc=near",
    mapsLink: "https://maps.google.com/?q=BBPPMPV+BMTI+Cimahi",
    linktreeUrl: "https://linktr.ee/bmti",
  },
  serviceHours: [
    { label: "Pendaftaran Layanan", time: "08.00 – 11.00 WIB" },
    { label: "Senin – Kamis", time: "09.00 – 15.00 WIB (Istirahat 12.00 – 13.00 WIB)" },
    { label: "Jumat", time: "09.00 – 15.30 WIB (Istirahat 11.30 – 13.30 WIB)" },
    { label: "Sabtu & Minggu", time: "Tutup" },
  ],
  socials: [
    {
      name: "Instagram",
      handle: "@bmti.kemdikbud",
      href: "http://www.instagram.com/bmti.kemdikbud",
    },
    {
      name: "TikTok",
      handle: "@bmti.kemdikbud",
      href: "http://www.tiktok.com/@bmti.kemdikbud",
    },
    {
      name: "Facebook",
      handle: "bmti.kemdikbud",
      href: "http://www.facebook.com/bmti.kemdikbud/",
    },
    {
      name: "YouTube",
      handle: "@bmtikemdikbud",
      href: "http://www.youtube.com/@bmtikemdikbud",
    },
    {
      name: "X / Twitter",
      handle: "@bmti_kemdikbud",
      href: "http://twitter.com/bmti_kemdikbud",
    },
    {
      name: "Threads",
      handle: "@bmti.kemdikbud",
      href: "http://www.threads.net/@bmti.kemdikbud",
    },
    {
      name: "WhatsApp",
      handle: "+62 811-2242-326",
      href: "https://wa.me/+628112242326",
    },
    {
      name: "Linktree BMTI",
      handle: "linktr.ee/bmti",
      href: "https://linktr.ee/bmti",
    },
  ],
};

/**
 * Daftar Tautan Eksternal Resmi pada Menu "Tautan" Website Sumber PPID BBPPMPV BMTI
 */
export const tautanLinks = [
  {
    title: "PPID Kemendikdasmen",
    category: "Portal PPID Utama",
    description:
      "Portal resmi Pejabat Pengelola Informasi dan Dokumentasi Kementerian Pendidikan Dasar dan Menengah.",
    href: "https://ppid.kemendikdasmen.go.id/",
  },
  {
    title: "PPID Vokasi",
    category: "Direktorat Jenderal Pendidikan Vokasi",
    description:
      "Laman keterbukaan informasi publik Direktorat Jenderal Pendidikan Vokasi Kemendikdasmen.",
    href: "https://www.vokasi.kemendikdasmen.go.id/ppid/",
  },
  {
    title: "SINTESA",
    category: "Sistem Informasi Terpadu BBPPMPV BMTI",
    description:
      "Layanan sistem informasi dan aplikasi kejuruan terpadu di lingkungan BBPPMPV BMTI.",
    href: "https://sintesa.kejuruan.id/",
  },
  {
    title: "Mesin Mutu",
    category: "Penjaminan Mutu Pendidikan Vokasi",
    description:
      "Portal informasi dan instrumen penjaminan mutu pendidikan vokasi bidang mesin dan teknik industri.",
    href: "http://mesinmutu.kejuruan.id/mesinmutu/Home/index",
  },
  {
    title: "Layanan Pengadaan Secara Elektronik (LPSE)",
    category: "Pengadaan Elektronik",
    description:
      "Sistem Pengadaan Secara Elektronik (SPSE) Kementerian Pendidikan Dasar dan Menengah pada portal INAPROC.",
    href: "https://spse.inaproc.id/kemendikdasmen",
  },
  {
    title: "UKPBJ Kemdikdasmen",
    category: "Unit Kerja Pengadaan Barang/Jasa",
    description:
      "Portal resmi Unit Kerja Pengadaan Barang/Jasa Kementerian Pendidikan Dasar dan Menengah.",
    href: "https://ukpbj.kemendikdasmen.go.id/",
  },
  {
    title: "Rumah Pendidikan",
    category: "Pusat Informasi Kemendikdasmen",
    description:
      "Pusat bantuan dan informasi terpadu layanan ekosistem Rumah Pendidikan Kemendikdasmen.",
    href: "https://pusatinformasi.rumahpendidikan.kemendikdasmen.go.id/hc/id",
  },
  {
    title: "CASN Kemdikdasmen",
    category: "Seleksi Aparatur Sipil Negara",
    description:
      "Portal resmi informasi pengadaan Calon Aparatur Sipil Negara (CASN) di lingkungan Kemendikdasmen.",
    href: "https://casn.kemendikdasmen.go.id/",
  },
];

/**
 * Daftar 6 Aspek Monitoring dan Evaluasi Keterbukaan Informasi Publik (Monev KIP)
 * sesuai menu "Monev KIP" pada website sumber PPID BBPPMPV BMTI
 */
export const monevKipAspects = [
  {
    code: "Aspek 01",
    title: "Aspek Sarana Dan Prasarana",
    category: "Monev KIP",
    description:
      "Dokumentasi bukti dukung fasilitas, ruang layanan Unit Layanan Publik (ULP), dan kelengkapan sarana prasarana PPID BBPPMPV BMTI.",
    href: "https://drive.google.com/drive/u/1/folders/1s9dyipuK8X2m_Kb_s082AVu4ye5maPHO",
  },
  {
    code: "Aspek 02",
    title: "Aspek Kualitas Informasi",
    category: "Monev KIP",
    description:
      "Bukti dukung pemenuhan standar kualitas, akurasi, kelengkapan, dan kemutakhiran informasi publik yang disajikan.",
    href: "https://drive.google.com/drive/u/1/folders/1MrsV4CaGottS5zaGcITKkl8mSNsbxCqb",
  },
  {
    code: "Aspek 03",
    title: "Aspek Jenis Informasi",
    category: "Monev KIP",
    description:
      "Kelengkapan klasifikasi Daftar Informasi Publik (DIP), Informasi Berkala, Serta Merta, Setiap Saat, dan Informasi Dikecualikan.",
    href: "https://drive.google.com/drive/u/1/folders/1wafKiMSlXszwHnTi6nF9EOOrjZeVlNtH",
  },
  {
    code: "Aspek 04",
    title: "Aspek Komitmen Organisasi",
    category: "Monev KIP",
    description:
      "Regulasi internal, SK penetapan PPID, struktur organisasi, anggaran, serta dukungan pimpinan terhadap keterbukaan informasi publik.",
    href: "https://drive.google.com/drive/u/1/folders/1Kw9Mt6sDkDLRteHfFBDTN2YqxNvbCSQ-",
  },
  {
    code: "Aspek 05",
    title: "Aspek Digitalisasi",
    category: "Monev KIP",
    description:
      "Pemanfaatan teknologi informasi, portal website PPID, formulir layanan daring, aplikasi mobile e-PPID, serta kanal media sosial.",
    href: "https://drive.google.com/drive/u/1/folders/1wIAXU53OD-M1s4BKOZKk0gdVlKPOQvIi",
  },
  {
    code: "Aspek 06",
    title: "Aspek Pengadaan Barang/Jasa",
    category: "Monev KIP",
    description:
      "Keterbukaan informasi perencanaan (SiRUP), pengumuman tender/seleksi (SPSE), serta dokumen kontrak pengadaan barang dan jasa.",
    href: "https://drive.google.com/drive/u/1/folders/12bxezK3AlQi6UHuWu_FLLEeNeXd0qmg7",
  },
];

/**
 * Struktur Menu Navigasi Resmi sesuai 100% Menu Website Sumber PPID BBPPMPV BMTI
 * (1. Beranda, 2. Profil, 3. Informasi Publik, 4. Layanan Informasi, 5. Publikasi, 6. Tautan, 7. Monev KIP, 8. PBJ, + Kontak)
 */
export const navMenu: NavItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Profil",
    href: "/profil",
    children: [
      {
        label: "Profil PPID BBPPMPV BMTI",
        href: "/profil/profil-ppid",
        description: "Gambaran umum kelembagaan PPID BBPPMPV BMTI",
      },
      {
        label: "Laman BBPPMPV BMTI",
        href: "https://bbppmpvbmti.kemendikdasmen.go.id/",
        external: true,
        description: "Website utama BBPPMPV Bidang Mesin dan Teknik Industri",
      },
      {
        label: "Struktur Organisasi PPID",
        href: "/profil/struktur-organisasi",
        description: "Bagan Struktur Organisasi PPID BBPPMPV BMTI",
      },
      {
        label: "Tugas dan Fungsi PPID",
        href: "/profil/tugas-dan-fungsi",
        description: "Rincian 8 tugas pokok dan 8 fungsi penyelenggaraan PPID",
      },
      {
        label: "Visi dan Misi PPID",
        href: "/profil/visi-dan-misi",
        description: "Visi pelayanan informasi ATRIA dan 4 misi PPID",
      },
      {
        label: "Kontak Kami",
        href: "/kontak",
        description: "Alamat Unit Layanan Publik, telepon, WhatsApp, dan email resmi",
      },
    ],
  },
  {
    label: "Informasi Publik",
    href: "/informasi-publik",
    children: [
      {
        label: "Regulasi",
        href: "/informasi-publik/regulasi",
        description: "Undang-Undang, Peraturan Pemerintah, Perki, dan POS PPID",
      },
      {
        label: "Daftar Informasi Publik",
        href: "/informasi-publik/daftar-informasi-publik",
        description: "Dokumen Daftar Informasi Publik (DIP) BBPPMPV BMTI",
      },
      {
        label: "Informasi Berkala",
        href: "/informasi-publik/informasi-berkala",
        description: "Informasi yang wajib disediakan dan diumumkan secara berkala",
        children: [
          { label: "Tata Cara Memperoleh Informasi Publik", href: "/informasi-publik/tata-cara-memperoleh-informasi-publik" },
          { label: "Ringkasan Informasi Program dan/Kegiatan", href: "/informasi-publik/ringkasan-informasi-program-dan-kegiatan" },
          { label: "Peraturan, Keputusan, dan/atau Kebijakan bagi Publik", href: "/informasi-publik/peraturan-keputusan-dan-kebijakan" },
          { label: "Informasi Keuangan Lainnya", href: "/informasi-publik/informasi-keuangan-lainnya" },
          { label: "Pengadaan Barang/Jasa", href: "/informasi-publik/pengadaan-barang-jasa" },
          { label: "Laporan Akuntabilitas Kinerja", href: "/informasi-publik/laporan-akuntabilitas-kinerja" },
          { label: "Ringkasan Laporan Keuangan", href: "/informasi-publik/ringkasan-laporan-keuangan" },
          { label: "Survei Kepuasan Masyarakat", href: "/informasi-publik/survei-kepuasan-masyarakat" },
          { label: "Daftar Kepala", href: "/informasi-publik/daftar-kepala" },
          { label: "Daftar Pejabat Struktural", href: "/informasi-publik/daftar-pejabat-struktural" },
          { label: "RKAKL dan DIPA", href: "/informasi-publik/rkakl-dan-dipa" },
          { label: "LHKPN", href: "/informasi-publik/lhkpn" },
          { label: "Realisasi Anggaran Belanja", href: "/informasi-publik/realisasi-anggaran-belanja" },
          { label: "Informasi Kepegawaian", href: "/informasi-publik/informasi-kepegawaian" },
        ],
      },
      {
        label: "Informasi Setiap Saat",
        href: "/informasi-publik/informasi-setiap-saat",
        description: "Informasi yang wajib tersedia dan siap diakses setiap saat",
        children: [
          { label: "Organisasi, Administrasi, Kepegawaian, dan Keuangan", href: "/informasi-publik/organisasi-administrasi-kepegawaian-dan-keuangan" },
          { label: "Prosedur Pengaduan Penyalahgunaan Wewenang atau Pelanggaran", href: "/informasi-publik/prosedur-pengaduan-penyalahgunaan-wewenang" },
          { label: "Ringkasan Laporan Akses Informasi Publik", href: "/informasi-publik/ringkasan-laporan-akses-informasi-publik" },
          { label: "Persuratan", href: "/informasi-publik/persuratan" },
          { label: "Informasi Aset", href: "/informasi-publik/informasi-aset" },
          { label: "Rencana Strategis", href: "/informasi-publik/rencana-strategis" },
          { label: "Agenda Kegiatan", href: "/informasi-publik/agenda-kegiatan" },
        ],
      },
      {
        label: "Informasi Serta Merta",
        href: "/informasi-publik/informasi-serta-merta",
        description: "Informasi terkait keadaan darurat dan keselamatan publik",
        children: [
          {
            label: "Satuan Pendidikan Aman Bencana",
            href: "https://spab.kemendikdasmen.go.id/web/",
            external: true,
          },
        ],
      },
      {
        label: "Informasi Dikecualikan",
        href: "/informasi-publik/informasi-dikecualikan",
        description: "Daftar informasi yang dikecualikan berdasarkan uji konsekuensi",
      },
      {
        label: "Indeks Kepuasan Masyarakat",
        href: "/informasi-publik/indeks-kepuasan-masyarakat",
        description: "Laporan Indeks Kepuasan Masyarakat (IKM) BBPPMPV BMTI",
      },
    ],
  },
  {
    label: "Layanan Informasi",
    href: "/layanan-informasi",
    children: [
      {
        label: "Maklumat Pelayanan",
        href: "/layanan-informasi/maklumat",
        description: "Maklumat Pelayanan & Maklumat Pelayanan Informasi Publik",
        children: [
          { label: "Maklumat Pelayanan", href: "/layanan-informasi/maklumat-pelayanan" },
          { label: "Maklumat Pelayanan Informasi Publik", href: "/layanan-informasi/maklumat-pelayanan-informasi-publik" },
        ],
      },
      {
        label: "Standar Pelayanan",
        href: "/layanan-informasi/standar-pelayanan",
        description: "Standar pelayanan publik dan pelatihan di BBPPMPV BMTI",
      },
      {
        label: "Prosedur Pelayanan",
        href: "/layanan-informasi/prosedur-pelayanan",
        description: "Prosedur permintaan informasi, keberatan, sengketa, STPP, WBS, & LAPOR!",
        children: [
          { label: "Prosedur Permintaan Informasi", href: "/layanan-informasi/prosedur-permintaan-informasi" },
          { label: "Prosedur Pengajuan Keberatan", href: "/layanan-informasi/prosedur-pengajuan-keberatan" },
          { label: "Prosedur Penyelesaian Sengketa", href: "/layanan-informasi/prosedur-penyelesaian-sengketa" },
          { label: "Prosedur Pengaduan via STPP", href: "https://bbppmpvbmti.kemendikdasmen.go.id/pengaduan/#panduan", external: true },
          { label: "Prosedur Pengaduan via WBS", href: "/layanan-informasi/prosedur-pengaduan-via-wbs" },
          {
            label: "Prosedur Pengaduan via SP4N-LAPOR!",
            href: "https://www.youtube.com/watch?v=pVJlNv0Zgd0&t=2s&ab_channel=%40LAPOR1708",
            external: true,
          },
        ],
      },
      {
        label: "Layanan PPID BBPPMPV BMTI",
        href: "/layanan-informasi/layanan-ppid",
        description: "Formulir permintaan informasi, pengaduan STPP, keberatan, WBS, & LAPOR!",
        children: [
          { label: "Formulir Permintaan Informasi", href: "/layanan-informasi/formulir-permintaan-informasi" },
          { label: "Formulir Pengaduan via STPP", href: "https://bbppmpvbmti.kemendikdasmen.go.id/pengaduan/", external: true },
          { label: "Formulir Keberatan Informasi", href: "/layanan-informasi/formulir-keberatan-informasi" },
          { label: "Whistle Blowing System", href: "https://www.wise.kemenkeu.go.id/#/", external: true },
          { label: "SP4N-LAPOR!", href: "https://lapor.go.id/", external: true },
        ],
      },
      {
        label: "e-PPID Versi Android",
        href: "https://play.google.com/store/apps/details?id=com.dera.perman.ppidkemendikbudristek&hl=en",
        external: true,
        description: "Aplikasi mobile resmi e-PPID pada Google Play Store",
      },
      {
        label: "Jejak Surat",
        href: "https://sinde.kemdikbud.go.id/login",
        external: true,
        description: "Pelacakan persuratan melalui Sistem Naskah Dinas Elektronik (SINDE)",
      },
    ],
  },
  {
    label: "Publikasi",
    href: "/publikasi",
    children: [
      {
        label: "Majalah Swara",
        href: "/publikasi/majalah-swara",
        description: "Publikasi berkala Majalah Swara BBPPMPV BMTI",
      },
      {
        label: "Media Sosial",
        href: "https://linktr.ee/bmti",
        external: true,
        description: "Portal tautan media sosial resmi BBPPMPV BMTI (Linktree)",
      },
      {
        label: "Galeri Dokumentasi",
        href: "/publikasi/galeri-dokumentasi",
        description: "Dokumentasi foto kegiatan resmi BBPPMPV BMTI",
      },
    ],
  },
  {
    label: "Tautan",
    href: "/tautan",
    children: tautanLinks.map((t) => ({
      label: t.title,
      href: t.href,
      external: true,
      description: t.category,
    })),
  },
  {
    label: "Monev KIP",
    href: "/monev-kip",
    children: monevKipAspects.map((m) => ({
      label: m.title,
      href: m.href,
      external: true,
      description: `${m.code} — Folder Bukti Dukung Google Drive`,
    })),
  },
  {
    label: "PBJ",
    href: "/pbj",
    children: [
      {
        label: "Rencana Umum Pengadaan Barang/Jasa",
        href: "https://sirup.inaproc.id/sirup/home/penyediaSatker?idSatker=386055",
        external: true,
        description: "Sistem Informasi Rencana Umum Pengadaan (SiRUP LKPP)",
      },
      {
        label: "Pengumuman Pengadaan Barang/Jasa",
        href: "https://spse.inaproc.id/kemendikdasmen/",
        external: true,
        description: "Layanan Pengadaan Secara Elektronik (SPSE Kemendikdasmen)",
      },
      {
        label: "Dokumen Pengadaan Barang/Jasa",
        href: "/pbj/dokumen-pengadaan-barang-jasa",
        description: "Daftar paket dokumen pengadaan tahun 2023 – 2026",
      },
      {
        label: "Daftar Kontrak PBJ",
        href: "/pbj/daftar-kontrak-pbj",
        description: "Daftar dokumen kontrak pengadaan barang dan jasa yang dikuasai",
      },
    ],
  },
  {
    label: "Kontak",
    href: "/kontak",
  },
];

/**
 * 4 Kategori Utama Informasi Publik sesuai UU No. 14 Tahun 2008 & Website Asli
 */
export const publicInfoCategories = [
  {
    id: "berkala",
    title: "Informasi Berkala",
    badge: "Wajib Rutin",
    href: "/informasi-publik/informasi-berkala",
    summary:
      "Informasi publik yang wajib disediakan dan diumumkan secara berkala oleh BBPPMPV BMTI sekurang-kurangnya setiap 6 bulan sekali.",
    items: [
      {
        title: "Tata Cara Memperoleh Informasi Publik",
        href: "/informasi-publik/tata-cara-memperoleh-informasi-publik",
        category: "Prosedur",
      },
      {
        title: "Ringkasan Informasi Program dan/Kegiatan",
        href: "/informasi-publik/ringkasan-informasi-program-dan-kegiatan",
        category: "Program & Kegiatan",
      },
      {
        title: "Peraturan, Keputusan, dan/atau Kebijakan bagi Publik",
        href: "/informasi-publik/peraturan-keputusan-dan-kebijakan",
        category: "Kebijakan (2025–2026)",
      },
      {
        title: "Informasi Keuangan Lainnya & LAKIP",
        href: "/informasi-publik/informasi-keuangan-lainnya",
        category: "Keuangan & LAKIP",
      },
      {
        title: "Pengadaan Barang/Jasa",
        href: "/informasi-publik/pengadaan-barang-jasa",
        category: "Pengadaan",
      },
      {
        title: "Laporan Akuntabilitas Kinerja",
        href: "/informasi-publik/laporan-akuntabilitas-kinerja",
        category: "Akuntabilitas",
      },
      {
        title: "Ringkasan Laporan Keuangan",
        href: "/informasi-publik/ringkasan-laporan-keuangan",
        category: "Keuangan",
      },
      {
        title: "Survei Kepuasan Masyarakat",
        href: "/informasi-publik/survei-kepuasan-masyarakat",
        category: "Evaluasi Layanan",
      },
      {
        title: "Daftar Kepala (1980–Sekarang)",
        href: "/informasi-publik/daftar-kepala",
        category: "Profil Pimpinan",
      },
      {
        title: "Daftar Pejabat Struktural",
        href: "/informasi-publik/daftar-pejabat-struktural",
        category: "Profil Pejabat",
      },
      {
        title: "RKAKL dan DIPA",
        href: "/informasi-publik/rkakl-dan-dipa",
        category: "Anggaran",
      },
      {
        title: "LHKPN (Laporan Harta Kekayaan Penyelenggara Negara)",
        href: "/informasi-publik/lhkpn",
        category: "Transparansi Pejabat",
      },
      {
        title: "Realisasi Anggaran Belanja",
        href: "/informasi-publik/realisasi-anggaran-belanja",
        category: "Anggaran",
      },
      {
        title: "Informasi Kepegawaian",
        href: "/informasi-publik/informasi-kepegawaian",
        category: "SDM & Kepegawaian",
      },
    ],
  },
  {
    id: "setiap-saat",
    title: "Informasi Setiap Saat",
    badge: "Siap Diakses",
    href: "/informasi-publik/informasi-setiap-saat",
    summary:
      "Informasi publik yang wajib disediakan oleh badan publik dan siap diberikan kepada pemohon informasi publik setiap saat.",
    items: [
      {
        title: "Daftar Informasi Publik (DIP)",
        href: "/informasi-publik/daftar-informasi-publik",
        category: "Dokumen Utama",
      },
      {
        title: "Organisasi, Administrasi, Kepegawaian, dan Keuangan",
        href: "/informasi-publik/organisasi-administrasi-kepegawaian-dan-keuangan",
        category: "Tata Kelola",
      },
      {
        title: "Prosedur Pengaduan Penyalahgunaan Wewenang atau Pelanggaran",
        href: "/informasi-publik/prosedur-pengaduan-penyalahgunaan-wewenang",
        category: "Pengawasan & WBS",
      },
      {
        title: "Ringkasan Laporan Akses Informasi Publik",
        href: "/informasi-publik/ringkasan-laporan-akses-informasi-publik",
        category: "Laporan Layanan",
      },
      {
        title: "Persuratan",
        href: "/informasi-publik/persuratan",
        category: "Administrasi",
      },
      {
        title: "Informasi Aset",
        href: "/informasi-publik/informasi-aset",
        category: "BMN & Aset",
      },
      {
        title: "Rencana Strategis (Renstra)",
        href: "/informasi-publik/rencana-strategis",
        category: "Perencanaan",
      },
      {
        title: "Agenda Kegiatan",
        href: "/informasi-publik/agenda-kegiatan",
        category: "Agenda Lembaga",
      },
    ],
  },
  {
    id: "serta-merta",
    title: "Informasi Serta Merta",
    badge: "Darurat & Keselamatan",
    href: "/informasi-publik/informasi-serta-merta",
    summary:
      "Informasi yang berkaitan dengan ancaman terhadap hajat hidup orang banyak dan ketertiban umum yang diumumkan secara serta merta.",
    items: [
      {
        title: "Satuan Pendidikan Aman Bencana (SPAB)",
        href: "https://spab.kemendikdasmen.go.id/web/",
        external: true,
        category: "Mitigasi & Tanggap Bencana",
      },
      {
        title: "Halaman Informasi Serta Merta PPID BBPPMPV BMTI",
        href: "/informasi-publik/informasi-serta-merta",
        category: "Layanan Kedaruratan",
      },
    ],
  },
  {
    id: "dikecualikan",
    title: "Informasi Dikecualikan",
    badge: "Uji Konsekuensi",
    href: "/informasi-publik/informasi-dikecualikan",
    summary:
      "Informasi yang dikecualikan di lingkungan Kemendikdasmen berdasarkan hasil pengujian konsekuensi sesuai UU No. 14 Tahun 2008.",
    items: [
      { title: "Data pribadi pegawai Kemendikdasmen", href: "/informasi-publik/informasi-dikecualikan", category: "Data Pribadi" },
      { title: "Data pribadi peserta didik, pendidik, dan tenaga kependidikan", href: "/informasi-publik/informasi-dikecualikan", category: "Data Pribadi" },
      { title: "Laporan keuangan yang belum diaudit oleh Badan Pengawas Keuangan", href: "/informasi-publik/informasi-dikecualikan", category: "Keuangan" },
      { title: "Surat menyurat dan perjanjian kerja sama pihak ketiga yang sifatnya rahasia", href: "/informasi-publik/informasi-dikecualikan", category: "Dokumen Rahasia" },
      { title: "Soal & kunci jawaban asesmen pegawai dan seleksi CASN Kemendikdasmen", href: "/informasi-publik/informasi-dikecualikan", category: "Seleksi & Asesmen" },
      { title: "Data pribadi penerima bantuan pemerintah/sosial & satgas penanganan kekerasan", href: "/informasi-publik/informasi-dikecualikan", category: "Perlindungan Data" },
    ],
  },
];

/**
 * Daftar Regulasi dan POS Resmi dari halaman /regulasi-2/
 */
export const regulationsData = {
  generalRegulations: [
    {
      title: "Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik",
      category: "Undang-Undang",
      code: "UU No. 14 Tahun 2008",
      description:
        "Landasan hukum utama jaminan hak warga negara untuk memperoleh informasi publik dalam mewujudkan penyelenggaraan negara yang terbuka dan akuntabel.",
      href: "https://drive.google.com/drive/u/1/folders/1TDg2oArS056gyrfwnLeA-9RyTtcI0JW3",
      pdfHref: "http://ult.kemdikbud.go.id/uploads/dokumen/undang-undang-nomor-14-tahun-2008.pdf",
    },
    {
      title: "Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan Undang-Undang Keterbukaan Informasi Publik",
      category: "Peraturan Pemerintah",
      code: "PP No. 61 Tahun 2010",
      description:
        "Ketentuan pelaksanaan teknis pengklasifikasian informasi, penunjukan PPID, mekanisme keberatan, serta masa retensi dan ganti rugi badan publik.",
      href: "https://drive.google.com/drive/u/1/folders/1b44TcMX_-EjWAE2_EES9kt8JMwYIKbRh",
    },
    {
      title: "Peraturan Mahkamah Agung Nomor 2 Tahun 2011 tentang Tata Cara Penyelesaian Sengketa Informasi Publik di Pengadilan",
      category: "Peraturan Mahkamah Agung",
      code: "PERMA No. 2 Tahun 2011",
      description:
        "Pedoman beracara dan tata cara pengajuan serta pemeriksaan keberatan atas putusan Komisi Informasi melalui peradilan umum maupun PTUN.",
      href: "https://drive.google.com/drive/u/1/folders/1N_zq4JAWnGa-lSZLEFaZCCMJl2YjUYZr",
    },
    {
      title: "Peraturan Komisi Informasi Pusat Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik",
      category: "Peraturan Komisi Informasi",
      code: "PERKI No. 1 Tahun 2021",
      description:
        "Standar nasional penyelenggaraan layanan informasi publik yang meliputi maklumat, struktur PPID, prosedur permohonan, keberatan, dan pemutakhiran DIP.",
      href: "https://drive.google.com/drive/u/1/folders/1lyJGWwHEcrg6gvNMhMf4ZXDQOZsTgLWK",
    },
    {
      title: "Peraturan Menteri Pendidikan dan Kebudayaan Nomor 41 Tahun 2020 tentang Layanan Informasi Publik di Kementerian Pendidikan dan Kebudayaan",
      category: "Peraturan Menteri",
      code: "Permendikbud No. 41 Tahun 2020",
      description:
        "Regulasi penyelenggaraan keterbukaan informasi publik, struktur kelembagaan PPID, dan tata kerja pelayanan informasi di lingkungan kementerian.",
      href: "/informasi-publik/regulasi",
    },
  ],
  posDocuments: [
    {
      title: "POS Layanan Permohonan Informasi Publik",
      category: "POS Layanan PPID",
      code: "POS-01",
      description: "Prosedur operasional standar penerimaan, verifikasi, dan pemenuhan permohonan informasi publik di BBPPMPV BMTI.",
      href: "https://drive.google.com/drive/u/1/folders/1aQzT5stIxnuSDSDM0vX92yL1F-Pyr4vg",
    },
    {
      title: "POS Layanan Keberatan Atas Permohonan Informasi Publik",
      category: "POS Layanan PPID",
      code: "POS-02",
      description: "Prosedur operasional standar penanganan pengajuan keberatan pemohon informasi kepada Atasan PPID BBPPMPV BMTI.",
      href: "https://drive.google.com/drive/u/1/folders/1QOf0UqqN1tQMntCaBxFYAYAYIm6UArHM",
    },
    {
      title: "POS Penetapan dan Pemutakhiran Daftar Informasi Publik",
      category: "POS Layanan PPID",
      code: "POS-03",
      description: "Prosedur operasional standar pengumpulan, pengklasifikasian, penetapan, dan pemutakhiran Daftar Informasi Publik (DIP).",
      href: "https://drive.google.com/drive/u/1/folders/1bXCogtEjgmPdb7qkRm64zPYGt64xCyNW",
    },
    {
      title: "POS Pendokumentasian Informasi Publik",
      category: "POS Layanan PPID",
      code: "POS-04",
      description: "Prosedur operasional standar penyimpanan, pengarsipan, dan pengamanan dokumen informasi publik BBPPMPV BMTI.",
      href: "https://drive.google.com/drive/u/1/folders/1liXoeF5h4toSf_26h43XhOOqkW5hd0Wu",
    },
    {
      title: "POS Layanan Pengumuman Informasi Publik",
      category: "POS Layanan PPID",
      code: "POS-05",
      description: "Prosedur operasional standar penyebarluasan dan pengumuman informasi publik melalui media resmi BBPPMPV BMTI.",
      href: "/informasi-publik/regulasi",
      note: "Tercantum pada daftar POS situs sumber",
    },
  ],
};

/**
 * Berita & Informasi Terbaru dari Portal Resmi BBPPMPV BMTI Kemendikdasmen
 */
export const newsArticles = [
  {
    id: "pahlawanku-teladanku-2026",
    title: "Pahlawanku Teladanku, Melangkah Bersama Melanjutkan Perjuangan Pendidikan Vokasi",
    date: "10 November 2026",
    category: "Liputan Utama",
    image: "galeri/hari-kesaktian-pancasila-2025.jpg",
    summary:
      "Memperingati Hari Pahlawan Tahun 2026, BBPPMPV BMTI menggelar upacara bendera dengan khidmat untuk menghidupkan nilai-nilai kepahlawanan melalui pembangunan SDM dan penguatan pendidikan kejuruan di Indonesia.",
    href: "https://bbppmpvbmti.kemendikdasmen.go.id/berita/pahlawanku-teladanku-melangkah-bersama-melanjutkan-perjuangan-pendidikan-vokasi",
    featured: true,
  },
  {
    id: "kredensial-mikro-angkatan-2-2026",
    title: "Pemanggilan Peserta Program Kredensial Mikro Guru SMK Angkatan 2",
    date: "06 November 2026",
    category: "Informasi Diklat",
    image: "kegiatan/Pembukaan-Upskilling-dan-Reskilling-2024-1024x577-clean.png",
    summary:
      "Penyelenggaraan Program Kredensial Mikro Pendidikan Kejuruan kolaborasi Kemendikdasmen dengan LPDP melalui pola pelatihan luring 50 Jam Pelajaran (JP) di BBPPMPV BMTI Cimahi.",
    href: "https://bbppmpvbmti.kemendikdasmen.go.id/berita/pemanggilan-peserta-program-kredensial-mikro-guru-smk-angkatan-2",
    featured: false,
  },
  {
    id: "sumpah-pemuda-ke-98-2026",
    title: "Kobar Semangat Peringatan Hari Sumpah Pemuda ke-98 BBPPMPV BMTI Siap Cetak Generasi Vokasi yang Patriotik, Gigih, dan Berempati",
    date: "30 Oktober 2026",
    category: "Informasi Umum",
    image: "kegiatan/Festival-Pendidikan-Jabar-clean.png",
    summary:
      "Momentum peringatan Hari Sumpah Pemuda ke-98 mengusung tema 'Patriotik, Gigih, Berempati: Pemuda untuk Indonesia' yang selaras dengan visi pendidikan vokasi membangun SDM unggul.",
    href: "https://bbppmpvbmti.kemendikdasmen.go.id/berita/kobar-semangat-peringatan-hari-sumpah-pemuda-ke-98-bbppmpv-bmti-siap-cetak-generasi-vokasi-yang-patriotik-gigih-dan-berempati",
    featured: false,
  },
  {
    id: "donor-darah-sinergi-2026",
    title: "Setetes Darah, Sejuta Harapan: Sinergi Lintas Instansi untuk Kemanusiaan",
    date: "29 Oktober 2026",
    category: "Informasi Umum",
    image: "galeri/kerjasama-disperindag.jpg",
    summary:
      "BBPPMPV BMTI rutin menggelar Kegiatan Donor Darah (KDD) bermitra dengan PMI Kota Bandung serta melibatkan Inspektorat dan KPU Kota Cimahi untuk memperkuat sinergi kemanusiaan.",
    href: "https://bbppmpvbmti.kemendikdasmen.go.id/berita/setetes-darah-sejuta-harapan-sinergi-lintas-instansi-untuk-kemanusiaan",
    featured: false,
  },
  {
    id: "kredensial-mikro-angkatan-1-2026",
    title: "Pemanggilan Peserta Program Kredensial Mikro Guru SMK Angkatan 1 Tahun 2026",
    date: "26 Oktober 2026",
    category: "Informasi Diklat",
    image: "galeri/pelatihan-kurikulum-pm-guru.jpg",
    summary:
      "Informasi pemanggilan peserta pelatihan penguatan kompetensi pendidik dan tenaga kependidikan vokasi melalui Program Kredensial Mikro Guru SMK Angkatan 1 Tahun 2026.",
    href: "https://bbppmpvbmti.kemendikdasmen.go.id/berita/pemanggilan-peserta-program-kredensial-mikro-guru-smk-angkatan-1-tahun-2026",
    featured: false,
  },
  {
    id: "pppk-paruh-waktu-2026",
    title: "Sebagai Wujud Penghargaan, Kemendikdasmen Perpanjang Kontrak Kerja PPPK Paruh Waktu di BBPPMPV BMTI",
    date: "08 Oktober 2026",
    category: "Informasi Umum",
    image: "kegiatan/Pelantikan-Kepala-Balai-2024-clean.jpeg",
    summary:
      "Kemendikdasmen memperpanjang kontrak kerja 29 Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) Paruh Waktu di BBPPMPV BMTI berdasarkan hasil evaluasi kinerja positif.",
    href: "https://bbppmpvbmti.kemendikdasmen.go.id/berita/sebagai-wujud-penghargaan-kemendikdasmen-perpanjang-kontrak-kerja-pppk-paruh-waktu-di-bbppmpv-bmti",
    featured: false,
  },
  {
    id: "kesehatan-mental-asn-2026",
    title: "Menjaga Kesehatan Mental Menuju Profesionalisme ASN",
    date: "24 September 2026",
    category: "Informasi Umum",
    image: "galeri/iht-pemanfaatan-ai.jpg",
    summary:
      "Penguatan kompetensi teknis, manajerial, dan sosio-kultural Aparatur Sipil Negara (ASN) yang didukung kesehatan mental prima agar adaptif terhadap reformasi birokrasi.",
    href: "https://bbppmpvbmti.kemendikdasmen.go.id/berita/menjaga-kesehatan-mental-menuju-profesionalisme-asn",
    featured: false,
  },
];

export interface SearchableEntry {
  title: string;
  category: string;
  description: string;
  href: string;
  external?: boolean;
  kind?: string;
}

/**
 * Membangun indeks pencarian lengkap dari seluruh halaman, menu, tautan, & dokumen asli PPID
 */
export function getSearchIndex(): SearchableEntry[] {
  const entries: SearchableEntry[] = [];
  const seen = new Set<string>();

  const add = (entry: SearchableEntry) => {
    const key = `${entry.title}::${entry.href}`;
    if (seen.has(key)) return;
    seen.add(key);
    entries.push(entry);
  };

  // 1. Halaman Utama
  add({
    title: "Profil PPID BBPPMPV BMTI",
    category: "Halaman Utama",
    description: "Visi, Misi, Struktur Organisasi, Tugas dan Fungsi, serta Pejabat Struktural PPID BBPPMPV BMTI.",
    href: "/profil",
  });
  add({
    title: "Informasi Publik PPID BBPPMPV BMTI",
    category: "Halaman Utama",
    description: "Informasi Berkala, Informasi Setiap Saat, Informasi Serta Merta, Informasi Dikecualikan, DIP, dan Regulasi.",
    href: "/informasi-publik",
  });
  add({
    title: "Layanan Informasi Publik",
    category: "Halaman Utama",
    description: "Permohonan Informasi, Pengajuan Keberatan, Penyelesaian Sengketa, Maklumat, Standar Pelayanan, STPP, WBS, e-PPID, dan Jejak Surat.",
    href: "/layanan-informasi",
  });
  add({
    title: "Publikasi: Majalah Swara, Media Sosial & Galeri Dokumentasi",
    category: "Halaman Utama",
    description: "Majalah Swara, kanal Media Sosial resmi BMTI, dan Galeri Dokumentasi kegiatan BBPPMPV BMTI.",
    href: "/publikasi",
  });
  add({
    title: "Tautan Resmi Kemendikdasmen & Vokasi",
    category: "Halaman Utama",
    description: "PPID Kemendikdasmen, PPID Vokasi, SINTESA, Mesin Mutu, LPSE, UKPBJ, Rumah Pendidikan, dan CASN.",
    href: "/tautan",
  });
  add({
    title: "Monitoring dan Evaluasi Keterbukaan Informasi Publik (Monev KIP)",
    category: "Halaman Utama",
    description: "6 Aspek Monev KIP: Sarana Prasarana, Kualitas Informasi, Jenis Informasi, Komitmen Organisasi, Digitalisasi, dan PBJ.",
    href: "/monev-kip",
  });
  add({
    title: "Pengadaan Barang/Jasa (PBJ)",
    category: "Halaman Utama",
    description: "Rencana Umum Pengadaan (SiRUP), Pengumuman SPSE, Dokumen Paket Pengadaan 2023–2026, dan Daftar Kontrak PBJ.",
    href: "/pbj",
  });
  add({
    title: "Kontak & Unit Layanan Publik (ULP)",
    category: "Halaman Utama",
    description: "Alamat kantor Jl. Pesantren KM 2 Cimahi, nomor telepon (022) 6652326, WhatsApp, email, dan jam layanan.",
    href: "/kontak",
  });

  // 2. Tautan Eksternal & Monev KIP
  for (const t of tautanLinks) {
    add({
      title: t.title,
      category: `Tautan · ${t.category}`,
      description: t.description,
      href: t.href,
      external: true,
    });
  }

  for (const m of monevKipAspects) {
    add({
      title: `${m.title} (${m.code})`,
      category: "Monev KIP",
      description: m.description,
      href: m.href,
      external: true,
      kind: "folder",
    });
  }

  // 3. Seluruh sub-halaman dan dokumen di dalam src/data/pages.ts
  for (const [slug, page] of Object.entries(pages)) {
    const sectionName = slug.startsWith("profil/")
      ? "Profil PPID"
      : slug.startsWith("informasi-publik/")
      ? "Informasi Publik"
      : slug.startsWith("layanan-informasi/")
      ? "Layanan Informasi"
      : slug.startsWith("publikasi/")
      ? "Publikasi"
      : "Pengadaan Barang/Jasa";

    add({
      title: page.title,
      category: sectionName,
      description: page.description || `Halaman resmi ${page.title} pada portal PPID BBPPMPV BMTI.`,
      href: `/${slug}`,
      kind: "page",
    });

    for (const block of page.blocks) {
      if (block.type === "docs") {
        for (const doc of block.items) {
          if (doc.href) {
            add({
              title: doc.title,
              category: doc.category || page.title,
              description: doc.description || `Dokumen pada halaman ${page.title}`,
              href: doc.href,
              external: doc.href.startsWith("http"),
              kind: doc.kind,
            });
          }
        }
      } else if (block.type === "yearDocs") {
        for (const grp of block.groups) {
          for (const doc of grp.items) {
            if (doc.href) {
              add({
                title: doc.title,
                category: `Dokumen PBJ ${grp.year}`,
                description: `Dokumen Pengadaan Barang/Jasa Tahun ${grp.year}`,
                href: doc.href,
                external: doc.href.startsWith("http"),
                kind: doc.kind,
              });
            }
          }
        }
      }
    }
  }

  return entries;
}

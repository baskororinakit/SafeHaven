// ============================================================
// 1. DATA BAHASA (TRANSLATIONS) LENGKAP TERMASUK JS ALERTS
// ============================================================
const translations = {
    id: {
        "nav-features": "Fitur",
        "nav-edu": "Edukasi",
        "nav-report": "Lapor",
        "nav-admin": "Dashboard",
        "btn-login": "Masuk",
        "btn-logout": "Keluar",
        "hero-badge": "Komunitas Aman & Nyaman",
        "hero-title": "Ketika Keamanan Bertemu Kesadaran.",
        "hero-desc": "Membangun lingkungan yang lebih aman melalui kesadaran kolektif dan teknologi pelaporan yang transparan.",
        "btn-report": "Lapor Kejadian",
        "btn-explore": "Pelajari Tips",
        "feat-title": "Layanan Kami",
        "feat-subtitle": "Fitur utama untuk mendukung keamanan lingkungan Anda.",
        "f1-t": "Report Kriminal",
        "f1-d": "Sistem pelaporan anonim yang cepat dan responsif bagi seluruh warga.",
        "f2-t": "Analisis Data",
        "f2-d": "Visualisasi statistik keamanan lingkungan secara berkala dan transparan.",
        "f3-t": "Edukasi Warga",
        "f3-d": "Tips pencegahan kejahatan sehari-hari untuk menjaga keluarga Anda.",
        "edu-title": "Edukasi Pencegahan",
        "e1-t": "Keamanan Kendaraan",
        "e1-d": "Gunakan kunci ganda dan parkir di tempat yang terpantau CCTV atau memiliki penerangan cukup.",
        "e2-t": "Waspada Penipuan",
        "e2-d": "Jangan pernah memberikan data pribadi atau kode OTP kepada siapapun melalui telepon.",
        "report-form-title": "Buat Laporan Baru",
        "report-ph-name": "Nama (Opsional)",
        "report-ph-loc": "Lokasi Kejadian",
        "report-ph-desc": "Deskripsi Kejadian Secara Detail",
        "opt-1": "Pencurian",
        "opt-2": "Penipuan",
        "opt-3": "Vandalisme",
        "opt-4": "Aktivitas Mencurigakan",
        "btn-submit": "Kirim Laporan Sekarang",
        "admin-title": "Dashboard Pengurus",
        "footer-text": "Dibuat untuk meningkatkan keamanan komunitas.",
        "tab-login": "Masuk",
        "tab-signup": "Daftar",
        "auth-log-title": "Selamat Datang",
        "auth-log-sub": "Silakan masuk untuk berkontribusi.",
        "ph-username": "Username",
        "ph-password": "Password",
        "btn-login-submit": "Login",
        "auth-reg-title": "Daftar Baru",
        "auth-reg-sub": "Mari jaga keamanan lingkungan bersama.",
        "ph-new-user": "Buat Username",
        "ph-new-pass": "Buat Password",
        "btn-reg-submit": "Sign Up",
        "auth-adm-title": "Akses Admin",
        "auth-adm-sub": "Khusus pengurus lingkungan.",
        "btn-adm-submit": "Login Admin",
        "notif-title": "Notifikasi Anda",
        "reply-title": "Balas Laporan",
        "btn-send-reply": "Kirim Balasan",
        "tpl-1": "Template 1",
        "tpl-2": "Template 2",
        "tpl-3": "Template 3",
        
        // --- JS ALERTS & ERRORS TRANSLATION ---
        "msg-err-exist": "Username sudah digunakan oleh orang lain!",
        "msg-err-login": "Username atau password yang Anda masukkan salah.",
        "msg-err-admin": "Kredensial Admin tidak valid!",
        "msg-succ-reg": "Pendaftaran Berhasil!",
        "msg-succ-reg-desc": "Akun Anda telah dibuat. Silakan login menggunakan akun tersebut.",
        "msg-succ-login": "Berhasil Login",
        "msg-succ-login-desc": "Selamat datang kembali, ",
        "msg-succ-admin": "Akses Diberikan",
        "msg-succ-admin-desc": "Selamat datang di Dashboard Admin.",
        "msg-warn-logout": "Keluar dari Sistem?",
        "msg-warn-logout-desc": "Anda akan diminta login kembali untuk mengakses fitur.",
        "msg-btn-yes": "Ya, Keluar",
        "msg-succ-logout": "Berhasil Keluar",
        "msg-warn-deny": "Akses Ditolak",
        "msg-warn-deny-desc": "Silakan login sebagai warga untuk membuat laporan.",
        "msg-succ-report": "Laporan Terkirim!",
        "msg-succ-report-desc": "Laporan Anda telah masuk ke sistem kami.",
        "msg-empty-report": "Belum ada laporan masuk.",
        "msg-empty-user": "Belum ada warga terdaftar.",
        "msg-empty-notif": "Tidak ada notifikasi baru.",
        "msg-succ-reply": "Terkirim",
        "msg-succ-reply-desc": "Balasan berhasil dikirim ke ",
        "msg-succ-resolve": "Diperbarui",
        "msg-succ-resolve-desc": "Status laporan menjadi Selesai.",
        "msg-warn-del-rep": "Hapus Laporan?",
        "msg-warn-del-desc": "Data yang dihapus tidak dapat dikembalikan!",
        "msg-btn-del": "Ya, Hapus!",
        "msg-succ-del": "Terhapus!",
        "msg-succ-del-rep-desc": "Laporan telah dihapus dari sistem.",
        "msg-warn-del-usr": "Hapus warga ",
        "msg-warn-del-usr-desc": "Akun ini akan dihapus permanen dan tidak bisa login kembali.",
        "msg-succ-del-usr-desc": " telah dihapus.",
        "msg-err-edit-exist": "Username baru tersebut sudah dipakai oleh warga lain!",
        "msg-succ-edit": "Berhasil Diubah!",
        "msg-succ-edit-desc": "Data warga berhasil diperbarui.",
        "lbl-role-user": "Role: Warga (User)",
        "btn-edit-acc": "Edit Akun",
        "btn-del": "Hapus",
        "btn-reply": "Balas",
        "btn-resolve": "Selesai",
        "lbl-loc": "Lokasi",
        "lbl-reporter": "Pelapor"
    },
    en: {
        "nav-features": "Features",
        "nav-edu": "Education",
        "nav-report": "Report",
        "nav-admin": "Dashboard",
        "btn-login": "Login",
        "btn-logout": "Logout",
        "hero-badge": "Safe & Secure Community",
        "hero-title": "When Safety Meets Awareness.",
        "hero-desc": "Building a safer environment through collective awareness and transparent reporting technology.",
        "btn-report": "Report Incident",
        "btn-explore": "Explore Tips",
        "feat-title": "Our Services",
        "feat-subtitle": "Key features to support your neighborhood security.",
        "f1-t": "Crime Reporting",
        "f1-d": "Fast and responsive anonymous reporting system for all citizens.",
        "f2-t": "Data Analysis",
        "f2-d": "Periodic and transparent visualization of neighborhood security statistics.",
        "f3-t": "Citizen Education",
        "f3-d": "Daily crime prevention tips to keep your family safe.",
        "edu-title": "Prevention Education",
        "e1-t": "Vehicle Security",
        "e1-d": "Use double locks and park in areas monitored by CCTV or with sufficient lighting.",
        "e2-t": "Fraud Awareness",
        "e2-d": "Never provide personal data or OTP codes to anyone over the phone.",
        "report-form-title": "Create New Report",
        "report-ph-name": "Name (Optional)",
        "report-ph-loc": "Incident Location",
        "report-ph-desc": "Detailed Incident Description",
        "opt-1": "Theft",
        "opt-2": "Fraud",
        "opt-3": "Vandalism",
        "opt-4": "Suspicious Activity",
        "btn-submit": "Submit Report Now",
        "admin-title": "Admin Dashboard",
        "footer-text": "Created to enhance community security.",
        "tab-login": "Login",
        "tab-signup": "Sign Up",
        "auth-log-title": "Welcome Back",
        "auth-log-sub": "Please log in to contribute.",
        "ph-username": "Username",
        "ph-password": "Password",
        "btn-login-submit": "Login",
        "auth-reg-title": "Create Account",
        "auth-reg-sub": "Let's keep the neighborhood safe together.",
        "ph-new-user": "Create Username",
        "ph-new-pass": "Create Password",
        "btn-reg-submit": "Sign Up",
        "auth-adm-title": "Admin Access",
        "auth-adm-sub": "Exclusive for neighborhood admins.",
        "btn-adm-submit": "Login Admin",
        "notif-title": "Your Notifications",
        "reply-title": "Reply to Report",
        "btn-send-reply": "Send Reply",
        "tpl-1": "Template 1",
        "tpl-2": "Template 2",
        "tpl-3": "Template 3",

        // --- JS ALERTS & ERRORS TRANSLATION ---
        "msg-err-exist": "Username is already taken by another user!",
        "msg-err-login": "The username or password you entered is incorrect.",
        "msg-err-admin": "Invalid Admin credentials!",
        "msg-succ-reg": "Registration Successful!",
        "msg-succ-reg-desc": "Your account has been created. Please log in using that account.",
        "msg-succ-login": "Login Successful",
        "msg-succ-login-desc": "Welcome back, ",
        "msg-succ-admin": "Access Granted",
        "msg-succ-admin-desc": "Welcome to the Admin Dashboard.",
        "msg-warn-logout": "Log out from system?",
        "msg-warn-logout-desc": "You will be required to log in again to access features.",
        "msg-btn-yes": "Yes, Log out",
        "msg-succ-logout": "Successfully Logged Out",
        "msg-warn-deny": "Access Denied",
        "msg-warn-deny-desc": "Please log in as a citizen to submit a report.",
        "msg-succ-report": "Report Submitted!",
        "msg-succ-report-desc": "Your report has been received by our system.",
        "msg-empty-report": "No reports received yet.",
        "msg-empty-user": "No citizens registered yet.",
        "msg-empty-notif": "No new notifications.",
        "msg-succ-reply": "Sent",
        "msg-succ-reply-desc": "Reply successfully sent to ",
        "msg-succ-resolve": "Updated",
        "msg-succ-resolve-desc": "Report status changed to Resolved.",
        "msg-warn-del-rep": "Delete Report?",
        "msg-warn-del-desc": "Deleted data cannot be recovered!",
        "msg-btn-del": "Yes, Delete!",
        "msg-succ-del": "Deleted!",
        "msg-succ-del-rep-desc": "Report has been deleted from the system.",
        "msg-warn-del-usr": "Delete citizen ",
        "msg-warn-del-usr-desc": "This account will be permanently deleted and cannot log in again.",
        "msg-succ-del-usr-desc": " has been deleted.",
        "msg-err-edit-exist": "That new username is already used by another citizen!",
        "msg-succ-edit": "Successfully Changed!",
        "msg-succ-edit-desc": "Citizen data successfully updated.",
        "lbl-role-user": "Role: Citizen (User)",
        "btn-edit-acc": "Edit Account",
        "btn-del": "Delete",
        "btn-reply": "Reply",
        "btn-resolve": "Resolve",
        "lbl-loc": "Location",
        "lbl-reporter": "Reporter"
    }
};

function t(key) {
    const lang = localStorage.getItem('safeHavenLang') || 'id';
    return translations[lang][key] || key;
}

// ============================================================
// 2. INISIALISASI UI & FUNGSI GLOBAL
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, once: true, offset: 100 });

    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('safeHavenTheme', isDark ? 'dark' : 'light');
    });
    if (localStorage.getItem('safeHavenTheme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    const langSelect = document.getElementById('lang-switch');
    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) el.placeholder = translations[lang][key];
        });
        localStorage.setItem('safeHavenLang', lang);

        const currentUser = JSON.parse(localStorage.getItem('safeHavenActiveUser'));
        if(currentUser && currentUser.role === 'admin') {
            if(window.renderAdminReports) window.renderAdminReports();
            if(window.renderAdminUsers) window.renderAdminUsers();
        }
        if(currentUser && currentUser.role === 'user') {
            if(window.renderUserNotifications) window.renderUserNotifications();
        }
    }

    const savedLang = localStorage.getItem('safeHavenLang') || 'id';
    langSelect.value = savedLang;
    setLanguage(savedLang);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    checkAuth();
});

// ============================================================
// 3. SISTEM MODAL & AUTENTIKASI
// ============================================================
const adminCredentials = { username: 'bagas', password: 'admin123' };

const loginModal = document.getElementById('login-modal');
const notifModal = document.getElementById('notif-modal');
const replyModal = document.getElementById('reply-modal');
const editUserModal = document.getElementById('edit-user-modal');

const btnLogout = document.getElementById('btn-logout');
const btnNotif = document.getElementById('btn-notif');
const navReport = document.getElementById('nav-report');
const navAdmin = document.getElementById('nav-admin');
const reportSection = document.getElementById('report-section');
const adminDashboard = document.getElementById('admin-dashboard');

window.openLoginModal = function() {
    loginModal.style.display = 'flex';
    document.body.classList.add('no-scroll');
};

btnNotif.addEventListener('click', () => { 
    notifModal.style.display = 'flex'; 
    document.body.classList.add('no-scroll');
    if(window.renderUserNotifications) window.renderUserNotifications(); 
});

window.closeModals = function() {
    loginModal.style.display = 'none';
    notifModal.style.display = 'none';
    replyModal.style.display = 'none';
    editUserModal.style.display = 'none';
    document.body.classList.remove('no-scroll');
    
    // FIX BUG 1: Kosongkan seluruh isian form saat modal ditutup
    document.getElementById('user-login-form').reset();
    document.getElementById('user-signup-form').reset();
    document.getElementById('admin-login-form').reset();
    ['ul', 'us', 'al'].forEach(prefix => clearError(prefix));
};

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) closeModals();
});

window.switchAuthTab = function(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.style.display = 'none');
    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.getElementById(`form-${tabName}`).style.display = 'block';
    
    // Bersihkan isi dan error form saat pindah tab
    document.getElementById('user-login-form').reset();
    document.getElementById('user-signup-form').reset();
    document.getElementById('admin-login-form').reset();
    ['ul', 'us', 'al'].forEach(prefix => clearError(prefix));
};

function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('safeHavenActiveUser'));
    
    navReport.style.display = 'none';
    navAdmin.style.display = 'none';
    reportSection.style.display = 'none';
    adminDashboard.style.display = 'none';
    btnNotif.style.display = 'none';
    
    if (currentUser && currentUser.role === 'user') {
        document.getElementById('btn-login-modal').style.display = 'none';
        btnLogout.style.display = 'block';
        navReport.style.display = 'block';
        reportSection.style.display = 'block';
        btnNotif.style.display = 'flex';
        updateNotifBadge();
    } else if (currentUser && currentUser.role === 'admin') {
        document.getElementById('btn-login-modal').style.display = 'none';
        btnLogout.style.display = 'block';
        navAdmin.style.display = 'block';
        adminDashboard.style.display = 'block';
        if(window.renderAdminReports) window.renderAdminReports();
        if(window.switchAdminDashboardTab) window.switchAdminDashboardTab('reports');
    } else {
        document.getElementById('btn-login-modal').style.display = 'block';
        btnLogout.style.display = 'none';
    }
}

window.checkAuthForReport = function(e) {
    const currentUser = JSON.parse(localStorage.getItem('safeHavenActiveUser'));
    if (!currentUser || currentUser.role !== 'user') {
        e.preventDefault();
        Swal.fire({ 
            icon: 'warning', 
            title: t('msg-warn-deny'), 
            text: t('msg-warn-deny-desc') 
        });
    }
};

// ============================================================
// 4. PROSES FORM AUTENTIKASI
// ============================================================
function showError(prefix, msg) {
    const errEl = document.getElementById(prefix + '-error');
    if(errEl) {
        errEl.textContent = msg;
        errEl.style.display = 'block';
    }
}

window.clearError = function(prefix) {
    const errEl = document.getElementById(prefix + '-error');
    if(errEl) {
        errEl.style.display = 'none';
        errEl.textContent = '';
    }
};

// 1. Sign Up
document.getElementById('user-signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('us-username').value;
    const newPassword = document.getElementById('us-password').value;

    let users = JSON.parse(localStorage.getItem('safeHavenUsers')) || [];
    
    if (users.some(u => u.username === newUsername)) {
        showError('us', t('msg-err-exist'));
    } else {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('safeHavenUsers', JSON.stringify(users));
        
        // FIX BUG 2: Hilangkan form (tutup modal) DULU sebelum alert muncul
        closeModals();
        
        Swal.fire({ 
            icon: 'success', 
            title: t('msg-succ-reg'), 
            text: t('msg-succ-reg-desc'),
            confirmButtonColor: 'var(--accent)'
        }).then(() => {
            // Kita pindahkan ke tab login secara diam-diam.
            // Saat user mengklik 'Masuk' di navbar, dia langsung melihat form login yang sudah kosong.
            switchAuthTab('user-login');
        });
    }
});

// 2. Login User
document.getElementById('user-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userIn = document.getElementById('ul-username').value;
    const passIn = document.getElementById('ul-password').value;

    let users = JSON.parse(localStorage.getItem('safeHavenUsers')) || [];
    const validUser = users.find(u => u.username === userIn && u.password === passIn);

    if (validUser) {
        localStorage.setItem('safeHavenActiveUser', JSON.stringify({ username: validUser.username, role: 'user' }));
        closeModals();
        e.target.reset();
        checkAuth();
        Swal.fire({ icon: 'success', title: t('msg-succ-login'), text: t('msg-succ-login-desc') + validUser.username + '!', timer: 2000, showConfirmButton: false });
    } else {
        showError('ul', t('msg-err-login'));
    }
});

// 3. Login Admin
document.getElementById('admin-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userIn = document.getElementById('al-username').value;
    const passIn = document.getElementById('al-password').value;

    if (userIn === adminCredentials.username && passIn === adminCredentials.password) {
        localStorage.setItem('safeHavenActiveUser', JSON.stringify({ username: 'Admin', role: 'admin' }));
        closeModals();
        e.target.reset();
        checkAuth();
        Swal.fire({ icon: 'success', title: t('msg-succ-admin'), text: t('msg-succ-admin-desc'), timer: 2000, showConfirmButton: false });
    } else {
        showError('al', t('msg-err-admin'));
    }
});

// 4. Logout
btnLogout.addEventListener('click', () => {
    Swal.fire({
        title: t('msg-warn-logout'),
        text: t('msg-warn-logout-desc'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--accent)',
        cancelButtonColor: 'var(--accent-red)',
        confirmButtonText: t('msg-btn-yes'),
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('safeHavenActiveUser');
            checkAuth();
            window.scrollTo(0, 0);
            Swal.fire({icon: 'success', title: t('msg-succ-logout'), timer: 1500, showConfirmButton: false});
        }
    });
});

// ============================================================
// 5. MANAJEMEN LAPORAN & NOTIFIKASI
// ============================================================
function getReports() { return JSON.parse(localStorage.getItem('safeHavenReports')) || []; }
function saveReports(reports) { localStorage.setItem('safeHavenReports', JSON.stringify(reports)); }
function getNotifs() { return JSON.parse(localStorage.getItem('safeHavenNotifs')) || []; }
function saveNotifs(notifs) { localStorage.setItem('safeHavenNotifs', JSON.stringify(notifs)); }

document.getElementById('report-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('safeHavenActiveUser'));
    
    const newReport = {
        id: Date.now(),
        authorUsername: currentUser.username,
        name: document.getElementById('report-name').value || 'Anonim',
        location: document.getElementById('report-location').value,
        type: document.getElementById('report-type').value,
        desc: document.getElementById('report-desc').value,
        status: 'Pending',
        date: new Date().toLocaleDateString('id-ID')
    };

    const reports = getReports();
    reports.push(newReport);
    saveReports(reports);

    e.target.reset();
    Swal.fire({ icon: 'success', title: t('msg-succ-report'), text: t('msg-succ-report-desc'), confirmButtonColor: 'var(--accent)' });
});

// ============================================================
// 6. DASHBOARD ADMIN
// ============================================================
window.switchAdminDashboardTab = function(tabName) {
    document.getElementById('admin-view-reports').style.display = tabName === 'reports' ? 'block' : 'none';
    document.getElementById('admin-view-users').style.display = tabName === 'users' ? 'block' : 'none';
    
    document.getElementById('btn-tab-reports').className = tabName === 'reports' ? 'btn-main' : 'btn-sub';
    document.getElementById('btn-tab-users').className = tabName === 'users' ? 'btn-main' : 'btn-sub';

    if(tabName === 'users') window.renderAdminUsers();
    else window.renderAdminReports();
};

window.renderAdminReports = function() {
    const reports = getReports();
    const list = document.getElementById('report-list');
    list.innerHTML = '';

    if (reports.length === 0) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-light); margin-top:2rem;">${t('msg-empty-report')}</p>`;
        return;
    }

    reports.reverse().forEach(report => {
        const item = document.createElement('div');
        item.style.cssText = "background:var(--secondary-bg); padding:1.5rem; margin-bottom:1rem; border-radius:16px; border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;";
        const statusColor = report.status === 'Selesai' ? 'var(--accent)' : '#f39c12';
        const displayStatus = report.status === 'Selesai' ? t('btn-resolve') : 'Pending';
        
        item.innerHTML = `
            <div style="flex:1; min-width:250px;">
                <h4 style="margin-bottom:0.5rem;">${report.type} 
                    <span style="background:${statusColor}; color:white; padding:2px 8px; border-radius:12px; font-size:0.7rem; margin-left:10px;">${displayStatus}</span>
                </h4>
                <p style="font-size:0.9rem; margin-bottom:0.2rem;"><strong>${t('lbl-loc')}:</strong> ${report.location}</p>
                <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-light);"><strong>${t('lbl-reporter')}:</strong> ${report.name} (${report.authorUsername}) | ${report.date}</p>
                <p style="font-size:0.95rem; font-style:italic;">"${report.desc}"</p>
            </div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <button onclick="openReplyModal(${report.id}, '${report.authorUsername}')" class="btn-sub" style="padding:0.5rem 1rem; border-color:#3498db; color:#3498db;">${t('btn-reply')}</button>
                ${report.status === 'Pending' ? `<button onclick="resolveReport(${report.id})" class="btn-sub" style="padding:0.5rem 1rem; border-color:var(--accent); color:var(--accent);">${t('btn-resolve')}</button>` : ''}
                <button onclick="deleteReport(${report.id})" class="btn-sub" style="padding:0.5rem 1rem; border-color:var(--accent-red); color:var(--accent-red);">${t('btn-del')}</button>
            </div>
        `;
        list.appendChild(item);
    });
};

window.openReplyModal = function(reportId, targetUsername) {
    document.getElementById('reply-report-id').value = reportId;
    document.getElementById('reply-user-target').value = targetUsername;
    document.getElementById('reply-target-user').textContent = `${t('btn-reply')}: ${targetUsername}`;
    document.getElementById('reply-message').value = '';
    replyModal.style.display = 'flex';
    document.body.classList.add('no-scroll');
};

window.useTemplate = function(text) {
    document.getElementById('reply-message').value = text;
};

document.getElementById('admin-reply-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const targetUser = document.getElementById('reply-user-target').value;
    const message = document.getElementById('reply-message').value;

    const notifs = getNotifs();
    notifs.push({
        id: Date.now(),
        targetUser: targetUser,
        title: "Admin",
        message: message,
        date: new Date().toLocaleDateString('id-ID')
    });
    saveNotifs(notifs);

    closeModals();
    Swal.fire({ icon: 'success', title: t('msg-succ-reply'), text: t('msg-succ-reply-desc') + targetUser + '.' });
});

window.resolveReport = function(id) {
    let reports = getReports();
    reports = reports.map(r => r.id === id ? { ...r, status: 'Selesai' } : r);
    saveReports(reports);
    window.renderAdminReports();
    Swal.fire({ icon: 'success', title: t('msg-succ-resolve'), text: t('msg-succ-resolve-desc'), timer: 1500, showConfirmButton: false });
};

window.deleteReport = function(id) {
    Swal.fire({
        title: t('msg-warn-del-rep'),
        text: t('msg-warn-del-desc'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--accent-red)',
        cancelButtonColor: 'var(--text-light)',
        confirmButtonText: t('msg-btn-del'),
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            let reports = getReports();
            reports = reports.filter(r => r.id !== id);
            saveReports(reports);
            window.renderAdminReports();
            Swal.fire(t('msg-succ-del'), t('msg-succ-del-rep-desc'), 'success');
        }
    });
};

window.renderAdminUsers = function() {
    const users = JSON.parse(localStorage.getItem('safeHavenUsers')) || [];
    const list = document.getElementById('user-list');
    list.innerHTML = '';

    if (users.length === 0) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-light); margin-top:2rem;">${t('msg-empty-user')}</p>`;
        return;
    }

    users.forEach(u => {
        const item = document.createElement('div');
        item.style.cssText = "background:var(--secondary-bg); padding:1rem 1.5rem; margin-bottom:1rem; border-radius:16px; border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;";
        item.innerHTML = `
            <div>
                <strong style="font-size:1.1rem; color:var(--text-main);">${u.username}</strong>
                <p style="font-size:0.8rem; color:var(--text-light);">${t('lbl-role-user')}</p>
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button onclick="openEditUserModal('${u.username}')" class="btn-sub" style="padding:0.4rem 0.8rem; border-color:#3498db; color:#3498db;">${t('btn-edit-acc')}</button>
                <button onclick="deleteUser('${u.username}')" class="btn-sub" style="padding:0.4rem 0.8rem; border-color:var(--accent-red); color:var(--accent-red);">${t('btn-del')}</button>
            </div>
        `;
        list.appendChild(item);
    });
};

window.deleteUser = function(username) {
    Swal.fire({
        title: t('msg-warn-del-usr') + `'${username}'?`,
        text: t('msg-warn-del-usr-desc'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--accent-red)',
        cancelButtonColor: 'var(--text-light)',
        confirmButtonText: t('msg-btn-del'),
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            let users = JSON.parse(localStorage.getItem('safeHavenUsers')) || [];
            users = users.filter(u => u.username !== username);
            localStorage.setItem('safeHavenUsers', JSON.stringify(users));
            window.renderAdminUsers();
            Swal.fire(t('msg-succ-del'), username + t('msg-succ-del-usr-desc'), 'success');
        }
    });
};

window.openEditUserModal = function(username) {
    document.getElementById('edit-original-username').value = username;
    document.getElementById('edit-username').value = username;
    document.getElementById('edit-password').value = '';
    editUserModal.style.display = 'flex';
    document.body.classList.add('no-scroll');
};

document.getElementById('admin-edit-user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const oldUsername = document.getElementById('edit-original-username').value;
    const newUsername = document.getElementById('edit-username').value;
    const newPassword = document.getElementById('edit-password').value;

    let users = JSON.parse(localStorage.getItem('safeHavenUsers')) || [];
    
    if(oldUsername !== newUsername && users.some(u => u.username === newUsername)) {
        Swal.fire({ icon: 'error', title: 'Oops', text: t('msg-err-edit-exist') });
        return;
    }

    users = users.map(u => u.username === oldUsername ? { username: newUsername, password: newPassword } : u);

    localStorage.setItem('safeHavenUsers', JSON.stringify(users));
    closeModals();
    window.renderAdminUsers();
    Swal.fire(t('msg-succ-edit'), t('msg-succ-edit-desc'), 'success');
});

// ============================================================
// 7. SISTEM NOTIFIKASI USER
// ============================================================
function updateNotifBadge() {
    const currentUser = JSON.parse(localStorage.getItem('safeHavenActiveUser'));
    if(!currentUser) return;
    
    const notifs = getNotifs().filter(n => n.targetUser === currentUser.username);
    const badge = document.getElementById('notif-badge');
    badge.textContent = notifs.length;
    badge.style.display = notifs.length > 0 ? 'block' : 'none';
}

window.renderUserNotifications = function() {
    const currentUser = JSON.parse(localStorage.getItem('safeHavenActiveUser'));
    const notifs = getNotifs().filter(n => n.targetUser === currentUser.username);
    const list = document.getElementById('notif-list');
    list.innerHTML = '';

    if (notifs.length === 0) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-light);">${t('msg-empty-notif')}</p>`;
        return;
    }

    notifs.reverse().forEach(notif => {
        const item = document.createElement('div');
        item.className = 'notif-item';
        item.innerHTML = `
            <h4>${notif.title}</h4>
            <p style="margin-bottom:0.3rem;">${notif.message}</p>
            <span style="font-size:0.75rem; color:var(--text-light);">${notif.date}</span>
            <button class="del-notif" onclick="deleteNotif(${notif.id})" title="Hapus Notifikasi">&times;</button>
        `;
        list.appendChild(item);
    });
};

window.deleteNotif = function(id) {
    let notifs = getNotifs();
    notifs = notifs.filter(n => n.id !== id);
    saveNotifs(notifs);
    window.renderUserNotifications();
    updateNotifBadge();
};
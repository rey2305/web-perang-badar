'use client';

import React from 'react';
import { BookOpen, Compass, ShieldAlert, Award, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* Sticky Navbar Lengkap */}
      <nav className="navbar-sticky">
        <div className="nav-container">
          <div className="brand-logo">
            <BookOpen size={22} color="#b91c1c" />
            <span>SIRAH DIGITAL</span>
            <span className="brand-badge">ATP</span>
          </div>

          <ul className="nav-menu">
            <li><a href="#pengantar">Pengantar</a></li>
            <li><a href="#kronologi">Kronologi Perang</a></li>
            <li><a href="#materi">Materi ATP</a></li>
            <li><a href="#hikmah">Hikmah Utama</a></li>
          </ul>

          <div className="nav-actions">
            <button className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Kembali Ke Atas
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="layout-container">
        {/* Hero Section */}
        <section id="pengantar" className="hero-grid">
          <div>
            <span className="tag-badge">
              <Compass size={14} /> MODUL SIRAH NABAWIYAH
            </span>
            <h1 className="hero-title">Perang Badar Kubra</h1>
            <p className="hero-description">
              Satu titik balik terbesar dalam sejarah peradaban Islam. Pertempuran penentu yang memperkokoh kedaulatan kaum Muslimin di Madinah serta menguji ketawakalan para sahabat Rasulullah SAW.
            </p>

            {/* Stats Counter */}
            <div className="stats-grid">
              <div className="stat-item">
                <h4>313</h4>
                <p>Pasukan Muslimin</p>
              </div>
              <div className="stat-item">
                <h4>1.000</h4>
                <p>Pasukan Quraisy</p>
              </div>
              <div className="stat-item">
                <h4>17</h4>
                <p>Ramadhan 2 H</p>
              </div>
            </div>
          </div>

          <div className="hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop" 
              alt="Lembah Badar" 
            />
          </div>
        </section>

        {/* Chronology Story Section */}
        <section id="kronologi" className="story-section">
          <div className="section-head">
            <span className="section-tag">ALUR CERITA PERISTIWA</span>
            <h2>Kronologi Perang Badar</h2>
          </div>

          <div className="timeline-horizontal">
            <div className="timeline-card">
              <div className="time-tag">TAHAP 01 — PERSIAPAN</div>
              <h3>Pencegatan Kafilah</h3>
              <p>
                Rasulullah SAW dan 313 sahabat keluar dari Madinah dengan niat awal mencegat kafilah dagang Quraisy yang dipimpin Abu Sufyan demi mengembalikan harta Muslimin yang dirampas di Mekkah.
              </p>
            </div>

            <div className="timeline-card">
              <div className="time-tag">TAHAP 02 — TAKTIK MILITER</div>
              <h3>Penguasaan Sumur Badar</h3>
              <p>
                Atas usul sahabat Hubbab bin Mundzir, pasukan Muslimin menguasai sumber mata air terdekat dan menimbun sumur lainnya untuk memotong jalur logistik pasukan Quraisy.
              </p>
            </div>

            <div className="timeline-card">
              <div className="time-tag">TAHAP 03 — PERTEMPURAN</div>
              <h3>Doa & Pertolongan Langit</h3>
              <p>
                Rasulullah SAW memanjatkan doa khusyu' di kemah pertahanan (*Arisy*). Allah mengabulkan doa tersebut dengan menurunkan bantuan ribuan malaikat ke medan perang.
              </p>
            </div>

            <div className="timeline-card">
              <div className="time-tag">TAHAP 04 — KEMENANGAN</div>
              <h3>Kekalahan Telak Quraisy</h3>
              <p>
                Kedisiplinan, keberanian, dan strategi matang menghasilkan kemenangan besar bagi kaum Muslimin. Petinggi musyrikin Quraisy seperti Abu Jahal tewas dalam perang ini.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Main Modules */}
        <section id="materi">
          <div className="section-head">
            <span className="section-tag">RINGKASAN PEMBELAJARAN</span>
            <h2>3 Materi Utama Pembelajaran</h2>
          </div>

          <div className="grid-cards">
            <article className="card">
              <div className="card-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop" 
                  alt="Sebab Perang" 
                />
              </div>
              <div className="card-number">01 / SEBAB & PERSIAPAN</div>
              <h3 className="card-title">Latar Belakang Peperangan</h3>
              <p className="card-text">
                Pencegatan kafilah dagang Quraisy, faktor pemicu konflik, serta kesiapan fisik dan ketawakalan pasukan Muslimin dengan sarana terbatas.
              </p>
            </article>

            <article className="card">
              <div className="card-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" 
                  alt="Jalannya Perang" 
                />
              </div>
              <div className="card-number">02 / ALUR & STRATEGI</div>
              <h3 className="card-title">Jalannya Peperangan</h3>
              <p className="card-text">
                Penerapan formasi shaf rapat, taktik kuasai air, keteguhan hati para sahabat, dan faktor pertolongan Allah SWT di pertempuran.
              </p>
            </article>

            <article className="card">
              <div className="card-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" 
                  alt="Hikmah Perang" 
                />
              </div>
              <div className="card-number">03 / LESSON LEARNED</div>
              <h3 className="card-title">Hikmah & Dampak</h3>
              <p className="card-text">
                Penguatan posisi politik kaum Muslimin di Madinah serta pentingnya menanamkan nilai keberanian, kesabaran, dan tawakal.
              </p>
            </article>
          </div>
        </section>

        {/* Quote Banner */}
        <section id="hikmah" className="quote-banner">
          <div className="quote-text">
            "Sungguh, Allah telah menolong kamu dalam Perang Badar, padahal kamu dalam keadaan lemah."
          </div>
          <div className="quote-author">— SURAH ALI 'IMRAN: 123</div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div>Edukasi Sirah Nabawiyah — Rekayasa Perangkat Lunak</div>
          <div>© 2026 Sirah Digital Archive. All Rights Reserved.</div>
        </footer>
      </div>
    </>
  );
}
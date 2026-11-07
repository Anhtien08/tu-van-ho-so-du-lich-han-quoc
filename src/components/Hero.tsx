
import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
} from 'lucide-react';

const teamPhoto = '/assets/aistudio/image_9a8a7f7f.png';

interface HeroProps {
  onStartEvaluation: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartEvaluation,
  onOpenConsultation,
}) => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-white via-slate-50/70 to-[#F8FAFC] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-[#161984] w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ED1B36] animate-pulse" />
              <span>Dịch Vụ Tư Vấn Visa Độc Lập</span>
              <span className="text-blue-300">·</span>
              <span className="text-slate-600 font-normal">Hà Nội & TP. Hồ Chí Minh</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.25] tracking-tight mb-5 text-balance">
              DỊCH VỤ TƯ VẤN VÀ HỖ TRỢ CHUẨN BỊ HỒ SƠ VISA HÀN QUỐC
            </h1>

            <div className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-2xl font-normal space-y-3">
              <p>
                Visa5S cung cấp dịch vụ tư vấn và hỗ trợ chuẩn bị hồ sơ xin visa Hàn Quốc cho khách hàng có nhu cầu du lịch, thăm thân, du học và công tác.
              </p>
              <p>
                Với hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn visa, đội ngũ chuyên viên hỗ trợ khách hàng rà soát giấy tờ, hướng dẫn hoàn thiện hồ sơ và giải đáp các thủ tục liên quan đến từng diện visa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-4">
              <button
                onClick={onStartEvaluation}
                className="inline-flex items-center justify-center gap-2.5 bg-[#ED1B36] hover:bg-[#D6142E] text-white font-semibold text-[15px] px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>ĐĂNG KÝ TƯ VẤN HỒ SƠ MIỄN PHÍ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-[15px] px-5 py-3.5 rounded-xl shadow-2xs transition-all cursor-pointer"
              >
                LIÊN HỆ CHUYÊN VIÊN
              </button>
            </div>

            {/* Transparency statement */}
            <p className="text-xs text-slate-500 italic mb-7 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#161984] shrink-0" />
              <span>Visa5S là đơn vị tư vấn độc lập, không phải cơ quan cấp thị thực hoặc cơ quan đại diện ngoại giao của Chính phủ Hàn Quốc.</span>
            </p>

            {/* Quick Hotline Bar */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs mb-8 flex-wrap max-w-xl">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Hotline tư vấn:
              </span>
              <a
                href="tel:0911909686"
                className="text-xs font-bold text-[#161984] hover:text-[#ED1B36] transition-colors inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200"
              >
                <span>Hà Nội:</span>
                <span className="font-mono text-slate-900">0911 909 686</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="tel:0967686101"
                className="text-xs font-bold text-[#161984] hover:text-[#ED1B36] transition-colors inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200"
              >
                <span>TP.HCM:</span>
                <span className="font-mono text-slate-900">0967 686 101</span>
              </a>
            </div>

            {/* Stats Metric Cards - Transparent and compliant */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#161984] tabular-nums">
                  10<span className="text-[#ED1B36] text-lg font-bold">+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Năm kinh nghiệm tư vấn
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#161984] tabular-nums">
                  15.000<span className="text-slate-400 text-lg font-bold">+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Hồ sơ đã đồng hành
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#161984] tabular-nums">
                  30<span className="text-blue-600 text-lg font-bold">p</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Phản hồi & tư vấn ban đầu
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#161984] tabular-nums">
                  100<span className="text-emerald-600 text-lg font-bold">%</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Bảo mật thông tin hồ sơ
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image & Assistant Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900 aspect-[4/3] sm:aspect-[16/12]">
              <img
                src={teamPhoto}
                alt="Đội ngũ chuyên viên tư vấn hỗ trợ chuẩn bị hồ sơ Visa5S"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#161984]" />
                <span className="text-xs font-bold text-[#161984]">
                  Đội Ngũ Chuyên Viên Visa5S
                </span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Chuyên viên tư vấn hỗ trợ chuẩn bị hồ sơ
                  </span>
                  <span className="text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded font-medium">
                    Hà Nội & TP.HCM
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 line-clamp-1">
                  Đồng hành cùng khách hàng chuẩn bị hồ sơ khoa học, minh bạch và đầy đủ
                </p>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#161984] border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0">
                  <Clock className="w-5 h-5 text-[#161984]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Cần tư vấn hỗ trợ hồ sơ?
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    0911 909 686 (HN) · 0967 686 101 (HCM)
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="bg-[#ED1B36] hover:bg-[#D6142E] text-white px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors shadow-2xs shrink-0"
              >
                Liên Hệ Chuyên Viên
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

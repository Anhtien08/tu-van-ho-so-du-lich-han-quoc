import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Building, Clock, AlertTriangle, FileText } from 'lucide-react';
import { VisaLogo } from './VisaLogo';
import { PolicyModal, PolicyType } from './PolicyModal';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenUrgentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenUrgentModal }) => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  return (
    <footer className="bg-[#161984] text-white pt-16 pb-24 lg:pb-16 border-t border-blue-900/40">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-blue-800/60">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <VisaLogo size="lg" theme="dark" />
            </div>

            <p className="text-xs text-blue-100/80 leading-relaxed max-w-sm">
              Visa5S là thương hiệu cung cấp dịch vụ tư vấn và hỗ trợ chuẩn bị hồ sơ xin visa Hàn Quốc độc lập, chuyên nghiệp và minh bạch cho khách hàng có nhu cầu du lịch, thăm thân, du học và công tác.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Cam kết bảo mật dữ liệu khách hàng theo quy định pháp luật</span>
            </div>
          </div>

          {/* Section: Thông tin đơn vị cung cấp dịch vụ (Section 10) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-amber-300" />
              <span>Thông Tin Đơn Vị Cung Cấp Dịch Vụ</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-100/90 space-y-2">
              <div>
                <span className="text-blue-300 block font-semibold">Tên doanh nghiệp (Quốc tế):</span>
                <span className="font-bold text-white">ASIA BLUE SKY INVESTMENT CONSULTANCY COMPANY LIMITED</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-300 font-semibold">Tên viết tắt:</span>
                <span className="font-bold text-white">ASIA BLUE SKY</span>
                <span className="text-blue-400">|</span>
                <span className="text-blue-300 font-semibold">Thương hiệu:</span>
                <span className="font-bold text-white">Visa5S</span>
              </div>
              <div>
                <span className="text-blue-300 font-semibold">Mã số thuế:</span>{' '}
                <span className="font-mono font-bold text-amber-300">0313867506</span>
              </div>
              <div>
                <span className="text-blue-300 block font-semibold">Địa chỉ đăng ký:</span>
                <span>370 Đường 3 Tháng 2, Phường Hòa Hưng, Thành phố Hồ Chí Minh, Việt Nam.</span>
              </div>
            </div>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Hệ Thống Văn Phòng & Hotline</span>
            </h4>
            <div className="space-y-3 text-xs text-blue-100/80">
              {/* TP.HCM */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Trụ Sở TP. Hồ Chí Minh:</span>
                  370 Đường 3 Tháng 2, Phường Hòa Hưng, TP. Hồ Chí Minh
                  <div className="mt-0.5">
                    Hotline TP.HCM:{' '}
                    <a href="tel:0967686101" className="text-amber-300 font-bold hover:underline font-mono">
                      0967 686 101
                    </a>
                  </div>
                </div>
              </div>

              {/* Hanoi */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Văn Phòng Hà Nội:</span>
                  57 Vương Thừa Vũ, Phường Khương Mai, Quận Thanh Xuân, Hà Nội
                  <div className="mt-0.5">
                    Hotline Hà Nội:{' '}
                    <a href="tel:0911909686" className="text-amber-300 font-bold hover:underline font-mono">
                      0911 909 686
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Giờ làm việc: 8:00 - 18:30 (Thứ Hai - Thứ Bảy)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Links Row */}
        <div className="py-6 border-b border-blue-800/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-blue-200">
          <button
            onClick={() => setActivePolicy('privacy')}
            className="hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Chính sách bảo mật thông tin
          </button>
          <span>•</span>
          <button
            onClick={() => setActivePolicy('terms')}
            className="hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Điều khoản sử dụng dịch vụ
          </button>
          <span>•</span>
          <button
            onClick={() => setActivePolicy('payment')}
            className="hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Chính sách thanh toán
          </button>
          <span>•</span>
          <button
            onClick={() => setActivePolicy('refund')}
            className="hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Chính sách hoàn phí
          </button>
          <span>•</span>
          <button
            onClick={() => setActivePolicy('contact')}
            className="hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Liên hệ
          </button>
        </div>

        {/* Mandatory Transparency & Disclaimer Notification */}
        <div className="pt-8 space-y-3 text-xs text-blue-200/80 leading-relaxed">
          <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-700/60 space-y-2">
            <p>
              <strong>Thông báo đơn vị cung cấp dịch vụ:</strong> Đơn vị cung cấp dịch vụ: ASIA BLUE SKY INVESTMENT CONSULTANCY COMPANY LIMITED (ASIA BLUE SKY), mã số thuế 0313867506. Visa5S là thương hiệu cung cấp dịch vụ tư vấn và hỗ trợ chuẩn bị hồ sơ visa độc lập, không phải cơ quan cấp thị thực hoặc cơ quan đại diện ngoại giao của Chính phủ Hàn Quốc. Quyết định xét duyệt visa thuộc thẩm quyền của cơ quan có thẩm quyền Hàn Quốc.
            </p>
            <p>
              Phí dịch vụ tư vấn của Visa5S được thông báo riêng và không đồng nhất với lệ phí lãnh sự hoặc các khoản phí do cơ quan tiếp nhận hồ sơ quy định.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-blue-200/60 pt-2 text-center sm:text-left">
            <p>
              &copy; 2026 ASIA BLUE SKY INVESTMENT CONSULTANCY COMPANY LIMITED (Visa5S). All rights reserved.
            </p>
            <p>
              Dịch vụ tư vấn và hỗ trợ chuẩn bị hồ sơ visa Hàn Quốc độc lập.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Details Modal */}
      <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />
    </footer>
  );
};

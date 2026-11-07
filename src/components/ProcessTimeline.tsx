import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award, Clock } from 'lucide-react';
// Import hình ảnh đúng chuẩn Vite/React
import dossierImg from '../assets/images/dossier_consultation_1792985144950.jpg';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'BƯỚC 1: TIẾP NHẬN THÔNG TIN VÀ NHU CẦU',
      desc: 'Chuyên viên tiếp nhận thông tin, tìm hiểu mục đích chuyến đi và loại visa khách hàng dự định xin.',
    },
    {
      num: '02',
      title: 'BƯỚC 2: RÀ SOÁT HỒ SƠ BAN ĐẦU',
      desc: 'Kiểm tra các giấy tờ cá nhân, công việc, tài chính và lịch sử xuất nhập cảnh do khách hàng cung cấp.',
    },
    {
      num: '03',
      title: 'BƯỚC 3: TƯ VẤN VÀ HƯỚNG DẪN HOÀN THIỆN',
      desc: 'Hướng dẫn khách hàng chuẩn bị, bổ sung và hoàn thiện giấy tờ theo yêu cầu của diện visa tương ứng.',
    },
    {
      num: '04',
      title: 'BƯỚC 4: HỖ TRỢ CHUẨN BỊ THỦ TỤC NỘP HỒ SƠ',
      desc: 'Hướng dẫn khách hàng tìm hiểu quy trình, biểu mẫu, lịch hẹn và địa điểm tiếp nhận hồ sơ theo quy định hiện hành.',
    },
    {
      num: '05',
      title: 'BƯỚC 5: THEO DÕI VÀ CẬP NHẬT THÔNG TIN',
      desc: 'Hỗ trợ khách hàng theo dõi tình trạng hồ sơ và cập nhật thông tin trong phạm vi dịch vụ đã thỏa thuận.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Photographic Proof Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src={dossierImg}
                alt="Quy trình tư vấn và chuẩn bị hồ sơ visa Hàn Quốc tại Visa5S"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161984]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1.5">
                  Quy Trình Chuẩn Hóa
                </span>
                <p className="text-sm font-medium text-slate-100 leading-relaxed">
                  Đội ngũ chuyên viên Visa5S đồng hành rà soát từng mục giấy tờ cùng khách hàng trước khi nộp.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Human Editorial Numbered Process List */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#161984] uppercase tracking-wider mb-3">
              <span>QUY TRÌNH TƯ VẤN MINH BẠCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
              QUY TRÌNH 5 BƯỚC TƯ VẤN & CHUẨN BỊ HỒ SƠ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8 font-normal leading-relaxed">
              Quy trình làm việc minh bạch giúp khách hàng nắm rõ từng giai đoạn, chuẩn bị giấy tờ đầy đủ và chủ động thời gian.
            </p>

            <div className="space-y-3.5">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/80 hover:border-[#161984]/40 hover:bg-slate-50 transition-all group bg-white shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#161984] font-black font-mono text-sm flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#161984] group-hover:text-white transition-colors">
                    {st.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

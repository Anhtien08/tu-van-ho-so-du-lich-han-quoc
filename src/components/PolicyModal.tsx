import React from 'react';
import { X, ShieldCheck, FileText, CreditCard, RefreshCw, Mail, Phone, MapPin } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'payment' | 'refund' | 'contact' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap: Record<
    NonNullable<PolicyType>,
    { title: string; icon: React.ReactNode; body: React.ReactNode }
  > = {
    privacy: {
      title: 'Chính Sách Bảo Mật Thông Tin',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Mục đích thu thập thông tin:</strong> ASIA BLUE SKY INVESTMENT CONSULTANCY COMPANY LIMITED (ASIA BLUE SKY - Thương hiệu Visa5S) chỉ thu thập thông tin cá nhân của khách hàng (họ tên, số điện thoại, thông tin liên quan đến công việc, tài chính và hồ sơ nhân thân) cho mục đích tư vấn, hướng dẫn hoàn thiện hồ sơ xin visa Hàn Quốc theo yêu cầu và thỏa thuận với khách hàng.
          </p>
          <p>
            <strong>2. Phạm vi sử dụng thông tin:</strong> Dữ liệu khách hàng được sử dụng nội bộ để đối chiếu hồ sơ, dịch thuật công chứng tư pháp (nếu được ủy thác) và hỗ trợ hoàn thiện tờ khai nộp hồ sơ. Chúng tôi tuyệt đối không bán, chia sẻ hoặc chuyển giao thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại.
          </p>
          <p>
            <strong>3. Thời gian lưu trữ:</strong> Dữ liệu hồ sơ chỉ được lưu trữ trong thời gian cung cấp dịch vụ và theo quy định pháp luật hiện hành. Khách hàng có quyền yêu cầu trích xuất hoặc hủy bỏ thông tin lưu trữ bất kỳ lúc nào sau khi hoàn tất dịch vụ.
          </p>
          <p>
            <strong>4. Cam kết bảo mật:</strong> Mọi chứng từ, bản scan giấy tờ của quý khách được bảo mật theo tiêu chuẩn an toàn thông tin, đảm bảo sự riêng tư và bảo hộ quyền lợi hợp pháp của khách hàng.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Điều Khoản Sử Dụng Dịch Vụ',
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Vị thế và phạm vi dịch vụ:</strong> Visa5S là thương hiệu thuộc ASIA BLUE SKY INVESTMENT CONSULTANCY COMPANY LIMITED, hoạt động tư vấn độc lập trong lĩnh vực hỗ trợ chuẩn bị, rà soát và dịch thuật hồ sơ xin visa. Visa5S không phải là cơ quan đại diện ngoại giao, Đại sứ quán, Tổng Lãnh sự quán hoặc Trung tâm tiếp nhận hồ sơ xin thị thực (KVAC).
          </p>
          <p>
            <strong>2. Quyền hạn xét duyệt:</strong> Quyết định cấp visa, từ chối visa, số lần nhập cảnh và thời hạn lưu trú thuộc thẩm quyền duy nhất của cơ quan có thẩm quyền của Chính phủ Hàn Quốc. Visa5S không có quyền quyết định hoặc can thiệp vào kết quả xét duyệt.
          </p>
          <p>
            <strong>3. Trách nhiệm của khách hàng:</strong> Khách hàng có trách nhiệm cung cấp thông tin trung thực, chính xác và các giấy tờ có thật. Visa5S từ chối tư vấn hoặc hỗ trợ các trường hợp cố tình gian dối, giả mạo tài liệu hoặc vi phạm quy định pháp luật.
          </p>
          <p>
            <strong>4. Thỏa thuận dịch vụ:</strong> Các quyền và nghĩa vụ cụ thể được xác lập rõ ràng qua thỏa thuận hoặc hợp đồng tư vấn trước khi triển khai dịch vụ.
          </p>
        </div>
      ),
    },
    payment: {
      title: 'Chính Sách Thanh Toán',
      icon: <CreditCard className="w-5 h-5 text-amber-400" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Minh bạch chi phí:</strong> Phí dịch vụ tư vấn của Visa5S được thông báo rõ ràng, chi tiết từng hạng mục (rà soát hồ sơ, dịch thuật công chứng, hoàn thiện đơn khai...) trước khi khách hàng quyết định sử dụng dịch vụ.
          </p>
          <p>
            <strong>2. Phân định lệ phí nhà nước:</strong> Phí dịch vụ của Visa5S là khoản phí độc lập và không đồng nhất với lệ phí lãnh sự của Đại sứ quán/Lãnh sự quán hoặc phí tiếp nhận hồ sơ của Trung tâm KVAC. Khách hàng được thông báo rõ từng khoản để chủ động thanh toán theo biên lai chính thức.
          </p>
          <p>
            <strong>3. Phương thức thanh toán:</strong> Khách hàng có thể thanh toán trực tiếp tại văn phòng của chúng tôi hoặc chuyển khoản qua tài khoản ngân hàng chính thức của doanh nghiệp với biên nhận đầy đủ.
          </p>
        </div>
      ),
    },
    refund: {
      title: 'Chính Sách Hoàn Phí',
      icon: <RefreshCw className="w-5 h-5 text-rose-400" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Nguyên tắc hoàn phí dịch vụ:</strong> Trong trường hợp khách hàng hủy dịch vụ trước khi Visa5S thực hiện các công việc tư vấn (như dịch thuật, công chứng hoặc rà soát chuyên sâu hồ sơ), khách hàng sẽ được hoàn lại phí dịch vụ sau khi trừ các chi phí phát sinh thực tế (nếu có).
          </p>
          <p>
            <strong>2. Các khoản chi phí không hoàn lại:</strong> Các khoản phí đã nộp cho bên thứ ba như phí dịch thuật tư pháp đã hoàn tất, phí công chứng nhà nước, lệ phí lãnh sự hoặc phí KVAC đã nộp theo biên nhận sẽ tuân theo quy định của cơ quan tiếp nhận và không được hoàn lại.
          </p>
          <p>
            <strong>3. Xử lý yêu cầu hoàn phí:</strong> Mọi yêu cầu hoàn trả sẽ được bộ phận chăm sóc khách hàng tiếp nhận và xử lý minh bạch trong vòng 3 - 5 ngày làm việc theo hợp đồng đã ký.
          </p>
        </div>
      ),
    },
    contact: {
      title: 'Thông Tin Liên Hệ & Hỗ Trợ',
      icon: <Mail className="w-5 h-5 text-indigo-400" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <p className="font-bold text-[#161984] text-sm">
              ASIA BLUE SKY INVESTMENT CONSULTANCY COMPANY LIMITED
            </p>
            <p className="text-xs text-slate-600">
              Tên viết tắt: <strong>ASIA BLUE SKY</strong> | Thương hiệu: <strong>Visa5S</strong>
            </p>
            <p className="text-xs text-slate-600">
              Mã số thuế: <strong>0313867506</strong>
            </p>
            <p className="text-xs text-slate-600">
              Người đại diện theo pháp luật: <strong>TRẦN THỊ HẠNH</strong>
            </p>
            <p className="text-xs text-slate-600">
              Địa chỉ đăng ký: <strong>370 Đường 3 Tháng 2, Phường Hòa Hưng, Thành phố Hồ Chí Minh, Việt Nam.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-200">
              <span className="font-bold text-[#161984] block mb-1">Hotline Hà Nội:</span>
              <a href="tel:0911909686" className="text-[#ED1B36] font-bold text-base font-mono">
                0911 909 686
              </a>
              <p className="text-[11px] text-slate-500 mt-1">Giờ làm việc: 8:00 - 18:30 (T2 - T7)</p>
            </div>
            <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-200">
              <span className="font-bold text-[#161984] block mb-1">Hotline TP. Hồ Chí Minh:</span>
              <a href="tel:0967686101" className="text-[#ED1B36] font-bold text-base font-mono">
                0967 686 101
              </a>
              <p className="text-[11px] text-slate-500 mt-1">Giờ làm việc: 8:00 - 18:30 (T2 - T7)</p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-[#161984] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
              {current.icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold">{current.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">{current.body}</div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#161984] hover:bg-[#2025a8] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Đã Hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

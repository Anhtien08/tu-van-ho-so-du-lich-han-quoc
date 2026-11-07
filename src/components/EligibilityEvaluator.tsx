import React, { useState } from 'react';
import { EligibilityInputs, EligibilityEvaluationResult, VisaCategoryCode } from '../types/visa';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Send,
  Plane,
  GraduationCap,
  Building2,
  Briefcase,
  Store,
  Laptop,
  Coins,
  ShieldCheck,
  Compass,
  Check,
} from 'lucide-react';

interface EligibilityEvaluatorProps {
  onDirectConsultation: (data: { visaType: VisaCategoryCode; score: number; phone: string; name: string }) => void;
}

const initialInputs: EligibilityInputs = {
  visaType: 'C-3-9',
  employmentType: 'fulltime_insured',
  monthlyIncome: '15m_30m',
  travelHistory: 'asean_only',
  savingsAmount: '100m_200m',
  hometownRegion: 'big_city',
  hasPriorRefusal: false,
};

export const EligibilityEvaluator: React.FC<EligibilityEvaluatorProps> = ({ onDirectConsultation }) => {
  const [step, setStep] = useState<number>(1);
  const [inputs, setInputs] = useState<EligibilityInputs>(initialInputs);
  const [result, setResult] = useState<EligibilityEvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [submittedReport, setSubmittedReport] = useState<boolean>(false);

  const calculateEvaluation = () => {
    setIsEvaluating(true);

    setTimeout(() => {
      const existingDocs: string[] = [
        'Hộ chiếu gốc còn thời hạn trên 6 tháng',
        'Căn cước công dân gắn chip (bản sao hoặc bản gốc)',
      ];
      const missingDocs: string[] = [
        'Tờ khai xin cấp visa (e-form) theo đúng biểu mẫu mới nhất của KVAC',
        '02 ảnh thẻ 3.5 x 4.5cm nền trắng chụp trong 3 tháng gần nhất',
        'Bản dịch thuật công chứng tư pháp sang tiếng Hàn hoặc tiếng Anh',
      ];
      const criticalNotes: string[] = [];
      const preparationPlan: string[] = [
        'Rà soát và đối chiếu tính hợp lệ, thời hạn của toàn bộ giấy tờ hiện có theo quy định KVAC.',
        'Bổ sung các giấy tờ còn thiếu và tiến hành dịch thuật công chứng tư pháp.',
        'Hoàn thiện đơn khai e-form và hướng dẫn đặt lịch hẹn nộp hồ sơ theo quy định.',
        'Chuẩn bị thông tin giải trình nếu cơ quan xét duyệt liên hệ xác minh ngẫu nhiên.',
      ];

      // Context according to visaType
      if (inputs.visaType === 'C-3-9') {
        missingDocs.push(
          'Lịch trình chuyến đi chi tiết khớp với thời gian dự kiến',
          'Xác nhận đặt phòng khách sạn và vé máy bay khứ hồi hợp lệ'
        );
      } else if (inputs.visaType === 'D-2') {
        missingDocs.push(
          'Thư mời nhập học chính thức từ trường Hàn Quốc hoặc mã chứng nhận visa',
          'Bằng tốt nghiệp và Học bạ THPT/Đại học đã hợp pháp hóa lãnh sự',
          'Chứng chỉ ngoại ngữ (TOPIK hoặc IELTS/TOEFL) theo yêu cầu chuyên ngành'
        );
      } else if (inputs.visaType === 'C-3-4') {
        missingDocs.push(
          'Thư mời công tác gốc có đóng dấu pháp nhân của đối tác Hàn Quốc',
          'Thư bảo lãnh (귀국보증서) theo mẫu quy định',
          'Quyết định cử đi công tác nêu rõ mục đích và chi phí chuyến đi'
        );
      }

      // Employment
      if (inputs.employmentType === 'fulltime_insured') {
        existingDocs.push(
          'Hợp đồng lao động hoặc Quyết định bổ nhiệm công việc',
          'Quá trình tham gia BHXH (xác nhận qua ứng dụng VssID)',
          'Bảng lương hoặc sao kê tài khoản ngân hàng nhận lương 3 - 6 tháng'
        );
        missingDocs.push('Đơn xin nghỉ phép đi du lịch có xác nhận của ban giám đốc');
      } else if (inputs.employmentType === 'business_owner') {
        existingDocs.push(
          'Giấy chứng nhận đăng ký kinh doanh hợp pháp',
          'Biên lai hoặc tờ khai nộp thuế 3 tháng gần nhất của doanh nghiệp/hộ cá thể'
        );
      } else if (inputs.employmentType === 'freelancer') {
        existingDocs.push('Lịch sử giao dịch tài khoản nhận thù lao đối tác');
        missingDocs.push('Hợp đồng cộng tác dự án hoặc bằng chứng hoạt động nghề nghiệp');
        criticalNotes.push('Làm việc tự do cần sao kê tài khoản ngân hàng thể hiện nguồn thu nhập đều đặn trong 6 tháng gần nhất.');
      } else if (inputs.employmentType === 'student') {
        existingDocs.push('Thẻ học sinh / sinh viên hoặc Giấy xác nhận trường');
        missingDocs.push('Hồ sơ công việc và chứng minh tài chính của người bảo lãnh (bố/mẹ)');
      } else if (inputs.employmentType === 'retired') {
        existingDocs.push('Sổ hưu trí hoặc quyết định nghỉ hưu hưởng chế độ', 'Sao kê tài khoản nhận lương hưu');
      }

      // Savings
      if (inputs.savingsAmount === 'over_500m_assets' || inputs.savingsAmount === '200m_500m' || inputs.savingsAmount === '100m_200m') {
        existingDocs.push('Sổ tiết kiệm ngân hàng và Giấy xác nhận số dư tiền gửi');
        if (inputs.savingsAmount === 'over_500m_assets') {
          existingDocs.push('Giấy tờ sở hữu tài sản (nhà đất, xe ô tô) để tăng cường hồ sơ ràng buộc');
        }
      } else if (inputs.savingsAmount === 'under_100m' || inputs.savingsAmount === 'need_support') {
        missingDocs.push('Sổ tiết kiệm ngân hàng có số dư và thời gian gửi đáp ứng quy định diện visa');
        criticalNotes.push('Cần chuẩn bị sổ tiết kiệm đúng mức chuẩn và thời gian gửi quy định để hồ sơ tài chính thuyết phục.');
      }

      // Travel History & Hometown & Prior Refusal
      if (inputs.travelHistory === 'none') {
        criticalNotes.push('Hộ chiếu chưa từng xuất cảnh: Cần củng cố hồ sơ công việc và chứng minh tài chính vững chắc để khẳng định ràng buộc.');
      } else {
        existingDocs.push('Hộ chiếu có dấu mộc xuất nhập cảnh các nước đã đi');
      }

      if (inputs.hometownRegion === 'caution_province') {
        criticalNotes.push('Hộ khẩu tại một số địa phương có thể được cơ quan xét duyệt kiểm tra kỹ lưỡng hơn, nên chuẩn bị kỹ giấy tờ chứng minh thu nhập thực tế.');
      }

      if (inputs.hasPriorRefusal) {
        criticalNotes.push('Từng có lịch sử bị từ chối hồ sơ: Cần rà soát chính xác lý do lần nộp trước và chuẩn bị thư giải trình chi tiết.');
      }

      criticalNotes.push('Mọi thông tin trên hồ sơ phải tuyệt đối trung thực, nhất quán giữa các tài liệu.');

      setResult({
        statusLabel: 'Đã hoàn tất đánh giá sơ bộ',
        summary:
          'Dựa trên thông tin bạn đã cung cấp, dưới đây là bảng tổng hợp các giấy tờ bạn đã có, các danh mục cần chuẩn bị thêm và các lưu ý quan trọng để hoàn thiện hồ sơ khoa học.',
        existingDocs,
        missingDocs,
        criticalNotes,
        preparationPlan,
        strengths: existingDocs,
        riskFactors: criticalNotes,
        actionRecommendations: preparationPlan,
        recommendedDocs: missingDocs,
      });

      setIsEvaluating(false);
    }, 350);
  };

  const handleSendReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone || !contactName) return;
    onDirectConsultation({
      visaType: inputs.visaType,
      score: 0,
      phone: contactPhone,
      name: contactName,
    });
    setSubmittedReport(true);
  };

  const resetForm = () => {
    setResult(null);
    setStep(1);
    setSubmittedReport(false);
  };

  return (
    <section id="evaluator" className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compliant with Section 6 */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#161984] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#ED1B36]" />
            <span>Công Cụ Đánh Giá Hồ Sơ Trực Tuyến</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#161984] tracking-tight mb-3">
            ĐÁNH GIÁ SƠ BỘ HỒ SƠ VISA HÀN QUỐC
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chỉ mất khoảng 1 phút trả lời một số câu hỏi để nhận danh mục giấy tờ cần chuẩn bị và được tư vấn về hồ sơ của bạn.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 max-w-3xl mx-auto">
          {!result ? (
            <div>
              {/* Step Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span className="text-[#161984] font-bold">
                    Bước {step} / 4: {
                      step === 1 ? 'Chọn diện hồ sơ' :
                      step === 2 ? 'Công việc & Thu nhập' :
                      step === 3 ? 'Tài chính & Sổ tiết kiệm' :
                      'Lịch sử du lịch & Hộ khẩu'
                    }
                  </span>
                  <span>{step * 25}% hoàn thành</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#161984] transition-all duration-300 rounded-full"
                    style={{ width: `${step * 25}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: Chọn diện hồ sơ */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-lg font-bold text-[#161984] mb-4">
                    1. Bạn dự định chuẩn bị hồ sơ Hàn Quốc diện nào?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {[
                      {
                        code: 'C-3-9',
                        title: 'Du Lịch Tự Túc / Thăm Thân',
                        desc: 'Đi tham quan, nghỉ dưỡng, thăm bạn bè, người thân ngắn hạn.',
                        icon: <Plane className="w-5 h-5 text-[#161984]" />,
                      },
                      {
                        code: 'D-2',
                        title: 'Du Học Chính Quy',
                        desc: 'Theo học Cử nhân, Thạc sĩ hoặc học tiếng tại các trường Hàn.',
                        icon: <GraduationCap className="w-5 h-5 text-[#161984]" />,
                      },
                      {
                        code: 'C-3-4',
                        title: 'Thương Mại & Công Tác',
                        desc: 'Khảo sát thị trường, ký kết hợp đồng, tham gia hội nghị.',
                        icon: <Building2 className="w-5 h-5 text-[#161984]" />,
                      },
                    ].map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => setInputs({ ...inputs, visaType: item.code as VisaCategoryCode })}
                        className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between min-h-[140px] ${
                          inputs.visaType === item.code
                            ? 'border-[#161984] bg-blue-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                            {item.icon}
                          </div>
                          {inputs.visaType === item.code && (
                            <div className="w-5 h-5 rounded-full bg-[#161984] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#161984]">{item.title}</div>
                          <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Công việc & Thu nhập */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-lg font-bold text-[#161984] mb-3">
                      2. Tình trạng công việc hiện tại của bạn?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { val: 'fulltime_insured', label: 'Đi làm có HĐLĐ & đóng BHXH đầy đủ', icon: <Briefcase className="w-4 h-4" /> },
                        { val: 'business_owner', label: 'Chủ Doanh Nghiệp / Hộ Kinh Doanh', icon: <Store className="w-4 h-4" /> },
                        { val: 'freelancer', label: 'Làm tự do / Kinh doanh online', icon: <Laptop className="w-4 h-4" /> },
                        { val: 'student', label: 'Học sinh / Sinh viên đại học', icon: <GraduationCap className="w-4 h-4" /> },
                        { val: 'retired', label: 'Cán bộ hưu trí / Có sổ hưu', icon: <ShieldCheck className="w-4 h-4" /> },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setInputs({ ...inputs, employmentType: item.val as any })}
                          className={`p-3.5 rounded-xl border-2 text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            inputs.employmentType === item.val
                              ? 'border-[#161984] bg-blue-50/50 text-[#161984]'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </span>
                          {inputs.employmentType === item.val && (
                            <div className="w-4 h-4 rounded-full bg-[#161984] text-white flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Mức thu nhập hàng tháng trung bình
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { val: 'under_15m', label: '< 15 triệu' },
                        { val: '15m_30m', label: '15 - 30 triệu' },
                        { val: '30m_50m', label: '30 - 50 triệu' },
                        { val: 'over_50m', label: '> 50 triệu' },
                      ].map((inc) => (
                        <button
                          key={inc.val}
                          type="button"
                          onClick={() => setInputs({ ...inputs, monthlyIncome: inc.val as any })}
                          className={`py-2.5 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                            inputs.monthlyIncome === inc.val
                              ? 'border-[#161984] bg-[#161984] text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {inc.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Tài chính & Tiết kiệm */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-lg font-bold text-[#161984] mb-3">
                    3. Năng lực tài chính & sổ tiết kiệm của bạn?
                  </h3>

                  <div className="space-y-2.5">
                    {[
                      {
                        val: '100m_200m',
                        title: 'Có sổ tiết kiệm 100 - 200 triệu đồng',
                        desc: 'Gửi tại ngân hàng từ 1 tháng trở lên (đạt chuẩn Lãnh sự).',
                      },
                      {
                        val: '200m_500m',
                        title: 'Có sổ tiết kiệm 200 - 500 triệu đồng',
                        desc: 'Tài chính vững vàng, tỉ lệ đậu được đánh giá rất cao.',
                      },
                      {
                        val: 'over_500m_assets',
                        title: 'Sổ > 500 triệu + Có Nhà Đất hoặc Ô tô',
                        desc: 'Hồ sơ tài chính xuất sắc, có ràng buộc tài sản lớn tại Việt Nam.',
                      },
                      {
                        val: 'under_100m',
                        title: 'Có dưới 100 triệu hoặc mới gửi tiền',
                        desc: 'Cần bổ sung thêm hồ sơ công việc hoặc tài sản hỗ trợ.',
                      },
                      {
                        val: 'need_support',
                        title: 'Chưa có sổ tiết kiệm sẵn',
                        desc: 'Cần 5S tư vấn giải pháp chứng minh tài chính hợp lệ.',
                      },
                    ].map((item) => (
                      <button
                        key={item.val}
                        type="button"
                        onClick={() => setInputs({ ...inputs, savingsAmount: item.val as any })}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                          inputs.savingsAmount === item.val
                            ? 'border-[#161984] bg-blue-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-bold text-[#161984]">{item.title}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                        </div>
                        {inputs.savingsAmount === item.val && (
                          <div className="w-5 h-5 rounded-full bg-[#161984] text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Lịch sử du lịch & Hộ khẩu */}
              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-lg font-bold text-[#161984] mb-3">
                      4. Lịch sử xuất cảnh & Nơi cư trú
                    </h3>
                    <div className="space-y-2 mb-4">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Bạn đã từng đi du lịch những nước nào?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { val: 'none', label: 'Hộ chiếu trắng (chưa từng xuất cảnh)' },
                          { val: 'asean_only', label: 'Đã đi Đông Nam Á (Thái Lan, Sing...)' },
                          { val: 'developed_oecd', label: 'Đã đi Nhật, Hàn, Mỹ, Châu Âu, Úc' },
                          { val: 'korea_visited', label: 'Đã từng nhập cảnh Hàn Quốc' },
                        ].map((item) => (
                          <button
                            key={item.val}
                            type="button"
                            onClick={() => setInputs({ ...inputs, travelHistory: item.val as any })}
                            className={`p-3 rounded-xl border-2 text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                              inputs.travelHistory === item.val
                                ? 'border-[#161984] bg-blue-50/50 text-[#161984]'
                                : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                            }`}
                          >
                            <span>{item.label}</span>
                            {inputs.travelHistory === item.val && (
                              <div className="w-4 h-4 rounded-full bg-[#161984] text-white flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Hộ khẩu thường trú
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { val: 'big_city', label: 'Hà Nội / Đà Nẵng / TP.HCM' },
                          { val: 'standard_province', label: 'Tỉnh thành thông thường' },
                          { val: 'caution_province', label: 'Khu vực cần lưu ý' },
                        ].map((hk) => (
                          <button
                            key={hk.val}
                            type="button"
                            onClick={() => setInputs({ ...inputs, hometownRegion: hk.val as any })}
                            className={`py-2.5 px-3 rounded-xl border-2 text-xs font-bold transition-all text-center cursor-pointer ${
                              inputs.hometownRegion === hk.val
                                ? 'border-[#161984] bg-[#161984] text-white'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            {hk.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <input
                        type="checkbox"
                        checked={inputs.hasPriorRefusal}
                        onChange={(e) => setInputs({ ...inputs, hasPriorRefusal: e.target.checked })}
                        className="w-4 h-4 text-[#ED1B36] rounded focus:ring-0"
                      />
                      <span>Tôi từng bị từ chối hồ sơ nhập cảnh Hàn Quốc hoặc nước khác trước đây</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Controls between Steps */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#161984] py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Quay Lại
                  </button>
                ) : (
                  <span />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-2 bg-[#161984] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Tiếp Theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={calculateEvaluation}
                    className="inline-flex items-center gap-2 bg-[#ED1B36] hover:bg-[#D6142E] text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isEvaluating ? 'Đang Tính Toán...' : 'Xem Kết Quả Ngay'}</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Result View - Clean, Transparent, Qualitative (Section 6) */
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Header: ĐÁNH GIÁ SƠ BỘ HỒ SƠ (No percentages) */}
              <div className="bg-[#161984] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-blue-200 block mb-1">
                    KẾT QUẢ TỔNG HỢP TRỰC TUYẾN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    ĐÁNH GIÁ SƠ BỘ HỒ SƠ
                  </h3>
                  <p className="text-xs text-blue-100/90 mt-1.5 leading-relaxed max-w-xl">
                    {result.summary}
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold whitespace-nowrap border border-white/20 shrink-0">
                  Diện hồ sơ: {inputs.visaType}
                </div>
              </div>

              {/* 4 Structured Result Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* 1. Những giấy tờ khách hàng đã có */}
                <div className="p-4.5 rounded-xl border border-emerald-200 bg-emerald-50/60">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider text-[11px]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1. Những giấy tờ khách hàng đã có</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {result.existingDocs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Những giấy tờ cần bổ sung */}
                <div className="p-4.5 rounded-xl border border-amber-200 bg-amber-50/60">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider text-[11px]">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>2. Những giấy tờ cần bổ sung</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {result.missingDocs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-amber-600 font-bold shrink-0">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Những vấn đề cần lưu ý */}
                <div className="p-4.5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-[#161984] shrink-0" />
                    <span>3. Những vấn đề cần lưu ý</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {result.criticalNotes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-[#161984] font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Đề xuất hướng chuẩn bị hồ sơ */}
                <div className="p-4.5 rounded-xl border border-blue-200 bg-blue-50/60">
                  <div className="font-bold text-[#161984] flex items-center gap-1.5 mb-2.5 uppercase tracking-wider text-[11px]">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>4. Đề xuất hướng chuẩn bị hồ sơ</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {result.preparationPlan.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-[#161984] font-bold shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mandatory Disclaimer Box */}
              <div className="p-3.5 bg-slate-100 border border-slate-300/80 rounded-xl text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p>
                  <strong>Thông báo miễn trừ:</strong> Kết quả đánh giá chỉ mang tính chất tham khảo và hỗ trợ chuẩn bị hồ sơ. Không phải kết quả xét duyệt chính thức và không đảm bảo việc được cấp visa. Quyết định thuộc thẩm quyền của cơ quan xét duyệt Hàn Quốc.
                </p>
              </div>

              {/* Quick Contact Form to get full advice */}
              {!submittedReport ? (
                <form onSubmit={handleSendReport} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80">
                  <h4 className="text-sm font-bold text-[#161984] mb-1">
                    Đăng Ký Nhận Tư Vấn Hồ Sơ Chi Tiết Miễn Phí
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">
                    Để lại thông tin để chuyên viên Visa5S liên hệ giải đáp chi tiết danh mục giấy tờ của bạn.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      placeholder="Họ và tên của bạn"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="h-11 flex-1 bg-white border border-slate-300 rounded-xl px-3.5 text-xs text-slate-800 focus:outline-none focus:border-[#161984]"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại / Zalo"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      required
                      className="h-11 flex-1 bg-white border border-slate-300 rounded-xl px-3.5 text-xs text-slate-800 focus:outline-none focus:border-[#161984]"
                    />
                    <button
                      type="submit"
                      className="h-11 bg-[#ED1B36] hover:bg-[#D6142E] text-white text-xs font-bold px-5 rounded-xl shadow-xs transition-colors cursor-pointer shrink-0 flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Gửi Thông Tin</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                  <p className="text-xs font-bold text-emerald-900">
                    Đã gửi yêu cầu tư vấn thành công!
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    Chuyên viên sẽ liên hệ với bạn theo số {contactPhone} trong thời gian sớm nhất.
                  </p>
                </div>
              )}

              {/* Reset button */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#161984] font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Làm lại đánh giá khác
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

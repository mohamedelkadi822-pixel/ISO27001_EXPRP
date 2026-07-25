/**
 * ISO/IEC 27001:2022 Professional Lead Auditor Exam Bank - Complete Edition
 * Author: Mohamed Elkadi
 */

const questionBank = [
    // --- CLAUSE 4: CONTEXT OF THE ORGANIZATION ---
    {
        id: 1,
        ref: "ISO/IEC 27001:2022 - Clause 4.1",
        ar: {
            q: "شركة مدفوعات إلكترونية شهدت استقالة متتالية لثلاثة من كبار مهندسي الأمان خلال شهر واحد بسبب الضغط العالي. في اجتماع المراجعة، رفض مدير الأمن السيبراني إدراج هذا الأمر في تقرير سياق المنظمة (Context Report) بحجة أن الدوران الوظيفي مشكلة موارد بشرية لا علاقة لها بأمن المعلومات. كيف يجب أن يقيّم المراجع هذا القرار؟",
            opts: [
                "صحيح، لأن قضايا الموظفين والهيكل التنظيمي تقع حصرياً تحت مسؤولية قسم الموارد البشرية",
                "خطأ، لأن فقدان الكوادر الرئيسية قضية داخلية تؤثر مباشرة على قدرة الـ ISMS على تحقيق نتائجه المرجوة وفق البند 4.1",
                "صحيح، بشرط أن تقوم الموارد البشرية بتعيين بدلاء خلال فترة لا تتجاوز 90 يوماً",
                "خطأ، ولكن يكتفى بتقديم ملاحظة تحسين (OFI) غير ملزمة في تقرير المراجعة النهائي"
            ],
            ans: 1,
            exp: "يتطلب البند 4.1 تحديد القضايا الداخلية والخارجية التي تؤثر على قدرة الـ ISMS على تحقيق أهدافه، ونقص الكفاءات الهيكلية قضية داخلية جوهرية."
        },
        en: {
            q: "A Fintech company lost three senior security engineers in one month due to burnout. The CISO refused to log this turnover in the ISMS Context report, claiming HR issues do not belong in security management. How should an auditor evaluate this decision?",
            opts: [
                "Correct, as staff turnover and personnel issues belong exclusively to the HR department's scope",
                "Non-compliant, because losing key personnel is an internal issue affecting the ISMS ability to achieve intended outcomes under Clause 4.1",
                "Correct, provided HR hires replacements within a maximum timeframe of 90 days",
                "Incorrect, but should only be handled via an optional Opportunity for Improvement (OFI)"
            ],
            ans: 1,
            exp: "Clause 4.1 mandates determining internal and external issues relevant to the ISMS purpose; key personnel loss directly impairs system outcomes."
        }
    },
    {
        id: 2,
        ref: "ISO/IEC 27001:2022 - Clause 4.2",
        ar: {
            q: "مؤسسة صحية قامت بتطبيق نظام ISMS وراجعت جميع القوانين واللوائح الحكومية. ولكنها أهملت بنداً في عقد توريد مع شركة برمجيات خارجية ينص على ضرورة تشفير بيانات المرضى أثناء النقل بخوارزمية AES-256 حصراً، وتعتمد المنظمة خوارزمية أخرى أقل قوة. مدير الأمن قال: 'اللوائح الحكومية لم تحدد الخوارزمية، والعقود التجارية مجرد أمور تنظيمية'. ما هو التقييم الدقيق؟",
            opts: [
                "مطابقة، لأن اللوائح والقوانين الحكومية تتفوق قانونياً وتلغي الشروط التعاقدية الخاصة",
                "حالة عدم مطابقة للبند 4.2، لأن متطلبات الأطراف المهتمة تشمل التزامات تعاقدية يجب تحديدها والوفاء بها",
                "ملاحظة تحسين (OFI)، توصي بتوحيد الخوارزميات عند تجديد العقد في الدورة القادمة",
                "مطابقة، طالما أن البيانات مشفرة بأي خوارزمية متعارف عليها في القطاع الطبي"
            ],
            ans: 1,
            exp: "البند 4.2 (ملاحظة) يوضح صراحةً أن متطلبات الأطراف المهتمة تشتمل على المتطلبات القانونية والتنظيمية بالإضافة إلى الالتزامات التعاقدية."
        },
        en: {
            q: "A healthcare provider aligned its ISMS with state regulations but ignored a supplier contract clause mandating AES-256 transit encryption, using a weaker algorithm instead. The CISO argued that state laws don't specify the algorithm, making contracts secondary. What is the finding?",
            opts: [
                "Conformity, as state statutory requirements legally supersede private contractual clauses",
                "Nonconformity against Clause 4.2, because interested party requirements explicitly include contractual obligations that must be addressed",
                "Opportunity for Improvement (OFI), suggesting algorithm alignment upon contract renewal",
                "Conformity, provided data is encrypted using any industry-recognized standard algorithm"
            ],
            ans: 1,
            exp: "Clause 4.2 Note states that requirements of interested parties include legal, regulatory, and contractual obligations."
        }
    },
    {
        id: 3,
        ref: "ISO/IEC 27001:2022 - Clause 4.3",
        ar: {
            q: "بنك تجاري قرر إدخال خدمة التمويل السريع عبر تطبيق الموبايل، واستبعد سيرفرات معالجة معمل التطوير (DevOps) الخارجي من نطاق الـ ISMS بحجة أن المعمل يدار بواسطة طرف ثالث. المراجع وجد أن سيرفرات التمويل ترتبط بصفة مستمرة بأجهزة المعمل لنقل التحديثات. ما هو القرار المعياري؟",
            opts: [
                "قبول الاستبعاد، لأن الطرف الثالث يخضع للضوابط التشغيلية الواردة في الملحق Annex A 5.19",
                "تسجيل عدم مطابقة للبند 4.3، لأن تحديد النطاق يفرض مراعاة الواجهات والاعتماديات (Interfaces & Dependencies) بين أنشطة البنك والجهات الخارجية",
                "مطابقة كاملة، لأن للمؤسسة الحرية المطلقة في تحديد الحدود التي تناسبها دون إبداء أسباب",
                "طلب إصدار شهادة مستقلة للطرف الثالث وإغلاق التقرير"
            ],
            ans: 1,
            exp: "ينص البند 4.3 (c) على أنه عند تحديد النطاق يجب مراعاة الواجهات والاعتماديات بين الأنشطة التي تؤديها المنظمة وتلك التي تؤديها منظمات أخرى."
        },
        en: {
            q: "A bank launched a mobile lending app but excluded the third-party DevOps servers from its ISMS scope. The auditor observed continuous direct API connections between the app and DevOps for live updates. What is the correct audit finding?",
            opts: [
                "Accept exclusion, as the third party falls strictly under supplier management control A.5.19",
                "Nonconformity against Clause 4.3, because scoping must consider interfaces and dependencies between organizational activities and external parties",
                "Full conformity, as the organization has absolute authority to define boundaries without restriction",
                "Require the third party to obtain an independent ISO certificate and close the finding"
            ],
            ans: 1,
            exp: "Clause 4.3 (c) requires organizations to consider interfaces and dependencies between internal activities and those performed by other entities."
        }
    },
    {
        id: 4,
        ref: "ISO/IEC 27001:2022 - Clause 4.4",
        ar: {
            q: "شركة خدمات لوجستية وضعت وثائق ممتازة لنظام ISMS، لكن أثناء المراجعة الميدانية تبين أن العمليات الفعلية لتشغيل مراكز البيانات تتم بناءً على اجتهادات شفهية وتواصل عبر تطبيقات الدردشة دون اتباع التفاعلات الموثقة للعمليات. مدير التشغيل أفاد: 'النتائج ممتازة والأهم هو استقرار الخدمة'. ما تصنيف الخلل؟",
            opts: [
                "مطابقة، لأن المعيار يهتم بالنتائج المرجوة (Intended Outcomes) وليس بطريقة التواصل اليومية",
                "عدم مطابقة للبند 4.4 لعدم إنشاء وتطبيق وصيانة نظام ISMS والعمليات المحتاجة وتفاعلاتها وفقاً للمعيار",
                "ملاحظة تحسين (OFI) تحث الموظفين على استخدام البريد الإلكتروني بدلاً من تطبيقات الدردشة",
                "عدم مطابقة للبند 7.5.1 فقط لعدم طباعة الإجراءات"
            ],
            ans: 1,
            exp: "البند 4.4 ينص على وجوب 'إنشاء وتطبيق وصيانة وتحسين مستمر' لنظام الـ ISMS والعمليات اللازمة وتفاعلاتها، وليس مجرد كتابة الوثائق."
        },
        en: {
            q: "A logistics firm documented a flawless ISMS on paper. Field audits showed data center maintenance relies on informal instant chats among engineers rather than process interactions defined in ISMS files. Management claimed service uptime is 100%. Assessment?",
            opts: [
                "Conformity, as the standard prioritizes achieving intended outcomes over daily operational channels",
                "Nonconformity against Clause 4.4 for failing to establish, implement, and maintain the ISMS processes and their interactions",
                "Opportunity for Improvement (OFI) urging staff to replace instant chat apps with corporate email",
                "Nonconformity against Clause 7.5.1 only for failing to print out procedure manuals"
            ],
            ans: 1,
            exp: "Clause 4.4 mandates establishing, implementing, maintaining, and continually improving the ISMS, including processes needed and their interactions."
        }
    },

    // --- CLAUSE 5: LEADERSHIP ---
    {
        id: 5,
        ref: "ISO/IEC 27001:2022 - Clause 5.1",
        ar: {
            q: "المدير التنفيذي لشركة تداول قام بتفويض مدير تكنولوجيا المعلومات بالكامل للتوقيع على جميع سياسات ومخرجات نظام إدارة أمن المعلومات، ورفض حضور اجتماعات مراجعة الإدارة (Management Review) أو مراجعة الأهداف بحجة انشغاله بتوسع الشركة. كيف يتعامل المراجع مع هذا التفويض؟",
            opts: [
                "قبول التفويض، لأن المعيار يسمح بتعيين ممثل للإدارة (Management Representative) لقيادة الـ ISMS",
                "تسجيل عدم مطابقة للبند 5.1، لأن الإدارة العليا يجب أن تُظهر بنفسها القيادة والالتزام ولا يمكنها تفويض مسؤوليتها المباشرة بالكامل",
                "مطابقة، بشرط وجود قرار مجلس إدارة مكتوب يفوض مدير تكنولوجيا المعلومات",
                "ملاحظة تحسين (OFI) تطلب من المدير التنفيذي التوقيع على محاضر الاجتماعات لاحقاً"
            ],
            ans: 1,
            exp: "البند 5.1 يلقي التزام إظهار القيادة والالتزام مباشرة على الإدارة العليا (Top Management) لضمان توافق النظام مع التوجه الاستراتيجي."
        },
        en: {
            q: "The CEO of a trading firm delegated all ISMS sign-offs and Management Review obligations exclusively to the IT Director, skipping security reviews due to corporate expansion duties. How should the auditor handle this delegation?",
            opts: [
                "Accept delegation, as ISO standards allow appointing a Management Representative to run the ISMS",
                "Nonconformity against Clause 5.1, as Top Management must directly demonstrate leadership and commitment and cannot completely abdicate accountability",
                "Conformity, provided a formal board resolution explicitly granting full proxy exists",
                "Opportunity for Improvement (OFI) asking the CEO to retroactively countersign review meeting minutes"
            ],
            ans: 1,
            exp: "Clause 5.1 mandates that Top Management itself must demonstrate leadership and commitment regarding the ISMS."
        }
    },
    {
        id: 6,
        ref: "ISO/IEC 27001:2022 - Clause 5.2",
        ar: {
            q: "سياسة أمن المعلومات في شركة تجزئة صيغت ببراعة وتم اعتمادها من المدير التنفيذي. لكن أثناء المراجعة، تبين أنها محفوظة في مجلد آمن لا يستطيع الوصول إليه سوى مدراء الأقسام، ولم تنشر أو تتاح للموظفين أو المتعاقدين. ما هو التصنيف المعياري؟",
            opts: [
                "مطابقة، لحماية وثيقة السياسة من التعديل غير المصرح به وضمان سريتها",
                "عدم مطابقة للبند 5.2، لأن المعيار يفرض إتاحة السياسة كمعلومات موثقة ونشرها داخل المؤسسة وإتاحتها للأطراف المهتمة عند الاقتضاء",
                "ملاحظة تحسين (OFI)، تطلب إرسال ملخص السياسة عبر البريد الإلكتروني للموظفين الجدد",
                "مطابقة، طالما أن مدراء الأقسام يقومون بتوجيه مرؤوسيهم شفهياً"
            ],
            ans: 1,
            exp: "البند 5.2 ينص صراحة على أن سياسة أمن المعلومات يجب أن تكون متاحة كمعلومات موثقة، وتُبلغ داخل المنظمة، وتكون متاحة للأطراف المهتمة."
        },
        en: {
            q: "A retail firm's Information Security Policy was signed by the CEO. However, it was saved in a restricted folder accessible only to Department Heads and was never communicated to staff or contractors. Audit ruling?",
            opts: [
                "Conformity, to protect the policy document from unauthorized modifications and preserve confidentiality",
                "Nonconformity against Clause 5.2, because the policy must be communicated within the organization and available to relevant interested parties",
                "Opportunity for Improvement (OFI), recommending emailing a policy summary to new hires during onboarding",
                "Conformity, provided Department Heads verbally instruct their team members on policy expectations"
            ],
            ans: 1,
            exp: "Clause 5.2 explicitly requires the policy to be available as documented information, communicated within the organization, and available to interested parties."
        }
    },
    {
        id: 7,
        ref: "ISO/IEC 27001:2022 - Clause 5.3",
        ar: {
            q: "في شركة استشارات، تم إسناد مسؤولية الإبلاغ عن أداء نظام ISMS إلى الإدارة العليا لمسؤول أمن المعلومات (CISO)، لكن الوصف الوظيفي والهيكل لم يمنحه السلطة والصلاحية (Authority) اللازمة لإيقاف الأنظمة المخالفة أو استدعاء الموظفين للتحقيق. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن إسناد المسؤولية (Responsibility) يكفي لتلبية متطلبات المعيار دون الحاجة لمنح صلاحيات تشغيلية",
                "عدم مطابقة للبند 5.3، لأن الإدارة العليا يجب أن تضمن تحديد وإسناد وإبلاغ المسؤوليات والصلاحيات (Responsibilities & Authorities)",
                "ملاحظة تحسين (OFI)، تطلب تعديل الهيكل الوظيفي في المراجعة السنوية القادمة",
                "مطابقة، طالما أن المدير التنفيذي يتدخل شخصياً عند حدوث الاختراقات"
            ],
            ans: 1,
            exp: "البند 5.3 يتطلب إسناد ونقل المسؤوليات والصلاحيات (Authorities) معاً لضمان مطابقة النظام والإبلاغ عن الأداء."
        },
        en: {
            q: "In a consulting firm, the CISO was assigned the responsibility to report ISMS performance to Top Management, but was given no authority to halt non-compliant systems or enforce security audits. How is this assessed?",
            opts: [
                "Conformity, as assigning responsibility alone fulfills standard requirements without requiring operational powers",
                "Nonconformity against Clause 5.3, because Top Management must ensure both responsibilities AND authorities for relevant roles are assigned",
                "Opportunity for Improvement (OFI), suggesting HR updates job descriptions during the annual performance review",
                "Conformity, provided the CEO personally intervenes whenever a critical security breach occurs"
            ],
            ans: 1,
            exp: "Clause 5.3 mandates assigning and communicating both responsibilities AND authorities for roles relevant to information security."
        }
    },
    {
        id: 8,
        ref: "ISO/IEC 27001:2022 - Clause 5.3",
        ar: {
            q: "مدير البنية التحتية بالشركة يملك صلاحية تغيير إعدادات الجدار الناري والتصريح لنفسه بالتجاوز عند وجود أعطال، دون الحاجة للحصول على موافقة من فريق أمن المعلومات. الإدارة عللت ذلك بسرعة إنقاذ الأنظمة عند الهجمات. كيف يصنف المراجع الخارجي هذا الوضع؟",
            opts: [
                "مطابقة، لأن صلاحيات الطوارئ تمنح لمهندسي البنية التحتية لضمان استمرارية الأعمال",
                "حالة عدم مطابقة للبند 5.3، لعدم تحديد وتوزيع الصلاحيات والمسؤوليات بشكل يضمن التوافق ومنع التعارض والتجاوز الفردي",
                "ملاحظة تحسين (OFI)، تطلب إرسال إيميل تنبيهي لمدير الأمن بعد انتهاء التجاوز",
                "مطابقة، طالما أن جميع إجراءات التجاوز تسجل تلقائياً في الـ System Logs"
            ],
            ans: 1,
            exp: "البند 5.3 يفرض تحديد وتوزيع الصلاحيات والمسؤوليات لمنع تعارض المصالح والتجاوزات الفردية غير المنضبطة."
        },
        en: {
            q: "An Infrastructure Manager holds rights to modify firewall rules and self-approve emergency bypasses without CISO authorization, citing operational continuity. How is this audited?",
            opts: [
                "Conformity, as emergency override authority must rest with infrastructure leads for high availability",
                "Nonconformity against Clause 5.3, for failing to assign roles and authorities that ensure system conformity and prevent unchecked single-handed overrides",
                "Opportunity for Improvement (OFI), asking to send a post-event notification email to security",
                "Conformity, provided all override actions generate automated system log entries"
            ],
            ans: 1,
            exp: "Clause 5.3 dictates assigning authorities to ensure ISMS conformity and governance, preventing unmonitored self-authorization."
        }
    },
    {
        id: 9,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.1",
        ar: {
            q: "شركة تكنولوجيا مالية أعدت سجل المخاطر للأنظمة الحالية، لكنها أهملت تقييم المخاطر المترتبة على خطة التوسع المخططة بدخول سوق دولي جديد خلال 6 أشهر. مسؤول المخاطر أفاد بأن التقييم يقتصر فقط على الوضع الراهن للشركة. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن التخطيط لنظام الـ ISMS يركز حصرياً على الأصول والبنية التحتية القائمة فعلياً",
                "حالة عدم مطابقة للبند 6.1.1، لأن المنظمة يجب أن تراعي القضايا الخارجية والداخلية والتغيرات المستقبلية لتحديد المخاطر والفرص الواجب معالجتها",
                "ملاحظة تحسين (OFI)، تقترح إجراء ورشة عمل لتقييم مخاطر التوسع الدولي قبيل الإطلاق بشهر",
                "مطابقة، طالما أن السوق الجديد لم يكتمل تسجيله قانونياً بعد"
            ],
            ans: 1,
            exp: "البند 6.1.1 يتطلب النظر في القضايا الداخلية والخارجية والمتغيرات لتحديد المخاطر والفرص لضمان تحقيق الـ ISMS لنتائجه."
        },
        en: {
            q: "A fintech assessed current tech risks but excluded risks related to a planned international expansion in 6 months, claiming risks apply only to active live systems. Verdict?",
            opts: [
                "Conformity, as ISMS risk scope is strictly bounded by active operational assets",
                "Nonconformity against Clause 6.1.1, because planning must determine risks and opportunities arising from evolving context issues and strategic directions",
                "Opportunity for Improvement (OFI), suggesting a risk workshop one month prior to launch",
                "Conformity, provided the new market subsidiary is not yet legally incorporated"
            ],
            ans: 1,
            exp: "Clause 6.1.1 requires considering context factors and strategic changes when planning for the ISMS to address risks and opportunities."
        }
    },
    {
        id: 10,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "أثناء المراجعة، وجد المراجع أن تقييم مخاطر أمن المعلومات في قسم شبكات الاتصالات يعتمد على التقدير الشخصي للمهندسين (عالي/متوسط/منخفض) دون وجود معايير محددة لتقدير الاحتمالية والأثر، بينما يستخدم قسم البرمجيات مصفوفة رقمية مختلفة تماماً. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن المعيار يعطي الحرية الكاملة لكل قسم لاختيار الأسلوب الذي يراه مناسباً لطبيعة عمله",
                "حالة عدم مطابقة للبند 6.1.2 (b)، لأن عملية تقييم المخاطر يجب أن تضمن الحصول على نتائج متسقة وصالحة وقابلة للمقارنة (Consistent, valid, and comparable)",
                "ملاحظة تحسين (OFI)، التوصية بتوحيد الألوان المستخدمة في المصفوفات فقط",
                "مطابقة، طالما تم توثيق كلا الأسلوبين في ملفات الموارد البشرية"
            ],
            ans: 1,
            exp: "البند 6.1.2 (b) ينص بوضوح على أن عملية تقييم المخاطر المكررة يجب أن تنتج نتائج متسقة وصالحة وقابلة للمقارنة عبر المنظمة."
        },
        en: {
            q: "Network engineering assesses risks using ad-hoc gut feeling (High/Med/Low), while Software Dev uses a mathematical matrix. No unified criteria exist. What is the audit finding?",
            opts: [
                "Conformity, as ISO 27001 grants departments total autonomy to select custom assessment methodologies",
                "Nonconformity against Clause 6.1.2 (b), because the risk assessment process must ensure that repeated assessments produce consistent, valid, and comparable results",
                "Opportunity for Improvement (OFI), recommending matrix color alignment",
                "Conformity, provided both methodologies are documented on the intranet"
            ],
            ans: 1,
            exp: "Clause 6.1.2 (b) explicitly requires that repeated information security risk assessments produce consistent, valid, and comparable results."
        }
    },
    {
        id: 11,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.3",
        ar: {
            q: "وثيقة بيان الصلاحية (SoA) بشركة برمجيات استبعدت الضابط الخاص بالأمن الفيزيائي للمباني (Annex A 7.1)، وكتبت في خانة التبرير: 'تم الاستبعاد بناءً على قرار مدير الإدارة المالية لعدم توفر ميزانية'. كيف يقيم المراجع هذا التبرير؟",
            opts: [
                "قبول التبرير، لأن التكلفة المالية تعتبر سبباً مشروعاً لاستبعاد الضوابط غير المقترنة بهجمات رقمية",
                "حالة عدم مطابقة للبند 6.1.3 (d)، لأن استبعاد أي ضابط من الملحق A يتطلب تبريراً موضوعياً مستنداً إلى نتائج تقييم المخاطر والمتطلبات وليس العجز المالي",
                "ملاحظة تحسين (OFI)، تطلب إعادة فتح المناقشة في الميزانية القادمة",
                "مطابقة، طالما أن الاستبعاد مكتوب ومسجل صراحة في وثيقة الـ SoA"
            ],
            ans: 1,
            exp: "البند 6.1.3 (d) يفرض تقديم تبريرات منطقية وموضوعية (مبنية على تقييم المخاطر أو المتطلبات القانونية) لاستبعاد أي من ضوابط الملحق A."
        },
        en: {
            q: "A software firm excluded physical perimeter security (Annex A 7.1) from its SoA, listing the justification as 'Excluded by Finance due to budget limitations'. Auditor ruling?",
            opts: [
                "Accept justification, as financial constraints constitute a valid risk treatment exclusion rationale",
                "Nonconformity against Clause 6.1.3 (d), because excluding Annex A controls requires objective justifications rooted in risk assessment results and compliance requirements, not budget cuts",
                "Opportunity for Improvement (OFI) to re-evaluate physical security during the next fiscal budget cycle",
                "Conformity, as long as the exclusion is formally explicitly written in the SoA document"
            ],
            ans: 1,
            exp: "Clause 6.1.3 (d) mandates providing valid justifications for excluding Annex A controls, derived from risk assessments or legal/contractual requirements."
        }
    },
    {
        id: 12,
        ref: "ISO/IEC 27001:2022 - Clause 6.2",
        ar: {
            q: "شركة طيران وضعت هدفاً أمنياً: 'رفع مستوى الوعي الأمني لكافة الموظفين'. عند مطالبة المراجع بخطة تحقيق الهدف، لم تستطع الشركة تحديد المسؤول عن التنفيذ، الموعد النهائي للانجاز، أو كيفية تقييم النتائج. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن أهداف الوعي الأمني هي أهداف عامة ولا تتطلب خططاً تفصيلية",
                "حالة عدم مطابقة للبند 6.2، لأن التخطيط لتحقيق الأهداف يوجب تحديد: ماذا سيفعل، الموارد المطلوبة، المسؤول، الموعد النهائي، وكيفية تقييم النتائج",
                "ملاحظة تحسين (OFI) بتعيين مدرب خارجي لإعطاء المحاضرات",
                "مطابقة، طالما أن الهدف موثق ومحتفظ به كـ Documented Information"
            ],
            ans: 1,
            exp: "البند 6.2 ينص على أنه عند التخطيط لكيفية تحقيق أهداف أمن المعلومات، يجب تحديد المسؤول، الموارد، الجدول الزمني، وآلية تقييم النتائج."
        },
        en: {
            q: "An airline set an ISMS objective: 'Improve employee security awareness'. Audit revealed no assigned responsibilities, required resources, completion timelines, or evaluation methods. Finding?",
            opts: [
                "Conformity, as soft awareness objectives do not require technical operational project plans",
                "Nonconformity against Clause 6.2, because planning to achieve objectives requires defining what will be done, resources, responsibilities, timelines, and result evaluation methods",
                "Opportunity for Improvement (OFI) suggesting hiring external trainers",
                "Conformity, provided the objective text is properly retained as documented information"
            ],
            ans: 1,
            exp: "Clause 6.2 explicitly requires that when planning how to achieve security objectives, the org must determine what, resources, who, when, and how results will be evaluated."
        }
    },
    {
        id: 13,
        ref: "ISO/IEC 27001:2022 - Clause 6.3",
        ar: {
            q: "شركة بنكية قامت بدمج نظامين رئيسيين لمعالجة المعاملات المالية خلال عطلة نهاية الأسبوع. التغيير أدى لثغرة أمنية تسببت في توقف الخدمة. لم تكن هناك خطة مسبقة لإدارة التغيير في الـ ISMS أو مراجعة للعواقب غير المقصودة. مدير IT قال: 'التغييرات التشغيلية تحدث فوراً ولا تنتظر تخطيطاً'. ما التصنيف؟",
            opts: [
                "مطابقة، لأن سرعة التغيير التشغيلي تتفوق على التوثيق في القطاع المصرفي",
                "حالة عدم مطابقة للبند 6.3، لأن المنظمة عندما تحدد الحاجة لتغييرات في الـ ISMS، يجب أن تُنفذ التغييرات بطريقة مخططة مع مراجعة العواقب",
                "ملاحظة تحسين (OFI) بزيادة عدد طاقم الدعم الفني أثناء العطلات",
                "عدم مطابقة للبند 10.1 فقط"
            ],
            ans: 1,
            exp: "البند 6.3 يفرض تنفيذ التغييرات على نظام الـ ISMS بطريقة مخططة (Planned manner) ومراجعة الآثار والعواقب الناجمة عنها."
        },
        en: {
            q: "A bank merged two core transaction processing engines over a weekend without change planning or consequence review, causing an outage. IT argued operational shifts can't wait for paperwork. Verdict?",
            opts: [
                "Conformity, as operational agility overrides administrative planning in fast-paced banking",
                "Nonconformity against Clause 6.3, because changes to the ISMS shall be carried out in a planned manner considering potential consequences",
                "Opportunity for Improvement (OFI) to add weekend standby IT support staff",
                "Nonconformity against Clause 10.1 only"
            ],
            ans: 1,
            exp: "Clause 6.3 dictates that changes to the ISMS shall be carried out in a planned manner."
        }
    },
    {
        id: 14,
        ref: "ISO/IEC 27001:2022 - Clause 7.1",
        ar: {
            q: "طلب مسؤول الحماية السيبرانية توفير أجهزة مفاتيح تشفير هاردوير (HSM) لتأمين عمليات التوقيع الإلكتروني بناءً على تقييم المخاطر. الإدارة العليا رفضت الميزانية دون توفير حلول بديلة، مما ترك عمليات التوقيع عرضة للااختراق. على من تسجل عدم المطابقة؟",
            opts: [
                "على مسؤول الحماية السيبرانية لأنه لم يستعجل الشراء",
                "حالة عدم مطابقة على الإدارة العليا وفق البند 7.1 لعدم توفير الموارد اللازمة لتطبيق وصيانة نظام ISMS والضوابط المحددة بمعالجة المخاطر",
                "ملاحظة تحسين (OFI) للبحث عن برمجيات مجانية بديلة",
                "لا تسجل عدم مطابقة، لأن القرارات المالية سيادية للإدارة"
            ],
            ans: 1,
            exp: "البند 7.1 يوجب على المنظمة والإدارة العليا تحديد وتوفير الموارد اللازمة لتأسيس وتطبيق وصيانة وتحسين الـ ISMS وضوابطه."
        },
        en: {
            q: "CISO requested Hardware Security Modules (HSMs) to mitigate high risks in digital signatures. Top Management rejected the budget with no alternatives, leaving the flaw open. Where is the NC assigned?",
            opts: [
                "Against the CISO for failing to escalate the purchase request aggressively",
                "Nonconformity against Top Management under Clause 7.1 for failing to determine and provide resources needed for ISMS implementation and risk treatment controls",
                "Opportunity for Improvement (OFI) to investigate open-source software alternatives",
                "No NC, as capital expenditure decisions rest entirely with executive management"
            ],
            ans: 1,
            exp: "Clause 7.1 forces the organization to determine and provide resources needed for the ISMS establishment, implementation, maintenance, and continual improvement."
        }
    },
    {
        id: 15,
        ref: "ISO/IEC 27001:2022 - Clause 7.2",
        ar: {
            q: "استعانت شركة بمستشار أمني خارجي لإدارة جدران الحماية الرئيسية. المراجع طلب الأدلة الموثقة التي تثبت كفاءة هذا المستشار (مؤهلات، شهادات، تدريب). مدير الموارد البشرية أفاد بأن العقود الخارجية لا تخضع لشرط توثيق الكفاءة بالشركة. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن البند 7.2 يطبق حصراً على الموظفين الدائمين ببدل تعيين",
                "حالة عدم مطابقة للبند 7.2، لأن متطلبات الكفاءة والأدلة الموثقة تطبق على أي شخص يقوم بعمل تحت سيطرة المنظمة ويؤثر على أداء أمن المعلومات",
                "ملاحظة تحسين (OFI) بتضمين الشهادات في العقد القادم",
                "مطابقة، طالما أن السيرة الذاتية للمستشار موجودة على موقع LinkedIn"
            ],
            ans: 1,
            exp: "البند 7.2 يطبق على أي شخص (person(s)) يعمل تحت سيطرة المنظمة ويؤثر على أداء أمن المعلومات، سواء كان موظفاً دائماً أو مستشاراً تعاقدياً."
        },
        en: {
            q: "An external contractor manages core enterprise firewalls. The auditor asked for competency evidence (certs, credentials). HR stated external consultants are exempt from competency documentation rules. Finding?",
            opts: [
                "Conformity, as Clause 7.2 competency tracking applies strictly to permanent direct-hire employees",
                "Nonconformity against Clause 7.2, because competency rules apply to ALL persons doing work under organization control that affects security performance",
                "Opportunity for Improvement (OFI) to attach credentials in the next contract renewal",
                "Conformity, provided the contractor's LinkedIn profile is publicly accessible"
            ],
            ans: 1,
            exp: "Clause 7.2 dictates requirements for 'person(s) doing work under its control that affects its information security performance', including contractors."
        }
    },
    {
        id: 16,
        ref: "ISO/IEC 27001:2022 - Clause 7.3",
        ar: {
            q: "أثناء المراجعة، قام المراجع بسؤال موظف استقبال بالشركة عن دوره في مساهمة أمن المعلومات. الموظف أجاب بأنه لا يملك حساب كمبيوتر وبالتالي لا يقع عليه أي التزام أمني. المراجع وجد أن الزوار يدخلون عبر الاستقبال دون تسجيل أسماء أو إبراز هوية. ما هو الخلل؟",
            opts: [
                "مطابقة، لأن موظفي الاستقبال لا يتعاملون مع أنظمة إلكترونية",
                "حالة عدم مطابقة للبند 7.3، لأن جميع العاملين تحت سيطرة المنظمة يجب أن يكونوا على وعي بمساهمتهم في فاعلية الـ ISMS وآثار عدم التوافق",
                "ملاحظة تحسين (OFI) بتركيب بوابات إلكترونية عند المدخل",
                "مطابقة، طالما تم توقيع سياسة الأمن من المدراء فقط"
            ],
            ans: 1,
            exp: "البند 7.3 يشترط وعي جميع الأشخاص العاملين تحت سيطرة المنظمة بمساهمتهم في فاعلية أمن المعلومات، والوعي بالتدابير الفيزيائية والتشغيلية."
        },
        en: {
            q: "A receptionist told the auditor she has no security duties because she lacks a PC user account. Meanwhile, physical visitors enter unrecorded through her lobby. How is this finding logged?",
            opts: [
                "Conformity, as staff without active directory domain accounts fall outside ISMS scope",
                "Nonconformity against Clause 7.3, as all persons doing work under organizational control must be aware of their contribution to ISMS effectiveness and physical security",
                "Opportunity for Improvement (OFI) to install turnstile gates",
                "Conformity, provided security policies were signed off by department heads"
            ],
            ans: 1,
            exp: "Clause 7.3 forces awareness across ALL persons working under control regarding their contribution to ISMS effectiveness, including physical controls."
        }
    },
    {
        id: 17,
        ref: "ISO/IEC 27001:2022 - Clause 7.4",
        ar: {
            q: "تعتمد شركة على خطة اتصالات شفهية عند وقوع الأزمات الأمنية. أثناء مراجعة حادثة تسريب بيانات سابقة، وجد المراجع أن الموظفين قاموا بتقديم تصريحات متضاربة للصحافة والعملاء لعدم وجود آلية موثقة تحدد المسموح بحديثه (Who communicates) وطريقة التواصل (How). ما القرار؟",
            opts: [
                "مطابقة، لأن المعيار لا يشترط توثيق خطة الاتصالات في مستند مستقل",
                "حالة عدم مطابقة للبند 7.4، لأن المنظمة يجب أن تحدد الحاجة إلى الاتصالات الداخلية والخارجية ذات الصلة متضمنة (ماذا، متى، مع من، وكيف يتم الاتصال)",
                "ملاحظة تحسين (OFI) بتدريب الموظفين على التعامل مع الصحافة",
                "مطابقة، طالما تم احتواء التسريب لاحقاً"
            ],
            ans: 1,
            exp: "البند 7.4 يوجب تحديد آلية وقواعد الاتصالات الداخلية والخارجية ذات الصلة بالنظام (ماذا، متى، مع من، وكيف)."
        },
        en: {
            q: "During a breach, staff leaked conflicting statements to the press due to a lack of defined protocol on who can speak and how. CISO claimed verbal crisis comms are standard. Ruling?",
            opts: [
                "Conformity, as ISO 27001 does not mandate a standalone written communications procedure",
                "Nonconformity against Clause 7.4, for failing to systematically determine internal and external communications relevant to the ISMS (what, when, with whom, how)",
                "Opportunity for Improvement (OFI) to conduct PR media training for staff",
                "Conformity, provided the technical leak was eventually contained"
            ],
            ans: 1,
            exp: "Clause 7.4 explicitly forces determining the need for internal and external communications relevant to the ISMS, specifying what, when, with whom, and how to communicate."
        }
    },
    {
        id: 18,
        ref: "ISO/IEC 27001:2022 - Clause 7.5.1",
        ar: {
            q: "شركة كبرى تملك وثائق الـ ISMS الأساسية المطلوبة بالمعيار (السياسة، النطاق، تقييم المخاطر، SoA). ولكن عند فحص عمليات التشغيل المعقدة للسيرفرات، لم يجد المراجع أي إجراءات تشغيلية موثقة (Documented operating procedures)، وادعى المدير أن كفاءة المهندسين تغني عن التوثيق. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن المعيار يكتفي بالوثائق الإلزامية المذكورة صراحة في بنوده",
                "حالة عدم مطابقة للبند 7.5.1 (b)، لأن الـ ISMS يجب أن يتضمن المعلومات الموثقة التي تحددها المنظمة كضرورية لفاعلية النظام والعمليات",
                "ملاحظة تحسين (OFI) بكتابة إرشادات مختصرة على ملصقات",
                "مطابقة، طالما أن المهندسين يمتلكون شهادات خبرة دولية"
            ],
            ans: 1,
            exp: "البند 7.5.1 (b) ينص على أن المعلومات الموثقة للـ ISMS تشتمل على تلك التي تحددها المنظمة كضرورية لضمان فاعلية نظام إدارة أمن المعلومات."
        },
        en: {
            q: "A firm holds mandatory ISO docs (Policy, Scope, Risk Log, SoA) but has zero documented operating procedures for complex server clusters, citing expert staff. Assessment?",
            opts: [
                "Conformity, as the standard requires strictly the explicitly named mandatory clause documents",
                "Nonconformity against Clause 7.5.1 (b), because the ISMS must include documented information determined by the organization as necessary for ISMS effectiveness",
                "Opportunity for Improvement (OFI) to stick sticky-note instructions on server racks",
                "Conformity, provided engineers hold valid vendor technical certifications"
            ],
            ans: 1,
            exp: "Clause 7.5.1 (b) dictates that the ISMS shall include documented information determined by the organization as being necessary for the effectiveness of the ISMS."
        }
    },
    {
        id: 19,
        ref: "ISO/IEC 27001:2022 - Clause 7.5.2",
        ar: {
            q: "وجدت المراجعة أن السياسات الأمنية يتم التعديل عليها مباشرة من أي مهندس في قسم الأمن دون وجود مرحلة مراجعة واعتماد مناسبة (Review and Approval) للملاءمة والكفاية قبل النشر. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما أن المهندسين يمتلكون صلاحيات أدمن على الخادم",
                "حالة عدم مطابقة للبند 7.5.2 (c)، لأن إنشاء وتحديث المعلومات الموثقة يتطلب ضمان المراجعة والاعتماد المناسبين للملاءمة والكفاية",
                "ملاحظة تحسين (OFI) باستخدام برامج تنسيق النصوص الحديثة",
                "مطابقة، طالما يتم حفظ النسخة القديمة في الأرشيف"
            ],
            ans: 1,
            exp: "البند 7.5.2 (c) ينص بوضوح على أنه عند إنشاء وتحديث المعلومات الموثقة يجب ضمان المراجعة والاعتماد للملاءمة والكفاية (Review and approval for suitability and adequacy)."
        },
        en: {
            q: "Security engineers edit live policy documents directly without secondary review or formal approval for suitability prior to publication. What is the finding?",
            opts: [
                "Conformity, provided the editing engineers possess administrative access to the repository",
                "Nonconformity against Clause 7.5.2 (c), because creating and updating documented information requires review and approval for suitability and adequacy",
                "Opportunity for Improvement (OFI) to adopt markdown formatting tools",
                "Conformity, provided older versions are retained in backup archives"
            ],
            ans: 1,
            exp: "Clause 7.5.2 (c) mandates that when creating and updating documented information, the organization shall ensure appropriate review and approval for suitability and adequacy."
        }
    },
    {
        id: 20,
        ref: "ISO/IEC 27001:2022 - Clause 7.5.3",
        ar: {
            q: "شركة تحتفظ بملفات وسجلات المراجعات الداخلية وتقارير المخاطر على محرك أقراص مشترك مفتوح للجميع دون أي صلاحيات حماية أو ضبط للوصول (Access control). السجلات تعرضت للتعديل والحذف العشوائي. ما هو التصنيف؟",
            opts: [
                "مطابقة، لأن الشفافية بين الموظفين تدعم بيئة العمل",
                "حالة عدم مطابقة للبند 7.5.3، لأن المعلومات الموثقة المطلوبة بالنظام يجب ضبطها لضمان حمايتها بشكل كافٍ من فقدان السرية أو الاستخدام غير الملائم أو فقدان السلامة",
                "ملاحظة تحسين (OFI) بعمل نسخة احتياطية أسبوعية على فلاشة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 7.5.3 ينص صراحة على أن المعلومات الموثقة يجب ضبطها لضمان حمايتها بشكل كافٍ (من فقدان السرية، الاستخدام غير الملائم، أو فقدان السلامة)."
        },
        en: {
            q: "Internal audit records and risk logs are stored on an unrestricted shared drive with zero write-protection, leading to accidental deletion and edits. Finding?",
            opts: [
                "Conformity, as open internal transparency fosters strong security culture",
                "Nonconformity against Clause 7.5.3, because documented information shall be controlled to ensure it is adequately protected from loss of confidentiality, improper use, or loss of integrity",
                "Opportunity for Improvement (OFI) to manually back up files to a flash drive weekly",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 7.5.3 explicitly demands controlling documented information to ensure adequate protection against loss of confidentiality, improper use, or loss of integrity."
        }
    },
    {
        id: 21,
        ref: "ISO/IEC 27001:2022 - Clause 8.1",
        ar: {
            q: "شركة لتطوير التطبيقات قامت بإجراء تعديل جوهري على خطة تشغيل السيرفرات دون وضع معايير للعمليات (Criteria for the processes) ودون مراجعة عواقب التغيرات غير المقصودة لمواجهة الآثار السلبية. التعديل أدى لتوقف نظام الحماية. ما هو قرار المراجع؟",
            opts: [
                "مطابقة، لأن المشاكل التقنية أمر متوقع أثناء التعديلات التشغيلية",
                "حالة عدم مطابقة للبند 8.1، لأن المنظمة يجب أن تخطط وتنفذ وتضبط العمليات اللازمة من خلال وضع معايير للعمليات وضبط التغييرات المخططة ومراجعة عواقب التغييرات غير المقصودة",
                "ملاحظة تحسين (OFI) بإجراء التعديلات ليلاً فقط",
                "مطابقة، طالما أن الفريق التقني قام بتصليح العطل بعد 4 ساعات"
            ],
            ans: 1,
            exp: "البند 8.1 يفرض وضع معايير للعمليات وضبط التغييرات المخططة ومراجعة عواقب التغييرات غير المقصودة واتخاذ الإجراءات للحد من الآثار السلبية."
        },
        en: {
            q: "An app developer changed live server operating parameters without process criteria or reviewing unintended consequences, knocking down security filters. Assessment?",
            opts: [
                "Conformity, as technical glitches are expected during live operational updates",
                "Nonconformity against Clause 8.1, because the organization shall control processes by establishing criteria and reviewing consequences of unintended changes to mitigate adverse effects",
                "Opportunity for Improvement (OFI) to schedule system updates exclusively at night",
                "Conformity, provided engineers restored normal service within 4 hours"
            ],
            ans: 1,
            exp: "Clause 8.1 requires establishing criteria for processes, controlling planned changes, and reviewing consequences of unintended changes to mitigate adverse effects."
        }
    },
    {
        id: 22,
        ref: "ISO/IEC 27001:2022 - Clause 8.2",
        ar: {
            q: "أثناء المراجعة، قدمت الشركة تقرير تقييم المخاطر المنجز قبل عامين. عندما سأل المراجع عن تقييم المخاطر الدوري المخطط له لهذا العام وفقاً لمعايير الشركة، أفاد المسؤول بـ: 'لم نجد وقتاً لتنفيذه هذا العام بسبب ضغط العمل'. ما هو التصنيف؟",
            opts: [
                "مطابقة، طالما أن تقرير تقييم المخاطر السابق ما زال يحوي معلومات قيمة",
                "حالة عدم مطابقة للبند 8.2، لأن المنظمة يجب أن تنفذ تقييمات مخاطر أمن المعلومات في فترات زمنية مخططة (Planned intervals)",
                "ملاحظة تحسين (OFI) بتمديد صلاحية تقرير المخاطر لسنة إضافية",
                "مطابقة، طالما لم تقع أي حوادث أمنية كبيرة خلال العامين"
            ],
            ans: 1,
            exp: "البند 8.2 يفرض تنفيذ تقييمات مخاطر أمن المعلومات في فترات زمنية مخططة (At planned intervals) دون تأخير أو إهمال."
        },
        en: {
            q: "A company produced a 2-year-old risk assessment report. When asked for this year's planned risk review, CISO cited lack of time due to heavy workload. Finding?",
            opts: [
                "Conformity, as long as the previous risk assessment document contains useful baseline data",
                "Nonconformity against Clause 8.2, because the organization shall perform information security risk assessments at planned intervals",
                "Opportunity for Improvement (OFI) to formally extend the validity of old risk logs",
                "Conformity, provided no major security breaches occurred over the last 2 years"
            ],
            ans: 1,
            exp: "Clause 8.2 explicitly mandates that information security risk assessments shall be performed at planned intervals."
        }
    },
    {
        id: 23,
        ref: "ISO/IEC 27001:2022 - Clause 8.3",
        ar: {
            q: "أظهرت وثائق معالجة المخاطر اختيار تركيب نظام حماية تسريب البيانات (DLP). المراجع طلب الأدلة الموثقة التي تثبت تنفيذ خطة المعالجة ونتائجها، ولكن الشركة لم تستطع تقديم أي أدلة أو سجلات تثبت البدء في التنفيذ. ما هو الخلل؟",
            opts: [
                "مطابقة، طالما أن خطة المعالجة مكتوبة ومقرة من الإدارة",
                "حالة عدم مطابقة للبند 8.3، لأن المنظمة يجب أن تطبق خطة معالجة المخاطر وتحتفظ بمعلومات موثقة لنتائج معالجة مخاطر أمن المعلومات",
                "ملاحظة تحسين (OFI) بالبدء في البحث عن موردين لنظام الـ DLP",
                "مطابقة، لأن تطبيق الضوابط عملية مستمرة لا تنتهي"
            ],
            ans: 1,
            exp: "البند 8.3 ينص بوضوح على وجوب تنفيذ خطة معالجة مخاطر أمن المعلومات، والاحتفاظ بمعلومات موثقة عن نتائج المعالجة."
        },
        en: {
            q: "Risk treatment logs selected deploying DLP software. Auditor asked for documented proof of implementation and results, but the firm presented zero evidence of execution. Ruling?",
            opts: [
                "Conformity, as having a signed paper treatment plan satisfies compliance",
                "Nonconformity against Clause 8.3, because the organization shall implement the risk treatment plan and retain documented information of treatment results",
                "Opportunity for Improvement (OFI) to start sourcing DLP software vendors",
                "Conformity, as control implementation represents an ongoing long-term effort"
            ],
            ans: 1,
            exp: "Clause 8.3 mandates that the organization shall implement the information security risk treatment plan and retain documented information of results."
        }
    },
    {
        id: 24,
        ref: "ISO/IEC 27001:2022 - Clause 9.1",
        ar: {
            q: "شركة أعدت خططة لمراقبة وقياس فاعلية ضوابط الأمن، لكنها لم تحدد الطرق (Methods) المستخدمة للمراقبة والقياس لضمان نتائج صالحة وقابلة للتكرار، كما لم تحدد من يقوم بالتحليل ومتى. ما هو التقييم؟",
            opts: [
                "مطابقة، لأن المراقبة اليومية الضمنية من الموظفين تكفي",
                "حالة عدم مطابقة للبند 9.1، لأن المنظمة يجب أن تحدد ما يلزم مراقبته، وطرق المراقبة والقياس والتحليل، ومتى تُنفذ ومن يقوم بها",
                "ملاحظة تحسين (OFI) لشراء شاشة عرض مركزية للمراقبة",
                "مطابقة، طالما أن السيرفرات تعمل دون توقف"
            ],
            ans: 1,
            exp: "البند 9.1 ينص على وجوب تحديد ما يجب مراقبته وقياسه، وطرق المراقبة والقياس والتحليل والتقييم لضمان نتائج صالحة، وتحديد المسؤولين والمواعيد."
        },
        en: {
            q: "A firm planned security monitoring but failed to define monitoring methods, measurement timing, responsible roles, or evaluation criteria. What is the finding?",
            opts: [
                "Conformity, as implicit informal daily system oversight by IT staff is sufficient",
                "Nonconformity against Clause 9.1, because the organization must determine what to monitor, methods for monitoring/measurement, timing, and responsible roles",
                "Opportunity for Improvement (OFI) to procure a SOC wall dashboard monitor",
                "Conformity, provided servers maintain high uptime numbers"
            ],
            ans: 1,
            exp: "Clause 9.1 mandates specifying what needs to be monitored, methods used, when monitoring occurs, who analyzes results, and retaining evidence."
        }
    },
    {
        id: 25,
        ref: "ISO/IEC 27001:2022 - Clause 9.2.1",
        ar: {
            q: "شركة لم تقم بإجراء أي مراجعة داخلية (Internal Audit) لنظام الـ ISMS منذ عامين. مدير الجودة ادعى أن مراجعات شهادات الـ ISO الخارجية المسندة للشركة تعوض وتغني عن المراجعة الداخلية. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن المراجعة الخارجية من جهة الشهادات (Certification Body) أشمل وأعمق من المراجعة الداخلية",
                "حالة عدم مطابقة للبند 9.2.1، لأن المنظمة يجب أن تجري مراجعات داخلية في فترات زمنية مخططة لتقديم معلومات عما إذا كان النظام يطابق المتطلبات ويطبق بفاعلية",
                "ملاحظة تحسين (OFI) بإجراء مراجعة داخلية مبسطة قبل التجديد القادم",
                "مطابقة، طالما أن الشهادة الخارجية ما زالت سارية"
            ],
            ans: 1,
            exp: "البند 9.2.1 يفرض على المنظمة إجراء مراجعات داخلية (Internal audits) في فترات زمنية مخططة، ولا يمكن الاستعاضة عنها بالمراجعات الخارجية."
        },
        en: {
            q: "A company skipped internal audits for 2 years, claiming external certification surveillance visits replace the need for internal audits. How is this audited?",
            opts: [
                "Conformity, as external certification body audits provide higher rigor than internal audits",
                "Nonconformity against Clause 9.2.1, because the organization MUST conduct internal audits at planned intervals to determine conformity and effective implementation",
                "Opportunity for Improvement (OFI) to run a brief internal review prior to recertification",
                "Conformity, provided the ISO certificate remains active"
            ],
            ans: 1,
            exp: "Clause 9.2.1 explicitly states: 'The organization shall conduct internal audits at planned intervals to provide information on whether the ISMS conforms...'"
        }
    },
    {
        id: 26,
        ref: "ISO/IEC 27001:2022 - Clause 9.2.2",
        ar: {
            q: "شركة أعدت برنامج مراجعة داخلية ينص على مراجعة كل الأقسام مرة واحدة كل سنة بأهداف ثابتة ومكررة منذ 4 سنوات دون تغيير. المراجع الخارجي وجد أن البرنامج لم يراعي النتائج السابقة للمراجعات أو مدى أهمية وحرج العمليات المختلفة. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما أن المراجعة تتم بانتظام وتغطي جميع الأقسام سنوياً",
                "حالة عدم مطابقة للبند 9.2.2، لأن إنشاء برنامج المراجعة يوجب أخذ أهمية العمليات المعنية ونتائج المراجعات السابقة في الاعتبار",
                "ملاحظة تحسين (OFI) لزيادة عدد المراجعين الداخليين فقط",
                "مطابقة، طالما أن التقرير النهائي يُرفع للمدير التنفيذي"
            ],
            ans: 1,
            exp: "البند 9.2.2 ينص بوضوح على أنه عند إنشاء برنامج المراجعة الداخلية يجب مراعاة أهمية العمليات المعنية ونتائج المراجعات السابقة."
        },
        en: {
            q: "An internal audit programme remained unchanged for 4 years, auditing every department once a year with fixed goals, ignoring process criticality and previous audit findings. What is the finding?",
            opts: [
                "Conformity, as long as audits occur regularly and cover all departments annually",
                "Nonconformity against Clause 9.2.2, because establishing audit programmes requires considering the importance of processes concerned and results of previous audits",
                "Opportunity for Improvement (OFI) to recruit more internal auditors",
                "Conformity, provided final reports are submitted to the CEO"
            ],
            ans: 1,
            exp: "Clause 9.2.2 mandates that when establishing internal audit programmes, the organization shall consider the importance of processes concerned and results of previous audits."
        }
    },
    {
        id: 27,
        ref: "ISO/IEC 27001:2022 - Clause 9.3.1 & 9.3.2",
        ar: {
            q: "عقدت مؤسسة اجتماع مراجعة الإدارة (Management Review) واكتفت الأجندة بـ (نتائج المراجعة الداخلية السابقة، حالة الإجراءات التصحيحية، وتنفيذ القرارات). المراجع وجد أن الاجتماع أهمل التغيرات في القضايا الخارجية/الداخلية، نتائج تقييم المخاطر، وتغذية الأطراف المهتمة. كيف يصنف المراجع هذا الاجتماع؟",
            opts: [
                "مطابقة، لأن المعيار يعطي الإدارة العليا حرية اختيار الموضوعات التي تراها هامة فقط",
                "حالة عدم مطابقة للبند 9.3.2، لعدم تضمين جميع المدخلات الإلزامية التي يفرضها المعيار لمراجعة الإدارة",
                "ملاحظة تحسين (OFI) بتمديد زمن الاجتماع لساعة إضافية",
                "مطابقة، بشرط وجود توقيع المدير التنفيذي على محضر الاجتماع"
            ],
            ans: 1,
            exp: "البند 9.3.2 يحدد قائمة مدخلات إلزامية يجب أن تتضمنها مراجعة الإدارة مثل التغيرات في القضايا، نتائج تقييم المخاطر، وتغذية الأطراف المهتمة."
        },
        en: {
            q: "Management Review minutes covered only previous audit results, corrective action status, and prior decisions, omitting changes in context, risk assessment results, and interested party feedback. Finding?",
            opts: [
                "Conformity, as Top Management has full discretion to select agenda items relevant to them",
                "Nonconformity against Clause 9.3.2, for failing to include all mandatory required inputs in the management review process",
                "Opportunity for Improvement (OFI) to extend the meeting duration",
                "Conformity, provided the CEO signed the meeting minutes"
            ],
            ans: 1,
            exp: "Clause 9.3.2 explicitly details mandatory inputs that management reviews must evaluate, including context changes, risk assessment results, and feedback."
        }
    },
    {
        id: 28,
        ref: "ISO/IEC 27001:2022 - Clause 9.3.3",
        ar: {
            q: "محضر اجتماع مراجعة الإدارة أظهر مناقشات غنية لجميع المدخلات، ولكنه لم يتضمن أي قرارات أو مخرجات تعكس فرص التحسين المستمر أو الحاجة لإجراء تغييرات على الـ ISMS أو توفير الموارد. مسؤل الجودة قال: 'المناقشة الشفهية كانت كافية'. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن أهم ما في مراجعة الإدارة هو مراجعة المدخلات وليس المخرجات",
                "حالة عدم مطابقة للبند 9.3.3، لأن مخرجات مراجعة الإدارة يجب أن تتضمن قرارات متعلقة بفرص التحسين المستمر وأي حاجة للتغيير في الـ ISMS",
                "ملاحظة تحسين (OFI) لتسجيل الصوت في الاجتماعات القادمة",
                "مطابقة، طالما تم الاحتفاظ بمستندات المدخلات"
            ],
            ans: 1,
            exp: "البند 9.3.3 ينص على أن نتائج ومخرجات مراجعة الإدارة يجب أن تشمل قرارات متعلقة بفرص التحسين المستمر وأي احتياجات للتغيير في النظام."
        },
        en: {
            q: "Management review minutes showed thorough input discussions but listed zero decisions or outputs regarding continual improvement opportunities or system changes. Quality Lead said verbal talks were enough. Verdict?",
            opts: [
                "Conformity, as reviewing inputs is the core objective of executive management reviews",
                "Nonconformity against Clause 9.3.3, because management review results shall include decisions related to continual improvement opportunities and any needs for changes to the ISMS",
                "Opportunity for Improvement (OFI) to audio-record future review meetings",
                "Conformity, provided input documents were properly archived"
            ],
            ans: 1,
            exp: "Clause 9.3.3 mandates that results of management review shall include decisions related to continual improvement and any needs for changes to the ISMS."
        }
    },
    {
        id: 29,
        ref: "ISO/IEC 27001:2022 - Clause 10.1",
        ar: {
            q: "شركة تحصل على شهادة ISO 27001 منذ 5 سنوات. المراجع وجد أن جميع مؤشرات الأداء وسياسات وضوابط الأمن لم تتغير أو تتطور مطلقاً طوال هذه السنوات رغم تغير التهديدات والبيئة التقنية. الإدارة أفادت: 'نحن مطبقون للمعيار ولا نحتاج لتغيير شيء'. كيف يقيّم المراجع الموقف؟",
            opts: [
                "مطابقة، لأن استقرار النظام وعدم وجود حالات عدم مطابقة أثبت نجاح المنظمة",
                "حالة عدم مطابقة للبند 10.1، لأن المنظمة يجب أن تحسن باستمرار ملاءمة وكفاية وفاعلية نظام إدارة أمن المعلومات",
                "ملاحظة تحسين (OFI) بإضافة تقنيات ذكاء اصطناعي جديدة",
                "مطابقة، طالما أن الشهادة تُجدد سنوياً بدون مشاكل"
            ],
            ans: 1,
            exp: "البند 10.1 يفرض صراحة أن المنظمة يجب أن تحسن باستمرار (Continually improve) ملاءمة وكفاية وفاعلية نظام الـ ISMS."
        },
        en: {
            q: "A certified firm maintained identical controls and metrics for 5 years despite evolving threats, claiming system stability proves perfection. How should the auditor classify this?",
            opts: [
                "Conformity, as system stability and lack of recurring breaches confirm system maturity",
                "Nonconformity against Clause 10.1, because the organization shall continually improve the suitability, adequacy, and effectiveness of the ISMS",
                "Opportunity for Improvement (OFI) to adopt new AI security tools",
                "Conformity, as long as annual recertification visits pass successfully"
            ],
            ans: 1,
            exp: "Clause 10.1 explicitly requires that the organization shall continually improve the suitability, adequacy, and effectiveness of the ISMS."
        }
    },
    {
        id: 30,
        ref: "ISO/IEC 27001:2022 - Clause 10.2",
        ar: {
            q: "عند وقوع خرق أمني، قامت الشركة بمعالجة العرض الظاهري (Correction) فوراً عبر إعادة تشغيل الخادم المخترق، ولكنها لم تقم بتقييم الحاجة لاتخاذ إجراءات لإزالة أسباب عدم المطابقة حتى لا تتكرر، كما لم تحتفظ ببيانات موثقة عن طبيعة الخلل والإجراء المأخوذ. ما التصنيف؟",
            opts: [
                "مطابقة، طالما أن السيرفر عاد للعمل وتم إصلاح الخدمة بسرعة",
                "حالة عدم مطابقة للبند 10.2، لعدم تقييم الحاجة لإجراءات تصحيحية لإزالة أسباب الخلل لمنع تكراره ولعدم الاحتفاظ بأدلة موثقة على النتائج",
                "ملاحظة تحسين (OFI) بزيادة قدرة السيرفرات الاستيعابية",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 10.2 يتطلب عند حدوث عدم مطابقة التفاعل معها، وتقييم الحاجة لإجراء لإزالة الأسباب حتى لا تتكرر، والاحتفاظ بمعلومات موثقة كدليل."
        },
        en: {
            q: "Following a breach, a firm rebooted the compromised server to restore service, but performed no root-cause evaluation to prevent recurrence and logged no records. Ruling?",
            opts: [
                "Conformity, provided the server was quickly restored and service outage was minimized",
                "Nonconformity against Clause 10.2, for failing to evaluate the need for action to eliminate causes of nonconformity to prevent recurrence and retaining documented evidence",
                "Opportunity for Improvement (OFI) to upgrade server RAM capacity",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 10.2 requires reacting to nonconformities, evaluating the need for action to eliminate causes so it does not recur, and retaining evidence."
        }
    },
    {
        id: 31,
        ref: "ISO/IEC 27001:2022 - Annex A 5.5 & 5.6",
        ar: {
            q: "شركة تعرضت لهجوم فدية (Ransomware) وتوقفت أنظمتها. عند طلب المراجع لسجلات الاتصال بالجهات السلطوية المختصة (Authorities) أو مجموعات الاهتمام المتخصصة (Special interest groups)، تبين أن الشركة لا تملك أي اتصالات أو قنوات معرفة بهذه الجهات. ما الخلل؟",
            opts: [
                "مطابقة، لأن التواصل مع السلطات والمجموعات التخصصية اختياري ويرجع لرغبة المنظمة",
                "حالة عدم مطابقة للضابطين Annex A 5.5 و 5.6، لأن المنظمة يجب أن تنشئ وتحافظ على اتصالات مع السلطات ذات الصلة ومجموعات الاهتمام التخصصية",
                "ملاحظة تحسين (OFI) بإنشاء حساب على منصة X لمتابعة الأخبار",
                "مطابقة، طالما أن الفريق التقني يحاول فك التشفير بمفرده"
            ],
            ans: 1,
            exp: "الضوابط Annex A 5.5 و 5.6 تفرض إنشاء والحفاظ على اتصالات مع السلطات ذات الصلة ومع مجموعات الاهتمام التخصصية أو المنتديات الأمنية."
        },
        en: {
            q: "A firm hit by ransomware had zero established contact channels with law enforcement authorities or specialist security forums. CISO claimed external contacts are optional. Assessment?",
            opts: [
                "Conformity, as contacting authorities or external groups lies entirely within corporate choice",
                "Nonconformity against Controls Annex A 5.5 and 5.6, because the organization shall establish and maintain contact with relevant authorities and special interest groups",
                "Opportunity for Improvement (OFI) to follow cybersecurity news on social media",
                "Conformity, provided internal engineers attempt decryption independently"
            ],
            ans: 1,
            exp: "Controls A.5.5 and A.5.6 mandate establishing and maintaining contact with relevant authorities and special interest groups or professional associations."
        }
    },
    {
        id: 32,
        ref: "ISO/IEC 27001:2022 - Annex A 5.8",
        ar: {
            q: "شركة بدأت مشروعاً ضخماً لتطوير نظام المبيعات. المراجع وجد أن وثائق إدارة المشروع (Project Management) تخلو تماماً من تحديد متطلبات أمن المعلومات أو تقييم المخاطر الأمنية الخاصة بالمشروع في أي مرحلة. مدير المشاريع قال: 'الأمن يتم تقييمه بعد الانتهاء من المشروع'. ما القرار؟",
            opts: [
                "مطابقة، لأن اختبارات الأمان تجرى دائماً في مرحلة التسليم النهائي للمشروع",
                "حالة عدم مطابقة للضابط Annex A 5.8، لأن أمن المعلومات يجب أن يدمج في إدارة المشاريع (Integrated into project management) بغض النظر عن نوع المشروع",
                "ملاحظة تحسين (OFI) بإجراء فحص أمني قبل الإطلاق بأسبوع",
                "مطابقة، طالما أن فريق المشروع يتبع منهجية Agile"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.8 ينص بوضوح على وجوب دمج أمن المعلومات في إدارة المشاريع (Information security shall be integrated into project management)."
        },
        en: {
            q: "A major software project plan omitted security requirements and risk evaluations across all project phases. Project Manager stated security testing happens post-delivery. Finding?",
            opts: [
                "Conformity, as vulnerability penetration testing naturally occurs during final acceptance delivery",
                "Nonconformity against Control Annex A 5.8, because information security shall be integrated into project management throughout project lifecycles",
                "Opportunity for Improvement (OFI) to schedule a scan one week prior to launch",
                "Conformity, provided the project team utilizes Agile development frameworks"
            ],
            ans: 1,
            exp: "Control A.5.8 explicitly dictates: 'Information security shall be integrated into project management.'"
        }
    },
    {
        id: 33,
        ref: "ISO/IEC 27001:2022 - Annex A 5.11",
        ar: {
            q: "عند إنهاء خدمة أحد كبار الاستشاريين، تبين أنه ما زال يحتفظ بأجهزة لابتوب ومفاتيح تشفير وبرمجيات خاصة بالشركة بعد مرور شهرين من استقالته. الشركة لم تملك عملية موثقة أو قائمة تحقق لإعادة الأصول (Return of assets). ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما أن الاستشاري لم يسرب البيانات المخزنة على الجهاز",
                "حالة عدم مطابقة للضابط Annex A 5.11، لأن الموظفين والأطراف المهتمة يجب أن يعيدوا جميع أصول المنظمة الموجودة بحوزتهم عند تغيير أو إنهاء توظيفهم أو عقودهم",
                "ملاحظة تحسين (OFI) بالاتصال بالاستشاري هاتفياً لإرجاع الجهاز",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.11 يفرض إعادة جميع أصول المنظمة بحوزة الأفراد والأطراف المهتمة عند تغيير أو إنهاء التوظيف أو العقد."
        },
        en: {
            q: "Two months post-resignation, a consultant still retains corporate laptops and security tokens. The firm lacked any offboarding asset return checklist. What is the finding?",
            opts: [
                "Conformity, provided the consultant has not disclosed any data stored on the laptop",
                "Nonconformity against Control Annex A 5.11, because personnel and interested parties shall return all organization assets in their possession upon termination",
                "Opportunity for Improvement (OFI) to place a polite phone call requesting asset return",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.5.11 states: 'Personnel and other interested parties... shall return all the organization's assets in their possession upon change or termination...'"
        }
    },
    {
        id: 34,
        ref: "ISO/IEC 27001:2022 - Annex A 5.14",
        ar: {
            q: "شركة تبادل بيانات مع مستشفيات خارجية عبر البريد الإلكتروني العادي العابر للإنترنت دون تشفير أو استخدام قنوات نقل آمنة، ولا توجد اتفاقيات أو قواعد لنقل المعلومات (Information transfer). مدير IT قال: 'البريد الإلكتروني هو الوسيلة القياسية للجميع'. ما هو التقييم؟",
            opts: [
                "مطابقة، لأن البريد الإلكتروني يعتبر قناة تواصل رسمية معتمدة قانونياً",
                "حالة عدم مطابقة للضابط Annex A 5.14، لعدم وجود قواعد أو إجراءات أو اتفاقيات لنقل المعلومات لجميع أنواع وسائل النقل داخل المنظمة وبينها وبين الأطراف الأخرى",
                "ملاحظة تحسين (OFI) بوضع كلمة سر على الملفات المضغوطة المرفقة",
                "مطابقة، طالما لم يشتكِ أي مستشفى من اعتراض الرسائل"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.14 ينص على وجوب وضع قواعد أو إجراءات أو اتفاقيات لنقل المعلومات لجميع أنواع وسائل النقل لحماية البيانات أثناء النقل."
        },
        en: {
            q: "Unencrypted patient records are emailed across the internet to external clinics with zero transfer rules or security agreements. IT claimed email is standard. Assessment?",
            opts: [
                "Conformity, as standard SMTP email represents an internationally recognized formal business channel",
                "Nonconformity against Control Annex A 5.14, because information transfer rules, procedures, or agreements shall be in place for all types of transfer facilities",
                "Opportunity for Improvement (OFI) to zip attachments with simple passwords",
                "Conformity, provided no clinic reported active email interception"
            ],
            ans: 1,
            exp: "Control A.5.14 dictates: 'Information transfer rules, procedures, or agreements shall be in place for all types of transfer facilities within the organization and between...'"
        }
    },
    {
        id: 35,
        ref: "ISO/IEC 27001:2022 - Annex A 5.23",
        ar: {
            q: "شركة تعاقدت مع خدمة سحابية (SaaS) لإدارة علاقات العملاء. المراجع وجد أن الشركة لم تضع أي عمليات لاكتساب واستخدام وإدارة والخروج (Exit strategy) من الخدمات السحابية وفقاً لمتطلبات الأمن. عند السؤال عن آلية استعادة البيانات عند فسخ العقد، تبين عدم وجود خطة. ما القرار؟",
            opts: [
                "مطابقة، لأن خدمات الـ SaaS تعتمد على اتفاقيات المورد الاستندارد",
                "حالة عدم مطابقة للضابط Annex A 5.23، لعدم إنشاء عمليات لاكتساب واستخدام وإدارة والخروج من الخدمات السحابية وفقاً لمتطلبات أمن المعلومات بالمنظمة",
                "ملاحظة تحسين (OFI) بتمديد عقد الخدمة السحابية لسنتين إضافيتين",
                "عدم مطابقة للبند 8.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.23 (جديد في 2022) يتطلب إنشاء عمليات لاكتساب واستخدام وإدارة والخروج (Exit) من الخدمات السحابية وفقاً لمتطلبات الأمن."
        },
        en: {
            q: "A firm adopted a cloud SaaS platform without establishing processes for cloud service acquisition, management, or exit procedures (data retrieval upon contract termination). Finding?",
            opts: [
                "Conformity, as turnkey SaaS cloud models follow standard vendor terms",
                "Nonconformity against Control Annex A 5.23, because processes for acquisition, use, management, and exit from cloud services shall be established per security requirements",
                "Opportunity for Improvement (OFI) to extend the cloud vendor subscription length",
                "Nonconformity against Clause 8.1 only"
            ],
            ans: 1,
            exp: "Control A.5.23 (introduced in 2022 edition) specifies: 'Processes for acquisition, use, management and exit from cloud services shall be established...'"
        }
    },
    {
        id: 36,
        ref: "ISO/IEC 27001:2022 - Annex A 5.25 & 5.26",
        ar: {
            q: "أثناء رصد حدث أمني (Security event) تمثل في محاولات دخول فاشلة مكثفة على سيرفر قاعدة البيانات، قام موظف المتابعة بتجاهل التقرير ولم يقم بتقييم الحدث لاتخاذ قرار ما إذا كان يجب تصنيفه كـ (Security Incident) وتطبيق إجراءات الاستجابة الموثقة. ما تصنيف الخلل؟",
            opts: [
                "مطابقة، طالما أن محاولات الدخول الفاشلة لم تنجح في اختراق السيرفر",
                "حالة عدم مطابقة للضابطين Annex A 5.25 و 5.26، لعدم تقييم أحداث أمن المعلومات واتخاذ قرار بشأن تصنيفها كحوادث والاستجابة لها وفق الإجراءات الموثقة",
                "ملاحظة تحسين (OFI) بتغيير كلمة سر حساب قاعدة البيانات",
                "مطابقة، طالما أن الجدار الناري حظر العناوين المشبوهة تلقائياً"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.25 يفرض تقييم الأحداث الأمنية والبت في تصنيفها كحوادث، والضابط 5.26 يفرض الاستجابة للحوادث وفق الإجراءات الموثقة."
        },
        en: {
            q: "A SOC operator saw thousands of failed DB login attempts but ignored the alert, making no decision on classifying it as an Incident or initiating response protocols. Ruling?",
            opts: [
                "Conformity, provided the brute-force attempt failed to compromise DB root credentials",
                "Nonconformity against Controls Annex A 5.25 and 5.26, for failing to assess security events, categorize them as incidents, and respond per documented procedures",
                "Opportunity for Improvement (OFI) to rotate DB service passwords",
                "Conformity, provided perimeter firewalls automatically auto-blocked suspicious IPs"
            ],
            ans: 1,
            exp: "Control A.5.25 mandates assessing security events to decide if they constitute security incidents, and Control A.5.26 mandates responding per documented procedures."
        }
    },
    {
        id: 37,
        ref: "ISO/IEC 27001:2022 - Annex A 5.28",
        ar: {
            q: "وقعت حادثة اختراق ونقل أموال غير مشروع. عند بدء التحقيق القانوني، تبين أن فريق IT قام بمسح السيرفرات بالكامل وإعادة تثبيت نظام التشغيل دون حفظ أدلة الأدلة الجنائية الرقمية (Forensic Evidence). الشركة لا تملك أي إجراءات لتحديد وجمع وحفظ الأدلة المتعلقة بالحوادث. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن الأهم في الاستجابة للحوادث هو إعادة الخدمة للعمل فوراً",
                "حالة عدم مطابقة للضابط Annex A 5.28، لعدم إنشاء وتطبيق إجراءات لتحديد وجمع واكتساب وحفظ الأدلة المتعلقة بأحداث أمن المعلومات",
                "ملاحظة تحسين (OFI) بالاستعانة بشركة أدلة جنائية خارجية عند الحاجة",
                "مطابقة، طالما تم الإبلاغ عن الحادثة للشرطة"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.28 يتطلب إنشاء وتطبيق إجراءات للتعرف على الأدلة وجمعها واكتسابها وحفظها (Collection of evidence) المتعلقة بأحداث أمن المعلومات."
        },
        en: {
            q: "Following a breach, IT wiped and reinstalled servers without preserving forensic logs. The company maintained zero procedures for evidence identification, collection, and preservation. Finding?",
            opts: [
                "Conformity, as rapid service restoration overrides evidentiary preservation during crisis recovery",
                "Nonconformity against Control Annex A 5.28, for failing to establish and implement procedures for identification, collection, acquisition, and preservation of evidence",
                "Opportunity for Improvement (OFI) to retain external forensic consultants on retainer",
                "Conformity, provided the incident was formally reported to local police authorities"
            ],
            ans: 1,
            exp: "Control A.5.28 explicitly states: 'The organization shall establish and implement procedures for the identification, collection, acquisition and preservation of evidence...'"
        }
    },
    {
        id: 38,
        ref: "ISO/IEC 27001:2022 - Annex A 5.30",
        ar: {
            q: "شركة وضعت خطة لاستمرارية الأعمال (Business Continuity)، ولكنها لم تقم بتخطيط أو اختبار جاهزية تكنولوجيا المعلومات والاتصالات (ICT Readiness) لضمان استمرار عمل الأنظمة وسرعة استعادتها وفقاً لأهداف الاستمرارية المحددة. مدير IT قال: 'نحن نثق في كفاءة السيرفرات'. ما هو التصنيف؟",
            opts: [
                "مطابقة، لأن خطة استمرارية الأعمال العامة تغني عن اختبارات جاهزية الـ ICT التفصيلية",
                "حالة عدم مطابقة للضابط Annex A 5.30، لأن جاهزية تكنولوجيا المعلومات والاتصالات (ICT readiness) يجب أن تُخطط وتُطبق وتُصان وتُختبر بناءً على أهداف استمرارية الأعمال ومتطلباتها",
                "ملاحظة تحسين (OFI) بشراء مولد كهربائي إضافي",
                "مطابقة، طالما يتم عمل نسخ احتياطية يومية"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.30 (جديد في 2022) يفرض التخطيط والتطبيق والصيانة والاختبار لـ ICT readiness بناءً على أهداف استمرارية الأعمال ومتطلباتها."
        },
        en: {
            q: "An org established Business Continuity plans but never planned, maintained, or tested ICT Readiness to verify system recovery objectives, citing trust in hardware robustness. Ruling?",
            opts: [
                "Conformity, as general business continuity frameworks supersede dedicated technical ICT testing",
                "Nonconformity against Control Annex A 5.30, because ICT readiness shall be planned, implemented, maintained, and tested based on business continuity objectives",
                "Opportunity for Improvement (OFI) to procure an auxiliary diesel generator",
                "Conformity, provided daily data backups run without failures"
            ],
            ans: 1,
            exp: "Control A.5.30 dictates: 'ICT readiness shall be planned, implemented, maintained and tested based on business continuity objectives and ICT continuity requirements.'"
        }
    },
    {
        id: 39,
        ref: "ISO/IEC 27001:2022 - Annex A 5.34",
        ar: {
            q: "مؤسسة تجمع بيانات شخصية حساسة للمستخدمين (PII). المراجع وجد أن المؤسسة لم تحدد المتطلبات المتعلقة بالحفاظ على الخصوصية وحماية بيانات الهوية الشخصية وفقاً للقوانين واللوائح المطبقة (مثل GDPR)، ولم تطبق ضوابط حماية خاصة بها. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن معيار ISO 27001 يركز على أمن المعلومات بشكل عام وليس على قوانين الخصوصية",
                "حالة عدم مطابقة للضابط Annex A 5.34، لأن المنظمة يجب أن تحدد وتلبي المتطلبات المتعلقة بالحفاظ على الخصوصية وحماية PII وفقاً للقوانين واللوائح والتطبيقات التعاقدية",
                "ملاحظة تحسين (OFI) بإضافة نص مختصر في أسفل الموقع الإلكتروني",
                "مطابقة، طالما لم يقم أي مستخدم برفع دعوى قضائية"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.34 يتطلب تحديد وتلبية المتطلبات المتعلقة بالحفاظ على الخصوصية وحماية معلومات الهوية الشخصية (PII) وفقاً للقوانين واللوائح المطبقة."
        },
        en: {
            q: "An e-commerce firm processes customer PII but failed to identify applicable privacy legislation (e.g., GDPR) or deploy PII protection controls. CISO claimed ISO 27001 ignores privacy laws. Finding?",
            opts: [
                "Conformity, as ISO 27001 addresses baseline information security rather than privacy legal codes",
                "Nonconformity against Control Annex A 5.34, because the organization shall identify and meet requirements regarding privacy and protection of PII per laws and regulations",
                "Opportunity for Improvement (OFI) to add a standard privacy disclaimer to the website footer",
                "Conformity, provided no user has formally launched a privacy lawsuit"
            ],
            ans: 1,
            exp: "Control A.5.34 explicitly dictates: 'The organization shall identify and meet the requirements regarding the preservation of privacy and protection of PII according to applicable laws...'"
        }
    },
    {
        id: 40,
        ref: "ISO/IEC 27001:2022 - Annex A 7.7",
        ar: {
            q: "أثناء مراجعة مسائية بعد ساعات العمل، وجد المراجع أن أوراقاً تحتوي على بيانات مالية سريّة وشرائح ذاكرة USB متتركة على المكاتب المفتوحة، بينما كانت شاشات الكمبيوتر في قسم الموارد البشرية تعمل ودون إغلاق (Logged in) وبلا كلمة سر. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن المكاتب واقعة داخل مبنى المغلق ومحمي بأفراد أمن عند البوابة",
                "حالة عدم مطابقة للضابط Annex A 7.7، لعدم تعريف وتطبيق قواعد المكتب النظيف للشاشات والأوراق (Clear desk and clear screen rules) بشكل فعال",
                "ملاحظة تحسين (OFI) بتذكير الموظفين في الاجتماع الصباحي",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.7 يفرض تعريف وتطبيق قواعد المكتب النظيف (Clear desk) للأوراق ووسائط التخزين، وقواعد الشاشة النظيفة (Clear screen) لمرافق المعالجة."
        },
        en: {
            q: "During an after-hours walkthrough, sensitive financial printouts and USBs were left on open desks, and HR terminals remained unlocked. Management cited perimeter building guards. Finding?",
            opts: [
                "Conformity, as off-hours physical access to the building is restricted by lobby guards",
                "Nonconformity against Control Annex A 7.7, for failing to define and appropriately enforce clear desk rules for papers/media and clear screen rules for IT facilities",
                "Opportunity for Improvement (OFI) to issue a verbal reminder during morning huddles",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.7.7 dictates: 'Clear desk rules for papers and removable storage media and clear screen rules for information processing facilities shall be defined and appropriately enforced.'"
        }
    },
    {
        id: 41,
        ref: "ISO/IEC 27001:2022 - Annex A 7.10",
        ar: {
            q: "شركة تقوم بالتخلص من الأقراص الصلبة القديمة (Hard Drives) التالفة عبر إلقائها في سلة المهملات العادية دون إجراء مسح آمن للبيانات (Secure Overwrite) أو تدمير فيزيائي، ودون الاحتفاظ بسجلات للتخلص منها. ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن الأقراص الصلبة تالفة تقنياً ولا تعمل على الكمبيوتر",
                "حالة عدم مطابقة للضابطين Annex A 7.10 و 7.14، لعدم إدارة وسائط التخزين خلال دورة حياتها ولعدم التحقق من إزالة البيانات الحساسة أو التدمير الآمن قبل التخلص منها",
                "ملاحظة تحسين (OFI) بكسر الأقراص بأسلوب يدوي قبل رميها",
                "مطابقة، طالما تم شراء أقراص جديدة بديلة"
            ],
            ans: 1,
            exp: "الضوابط Annex A 7.10 و 7.14 تفرض إدارة وسائط التخزين عبر دورة حياتها والتحقق من إزالة البيانات الحساسة أو التدمير الآمن للمعدات قبل التخلص منها."
        },
        en: {
            q: "Decommissioned hard drives containing customer ledgers were thrown into standard trash bins without secure wiping or physical destruction records. IT claimed drives were non-functional. Ruling?",
            opts: [
                "Conformity, as hardware failure prevents standard PC operating systems from mounting data",
                "Nonconformity against Controls Annex A 7.10 and 7.14, for failing to manage storage media lifecycle and verify sensitive data removal prior to disposal",
                "Opportunity for Improvement (OFI) to manually bend drive platters before disposal",
                "Conformity, provided new replacement storage media was procured"
            ],
            ans: 1,
            exp: "Controls A.7.10 and A.7.14 mandate managing storage media throughout lifecycle and verifying sensitive data removal or secure overwriting/destruction prior to disposal."
        }
    },
    {
        id: 42,
        ref: "ISO/IEC 27001:2022 - Annex A 7.11",
        ar: {
            q: "مركز البيانات الرئيسي بشركة بنكية لا يملك أجهزة تزويد الطاقة اللاانقطاعية (UPS) أو مولدات كهرباء احتياطية. انقطاع مفاجئ للتيار الكهربائي أدى لتلف قواعد البيانات وتوقف المعاملات المالية لمدة 12 ساعة. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن انقطاع الكهرباء خطأ من شركة الكهرباء الحكومية ولا تضمنه المنظمة",
                "حالة عدم مطابقة للضابط Annex A 7.11، لعدم حماية مرافق معالجة المعلومات من انقطاع التيار الكهربائي والاضطرابات المترتبة على فشل المرافق الداعمة (Supporting utilities)",
                "ملاحظة تحسين (OFI) بالمطالبة بتعويض مالي من شركة الكهرباء",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.11 ينص بوضوح على وجوب حماية مرافق معالجة المعلومات من انقطاع التيار الكهربائي والاضطرابات الناجمة عن فشل المرافق الداعمة."
        },
        en: {
            q: "A bank's primary data center lacks UPS batteries or backup generators. A power grid failure corrupted DB files and halted operations for 12 hours. CISO blamed the utility company. Verdict?",
            opts: [
                "Conformity, as municipal power grid blackouts constitute force majeure external events",
                "Nonconformity against Control Annex A 7.11, for failing to protect information processing facilities from power failures caused by supporting utility failures",
                "Opportunity for Improvement (OFI) to seek legal damages from the power utility grid",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.7.11 explicitly states: 'Information processing facilities shall be protected from power failures and other disruptions caused by failures in supporting utilities.'"
        }
    },
    {
        id: 43,
        ref: "ISO/IEC 27001:2022 - Annex A 8.2",
        ar: {
            q: "في شركة برمجيات، يمتلك جميع مهندسي الدعم الفني صلاحيات وصول ممتازة (Privileged access rights / Root) بصورة دائمة ومستمرة على سيرفرات الإنتاج، دون وجود عملية لإدارة وتقييد وتقليل استخدام هذه الصلاحيات المرتفعة. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن مهندسي الدعم بحاجة لصلاحيات كاملة لإصلاح المشاكل بسرعة",
                "حالة عدم مطابقة للضابط Annex A 8.2، لأن تخصيص واستخدام حقوق الوصول الممتازة (Privileged access rights) يجب أن يتم تقييده وإدارته بشكل صارم",
                "ملاحظة تحسين (OFI) بتغيير كلمات سر الـ Root كل سنة",
                "مطابقة، طالما أن الموظفين موثوقون ووقعوا اتفاقيات السرية"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.2 ينص على أن تخصيص واستخدام حقوق الوصول الممتازة (Privileged access rights) يجب تقييده وإدارته بصرامة."
        },
        en: {
            q: "All tech support staff hold permanent, unrestricted root/admin access to live production DBs 24/7 with zero privilege restriction rules or just-in-time elevation. Finding?",
            opts: [
                "Conformity, as support teams require permanent administrative access for instant troubleshooting",
                "Nonconformity against Control Annex A 8.2, because the allocation and use of privileged access rights shall be restricted and managed",
                "Opportunity for Improvement (OFI) to rotate root credentials annually",
                "Conformity, provided all support engineers signed confidentiality agreements"
            ],
            ans: 1,
            exp: "Control A.8.2 explicitly dictates: 'The allocation and use of privileged access rights shall be restricted and managed.'"
        }
    },
    {
        id: 44,
        ref: "ISO/IEC 27001:2022 - Annex A 8.5",
        ar: {
            q: "نظام الدخول على شبكة الشركة للعمل عن بعد يكتفي بكلمة سر ضعيفة تتكون من 4 أرقام فقط دون تطبيق المصادقة المتعددة العوامل (MFA) أو آليات مصادقة آمنة للوصول للأنظمة الحساسة. ما هو تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن اسم المستخدم معقد ويصعب تخمينه",
                "حالة عدم مطابقة للضابط Annex A 8.5، لعدم تطبيق تقنيات وإجراءات المصادقة الآمنة (Secure authentication) بناءً على قيود الوصول وسياسة التحكم بالوصول",
                "ملاحظة تحسين (OFI) بإضافة حرف واحد لكلمة السر",
                "مطابقة، طالما أن الوصول يتم عبر أجهزة الشركة فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.5 يتطلب تطبيق تقنيات وإجراءات المصادقة الآمنة (Secure authentication) بناءً على قيود الوصول وسياسة التحكم بالوصول."
        },
        en: {
            q: "Remote VPN access to critical financial ledgers relies on a simple 4-digit PIN with zero Multi-Factor Authentication (MFA). CISO claimed complex usernames compensate. Finding?",
            opts: [
                "Conformity, as combining non-standard usernames with PINs provides sufficient entropy",
                "Nonconformity against Control Annex A 8.5, for failing to implement secure authentication technologies and procedures based on access restrictions",
                "Opportunity for Improvement (OFI) to extend PIN length to 6 digits",
                "Conformity, provided remote connections originate exclusively from company-issued laptops"
            ],
            ans: 1,
            exp: "Control A.8.5 explicitly mandates implementing secure authentication technologies (e.g., MFA) based on information access restrictions."
        }
    },
    {
        id: 45,
        ref: "ISO/IEC 27001:2022 - Annex A 8.8",
        ar: {
            q: "أعلنت إحدى الشركات العالمية عن ثغرة أمنية حرجة جداً (Zero-day) في نظام التشغيل المستعمل بالشركة. المراجع وجد أن المنظمة لا تملك عملية للحصول على معلومات الثغرات الفنية وتقييم مدى تعرضها لها، ولم تتخذ أي تدابير لمواجهة الثغرة بعد شهرين من إعلانها. ما القرار؟",
            opts: [
                "مطابقة، لأن معالجة الثغرات ترتبط بتوفر التحديثات من المورد الخارجي فقط",
                "حالة عدم مطابقة للضابط Annex A 8.8، لعدم الحصول على معلومات حول الثغرات الفنية للأنظمة المستخدمة، وعدم تقييم التعرض لها، وعدم اتخاذ التدابير المناسبة",
                "ملاحظة تحسين (OFI) بالاشتراك في القائمة البريدية للمورد",
                "مطابقة، طالما أن الثغرة لم تستغل في اختراق أمني فعلي حتى الآن"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.8 يفرض الحصول على معلومات الثغرات الفنية (Technical vulnerabilities)، وتقييم التعرض لها، واتخاذ التدابير المناسبة."
        },
        en: {
            q: "Two months after a critical zero-day exploit was published for core OS software, the firm had no vulnerability tracking workflow, executed zero risk evaluations, and applied no patches. Verdict?",
            opts: [
                "Conformity, as patching timelines depend strictly on automated vendor software updates",
                "Nonconformity against Control Annex A 8.8, for failing to obtain technical vulnerability information, evaluate exposure, and take appropriate measures",
                "Opportunity for Improvement (OFI) to subscribe to software vendor mailing lists",
                "Conformity, provided no active exploit attempts hit the infrastructure to date"
            ],
            ans: 1,
            exp: "Control A.8.8 dictates obtaining technical vulnerability information, evaluating exposure, and executing appropriate remediation measures."
        }
    },
    {
        id: 46,
        ref: "ISO/IEC 27001:2022 - Annex A 8.9",
        ar: {
            q: "جميع السيرفرات والأجهزة في الشركة تعمل بالإعدادات الافتراضية للمورد (Default Configurations) متضمنة الحسابات وكلمات السر الافتراضية، ولا توجد وثائق أو مراقبة لإعدادات التكوين الآمن (Configuration management). ما تصنيف المراجع؟",
            opts: [
                "مطابقة، لأن إعدادات المصنع الافتراضية مصممة للعمل بأعلى كفاءة",
                "حالة عدم مطابقة للضابط Annex A 8.9، لعدم إنشاء وتوثيق وتطبيق ومراقبة ومراجعة إعدادات التكوين (Configuration management) متضمنة التكوينات الأمنية للأجهزة والبرامج",
                "ملاحظة تحسين (OFI) بتغيير كلمة سر حساب الأدمن الافتراضي فقط",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.9 (جديد في 2022) يفرض إنشاء وتوثيق وتطبيق ومراقبة ومراجعة إعدادات التكوين (Configuration management) بما في ذلك التكوينات الأمنية."
        },
        en: {
            q: "Corporate firewalls and servers run on out-of-the-box factory default configurations, including default admin passwords. No baseline security hardening docs exist. Finding?",
            opts: [
                "Conformity, as factory default settings ensure maximum hardware performance and compatibility",
                "Nonconformity against Control Annex A 8.9, for failing to establish, document, implement, monitor, and review configuration management (security baselines)",
                "Opportunity for Improvement (OFI) to change default admin passwords only",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.9 (introduced in 2022 edition) mandates establishing, documenting, implementing, monitoring, and reviewing security configurations."
        }
    },
    {
        id: 47,
        ref: "ISO/IEC 27001:2022 - Annex A 8.11",
        ar: {
            q: "مطورو البرمجيات في الشركة يستخدمون بيانات حقيقية لعملاء البنك (تتضمن أرقام الهويات والبطاقات) في بيئة الاختبار والتطوير دون تطبيق حجب البيانات أو التمويه (Data masking). المطورون ادعوا أن حجب البيانات يعوق اختبار الكود. ما القرار؟",
            opts: [
                "مطابقة، لأن استخدام البيانات الحقيقية يضمن دقة اختبارات البرمجة",
                "حالة عدم مطابقة للضابط Annex A 8.11، لعدم استخدام تمويه وحجب البيانات (Data masking) وفقاً لسياسة التحكم بالوصول ومتطلبات العمل والتشريعات",
                "ملاحظة تحسين (OFI) بتوقيع المطورين على تعهد بعدم نسخ البيانات",
                "مطابقة، طالما أن بيئة الاختبار مقفولة بجدار ناري داخلي"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.11 (جديد في 2022) يفرض استخدام تمويه وحجب البيانات (Data masking) وفقاً لسياسات التحكم بالوصول والمتطلبات التشريعية."
        },
        en: {
            q: "Developers use real customer PII and credit card numbers in non-production test environments without data masking, claiming masking complicates code debugging. Finding?",
            opts: [
                "Conformity, as utilizing authentic production data ensures realistic software QA testing results",
                "Nonconformity against Control Annex A 8.11, for failing to enforce data masking in accordance with access control policies and legal requirements",
                "Opportunity for Improvement (OFI) to have developers sign specific non-copying pledges",
                "Conformity, provided test environments sit behind internal firewalls"
            ],
            ans: 1,
            exp: "Control A.8.11 (introduced in 2022) requires: 'Data masking shall be used in accordance with the organization's topic-specific policy on access control... and applicable legislation.'"
        }
    },
    {
        id: 48,
        ref: "ISO/IEC 27001:2022 - Annex A 8.12",
        ar: {
            q: "شركة تتعامل مع بيانات بطاقات ائتمانية وتصاميم سرية. المراجع وجد أن الشركة لا تطبق أي تدابير لمنع تسريب البيانات (Data Leakage Prevention - DLP) على الأجهزة والشبكات لمنع رفع الملفات للبريد الشخصي أو نسخها على وسائط خارجية. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن منع تسريب البيانات إجراء اختياري يعتمد على ثقة الإدارة بموظفيها",
                "حالة عدم مطابقة للضابط Annex A 8.12، لعدم تطبيق تدابير منع تسريب البيانات (DLP) على الأنظمة والشبكات والأجهزة التي تعالج أو تخزن أو تنقل معلومات حساسة",
                "ملاحظة تحسين (OFI) بمراقبة حركة البريد الإلكتروني عشوائياً",
                "مطابقة، طالما أن سياسة الشركة تمنع السرقة"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.12 (جديد في 2022) يفرض تطبيق تدابير منع تسريب البيانات (Data leakage prevention) على الأنظمة والشبكات والأجهزة التي تتعامل مع معلومات حساسة."
        },
        en: {
            q: "A firm processing credit card data deployed zero Data Leakage Prevention (DLP) measures on endpoints or network egress points to block unauthorized data exfiltration. Ruling?",
            opts: [
                "Conformity, as DLP deployment is an optional safeguard dependent on managerial employee trust",
                "Nonconformity against Control Annex A 8.12, for failing to apply data leakage prevention measures to systems, networks, and devices that process sensitive data",
                "Opportunity for Improvement (OFI) to spot-check employee outgoing emails manually",
                "Conformity, provided company policies explicitly prohibit information theft"
            ],
            ans: 1,
            exp: "Control A.8.12 (introduced in 2022) explicitly dictates: 'Data leakage prevention measures shall be applied to systems, networks and any other devices that process, store or transmit sensitive information.'"
        }
    },
    {
        id: 49,
        ref: "ISO/IEC 27001:2022 - Annex A 8.13",
        ar: {
            q: "شركة تقوم بأخذ نسخ احتياطية (Backups) يومية للبيانات. ولكن عند مطالبة المراجع بأدلة اختبار استعادة النسخ الاحتياطية (Testing backups)، تبين أن الشركة لم تجرِ أي اختبار استعادة منذ عامين. عند تجربة الاستعادة أثناء المراجعة، فشلت النسخة وكانت تالفة. ما هو القرار؟",
            opts: [
                "مطابقة، طالما أن عملية أخذ النسخ الاحتياطية تتم بانتظام يومياً",
                "حالة عدم مطابقة للضابط Annex A 8.13، لأن النسخ الاحتياطية للمعلومات والبرامج والأنظمة يجب الحفاظ عليها واختبارها بانتظام وفقاً لسياسة النسخ الاحتياطي",
                "ملاحظة تحسين (OFI) لشراء أشرطة تخزين جديدة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.13 يفرض الحفاظ على النسخ الاحتياطية واختبارها بانتظام (Regularly tested) وفقاً لسياسة النسخ الاحتياطي."
        },
        en: {
            q: "A company runs daily automated backups but performed zero restoration tests for 2 years. During audit sampling, backup restoration failed completely due to media corruption. Verdict?",
            opts: [
                "Conformity, provided automated daily backup job completion logs show green status",
                "Nonconformity against Control Annex A 8.13, because backup copies of information, software, and systems shall be maintained AND regularly tested",
                "Opportunity for Improvement (OFI) to purchase new backup magnetic tapes",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.13 mandates: 'Backup copies of information, software and systems shall be maintained and regularly tested in accordance with the agreed topic-specific policy...'"
        }
    },
    {
        id: 50,
        ref: "ISO/IEC 27001:2022 - Annex A 8.31",
        ar: {
            q: "في شركة تطوير برمجيات، يتم تنفيذ أعمال التطوير والاختبار والتشغيل الفعلي (Production) على نفس السيرفر ونفس قاعدة البيانات دون أي فصل بين البيئات. المطورون ينفذون الأكواد مباشرة على بيئة الإنتاج الحية. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن العمل على سيرفر واحد يقلل التكاليف ويزيد سرعة التحديثات",
                "حالة عدم مطابقة للضابط Annex A 8.31، لعدم فصل وتأمين بيئات التطوير والاختبار والإنتاج (Separation of development, test and production environments)",
                "ملاحظة تحسين (OFI) بعمل نسخة احتياطية قبل تعديل الأكواد",
                "عدم مطابقة للبند 5.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.31 ينص بوضوح على وجوب فصل وتأمين بيئات التطوير والاختبار والإنتاج (Separation of development, test, and production environments)."
        },
        en: {
            q: "Developers write, test, and deploy live software code directly inside the single production environment database cluster with zero environment segregation. Finding?",
            opts: [
                "Conformity, as single-server operations reduce infrastructure overhead and streamline deployment speed",
                "Nonconformity against Control Annex A 8.31, for failing to separate and secure development, testing, and production environments",
                "Opportunity for Improvement (OFI) to trigger automated backups before running live code changes",
                "Nonconformity against Clause 5.1 only"
            ],
            ans: 1,
            exp: "Control A.8.31 explicitly mandates: 'Development, testing and production environments shall be separated and secured.'"
        }
    },
    {
        id: 51,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.1",
        ar: {
            q: "شركة مدفوعات تخطط لإطلاق محفظة إلكترونية جديدة. فريق المخاطر أعد سجلاً بالمخاطر التقنية فقط (تسلل، انقطاع خدمة)، وأهمل المخاطر الناتجة عن احتمال تغير اللوائح التنظيمية للبنك المركزي. مدير المخاطر قال: 'اللوائح خارجة عن إرادتنا ولا يمكن اعتبارها مخاطرة أمنية'. ما هو تقييم المراجع؟",
            opts: [
                "مطابقة، لأن المخاطر التنظيمية والتشريعية تخص الإدارة القانونية ولا تدخل ضمن مخاطر أمن المعلومات",
                "حالة عدم مطابقة للبند 6.1.1، لأن التخطيط للـ ISMS يتطلب تحديد المخاطر والفرص الناتجة عن القضايا الخارجية ومتطلبات الأطراف المهتمة",
                "ملاحظة تحسين (OFI) لإضافة قسم القانونية في مراجعة المخاطر القادمة",
                "مطابقة، بشرط وجود تأمين مالي يغطي غرامات البنك المركزي"
            ],
            ans: 1,
            exp: "البند 6.1.1 يفرض عند التخطيط لنظام ISMS النظر في القضايا المشار إليها في 4.1 ومتطلبات 4.2 لتحديد المخاطر والفرص الواجب معالجتها."
        },
        en: {
            q: "A fintech planning an e-wallet evaluated cyber threats but skipped potential central bank regulatory changes, claiming laws are outside security risk domain. How is this audited?",
            opts: [
                "Conformity, as regulatory risks belong strictly to Legal and fall outside the ISMS framework",
                "Nonconformity against Clause 6.1.1, because ISMS planning must determine risks arising from external issues and interested party requirements",
                "Opportunity for Improvement (OFI) to include Legal in the next review cycle",
                "Conformity, provided financial insurance covers regulatory fines"
            ],
            ans: 1,
            exp: "Clause 6.1.1 mandates that planning the ISMS must consider internal/external context issues (4.1) and interested party requirements (4.2)."
        }
    },
    {
        id: 52,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "أثناء مراجعة عملية تقييم المخاطر بشركة طيران، تبين أن الفريق يعتمد على تقييم المخاطر الناتجة عن فقدان السرية (Confidentiality) والسلامة (Integrity) فقط، وتم إستبعاد مخاطر توفر البيانات (Availability) بحجة أن السيرفرات السحابية تضمن تشغيل 99.9%. كيف يصنف المراجع هذا الاستبعاد؟",
            opts: [
                "مطابقة، لأن ضمانات المزود السحابي تعفي المنظمة من تقييم مخاطر التوفر",
                "حالة عدم مطابقة للبند 6.1.2 (c)(1)، لأن منهجية تقييم المخاطر يجب أن تطبق لتحديد المخاطر المرتبطة بفقدان السرية والسلامة والتوافر معاً",
                "ملاحظة تحسين (OFI) لمراجعة اتفاقية مستوى الخدمة (SLA) مع المزود السحابي",
                "مطابقة، طالما تم توثيق نسبة التشغيل المرتفعة في العقد"
            ],
            ans: 1,
            exp: "البند 6.1.2 (c)(1) ينص صراحة على تطبيق عملية تقييم المخاطر لتحديد المخاطر المرتبطة بفقدان السرية والسلامة والتوافر (CIA)."
        },
        en: {
            q: "An airline assessed ISMS risks regarding Confidentiality and Integrity, but skipped Availability risks because cloud uptime is 99.9%. Auditor ruling?",
            opts: [
                "Conformity, as high cloud uptime SLAs negate the need to assess availability risks",
                "Nonconformity against Clause 6.1.2 (c)(1), because the risk assessment process must systematically identify risks associated with loss of Confidentiality, Integrity, AND Availability",
                "Opportunity for Improvement (OFI) to review cloud SLA metrics annually",
                "Conformity, provided SLA availability percentages are formally documented"
            ],
            ans: 1,
            exp: "Clause 6.1.2 (c)(1) explicitly requires identifying risks associated with the loss of confidentiality, integrity, AND availability."
        }
    },
    {
        id: 53,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.3",
        ar: {
            q: "مؤسسة قامت بإعداد خطة معالجة المخاطر (RTP) واختارت الضوابط المناسبة لخفض المخاطر العالية، ولكنها لم تعرض خطة المعالجة والمخاطر المتبقية (Residual Risks) على مالكي المخاطر (Risk Owners) للموافقة والقبول الرسمي. مدير المشروع قال: 'توقيعي كمدير أمن يكفي'. ما القرار المنهجي؟",
            opts: [
                "مطابقة، لأن مدير أمن المعلومات هو المالك الفعلي لجميع مخاطر أمن المعلومات بالشركة",
                "حالة عدم مطابقة للبند 6.1.3 (f)، لأن المعيار يفرض الحصول على موافقة مالكي المخاطر على خطة المعالجة وقبولهم للمخاطر المتبقية",
                "ملاحظة تحسين (OFI) لعرض التقرير في اجتماع مراجعة الإدارة القادم",
                "مطابقة، طالما تم تخفيض مستويات المخاطر تحت الحد المقبول"
            ],
            ans: 1,
            exp: "البند 6.1.3 (f) ينص صراحة على وجوب الحصول على موافقة مالكي المخاطر (Risk Owners) على خطة معالجة المخاطر وقبولهم للمخاطر المتبقية."
        },
        en: {
            q: "An organization formulated a Risk Treatment Plan but never obtained formal approval from designated Risk Owners for the residual risks, relying solely on CISO sign-off. What is the finding?",
            opts: [
                "Conformity, as the CISO holds ultimate functional ownership over all information security risks",
                "Nonconformity against Clause 6.1.3 (f), because the organization must obtain risk owners' approval of the risk treatment plan and acceptance of residual risks",
                "Opportunity for Improvement (OFI) to present the report at the next Management Review",
                "Conformity, provided residual risk levels fall below established risk acceptance criteria"
            ],
            ans: 1,
            exp: "Clause 6.1.3 (f) explicitly mandates obtaining risk owners' approval of the risk treatment plan and acceptance of residual information security risks."
        }
    },
    {
        id: 54,
        ref: "ISO/IEC 27001:2022 - Clause 6.2",
        ar: {
            q: "شركة وضعت هدفاً أمنياً: 'تطبيق التشفير الشامل لجميع قواعد البيانات قبل نهاية العام'. أثناء المراجعة في شهر أكتوبر، وجد المراجع أن الهدف لم يتم قياس نسبة إنجازه ولا توجد أي متابعة دورية لمعرفة ما تم تحقيقه حتى تاريخه. مسئول الأمن أفاد: 'سنقيس الهدف في نهاية السنة دفعة واحدة'. ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن الموعد النهائي المحدد للهدف لم ينتهِ بعد",
                "حالة عدم مطابقة للبند 6.2 (d)، لأن أهداف أمن المعلومات يجب أن تتم مراقبتها ومتابعتها بانتظام (Monitored) وليس فقط في نهايتها",
                "ملاحظة تحسين (OFI) بوضع مؤشرات قياس مرحلية كل ثلاثة أشهر",
                "مطابقة، طالما أن الهدف مكتوب ومسجل كـ Documented Information"
            ],
            ans: 1,
            exp: "البند 6.2 (d) يفرض أن تكون أهداف أمن المعلومات خاضعة للمراقبة والمتابعة المستمرة (Monitored) لضمان تحقيقها."
        },
        en: {
            q: "A company set a goal to encrypt all DBs by year-end. In October, the auditor found no ongoing tracking or interim progress measurement. Security lead said evaluation happens only at deadline. Finding?",
            opts: [
                "Conformity, as the formal target completion date has not yet passed",
                "Nonconformity against Clause 6.2 (d), because information security objectives must be actively monitored",
                "Opportunity for Improvement (OFI) suggesting quarterly interim milestones",
                "Conformity, provided the objective is properly retained as documented information"
            ],
            ans: 1,
            exp: "Clause 6.2 (d) specifies that information security objectives shall be monitored continuously, not evaluated solely at completion."
        }
    },
    {
        id: 55,
        ref: "ISO/IEC 27001:2022 - Clause 6.3",
        ar: {
            q: "مؤسسة مالية قررت نقل مركز بياناتها بالكامل إلى بيئة سحابية جديدة. النقل تم بشكل مفاجئ خلال عطلة نهاية الأسبوع دون وجود خطة مكتوبة لتغيير نظام ISMS أو تقييم أثر التغيير على الضوابط القائمة. مدير IT قال: 'عملية النقل نجحت بدون انقطاع للخدمة'. كيف يصنف المراجع هذا الإجراء؟",
            opts: [
                "مطابقة، طالما أن التغيير اكتمل بنجاح دون أثر سلبي أو توقف للخدمة",
                "حالة عدم مطابقة للبند 6.3، لأن التغييرات في نظام الـ ISMS يجب أن تنفذ بطريقة مخططة (Planned manner)",
                "ملاحظة تحسين (OFI) لتحديث رسم البنية التحتية في الوثائق",
                "مطابقة، لأن البيئة السحابية أكثر أماناً من المراكز المحلية"
            ],
            ans: 1,
            exp: "البند 6.3 ينص على أنه عندما تحدد المنظمة الحاجة إلى إجراء تغييرات على نظام إدارة أمن المعلومات، يجب أن تتخذ التغييرات بطريقة مخططة."
        },
        en: {
            q: "A bank migrated its data center to the cloud over a weekend without documented change planning or evaluating ISMS control impacts. IT claimed success as zero downtime occurred. Assessment?",
            opts: [
                "Conformity, as the operational outcome was successful with zero business disruption",
                "Nonconformity against Clause 6.3, because changes to the ISMS shall be carried out in a planned manner",
                "Opportunity for Improvement (OFI) to update topology diagrams in the documentation",
                "Conformity, since cloud infrastructure is inherently more secure than on-premise setups"
            ],
            ans: 1,
            exp: "Clause 6.3 mandates that when the organization determines the need for changes to the ISMS, changes shall be carried out in a planned manner."
        }
    },
    {
        id: 56,
        ref: "ISO/IEC 27001:2022 - Clause 7.1",
        ar: {
            q: "فريق أمن المعلومات طلب شراء أداة لإدارة الثغرات الأمنية (Vulnerability Management) لتقليل المخاطر المرتفعة، ولكن الإدارة العليا رفضت توفير الميزانية للسنة الثانية على التوالي دون إبداء أسباب أو توفير بديل، مما أدى لتراكم الثغرات الحرجة. على من تقع عدم المطابقة؟",
            opts: [
                "على مدير أمن المعلومات لعدم قدرته على معالجة الثغرات بالحلول المجانية",
                "حالة عدم مطابقة على الإدارة العليا وفق البند 7.1 لعدم تحديد وتوفير الموارد اللازمة لإنشاء وتطبيق وصيانة وتحسين نظام ISMS",
                "ملاحظة تحسين (OFI) موجهة لقسم المالية لتسهيل الشراء مستقبلاً",
                "لا توجد عدم مطابقة، لأن ترشيد الميزانيات حق مطلق للإدارة"
            ],
            ans: 1,
            exp: "البند 7.1 يوجب على المنظمة (والإدارة العليا) تحديد وتوفير الموارد اللازمة لإنشاء وتطبيق وصيانة والتحسين المستمر لنظام الـ ISMS."
        },
        en: {
            q: "Security requested a vulnerability scanner to treat high risks, but Top Management cut the budget for 2 consecutive years without alternatives, leading to unpatched critical flaws. Where rests the finding?",
            opts: [
                "Against the CISO for failing to remediate vulnerabilities using open-source tools",
                "Nonconformity against Top Management under Clause 7.1 for failing to determine and provide resources needed for ISMS maintenance and improvement",
                "Opportunity for Improvement (OFI) assigned to Finance to streamline procurement",
                "No finding, as budget rationing is a sole executive prerogative"
            ],
            ans: 1,
            exp: "Clause 7.1 states the organization shall determine and provide resources needed for the establishment, implementation, maintenance, and continual improvement of the ISMS."
        }
    },
    {
        id: 57,
        ref: "ISO/IEC 27001:2022 - Clause 7.2",
        ar: {
            q: "شركة عينت مدراء أمن معلومات جدد. أثناء المراجعة، طلب المراجع الأدلة الموثقة التي تثبت كفاءة هؤلاء الأشخاص (شهادات، مؤهلات، أو سجلات تدريب). مدير HR أفاد بأنه تم اختيارهم بناءً على المقابلة الشخصية والخبرة الشفهية ولا توجد وثائق محفوظة. ما هو قرار المراجع؟",
            opts: [
                "مطابقة، طالما أن الموظفين يؤدون عملهم بكفاءة عالية في الواقع",
                "حالة عدم مطابقة للبند 7.2 (d)، لأن المعيار يفرض الاحتفاظ بمعلومات موثقة مناسبة كدليل على الكفاءة (Evidence of competence)",
                "ملاحظة تحسين (OFI) بإجراء اختبار فني للموظفين وحفظ النتيجة",
                "مطابقة، لأن السيرة الذاتية (CV) الإلكترونية تعتبر بديلاً رسمياً"
            ],
            ans: 1,
            exp: "البند 7.2 (d) ينص صراحة على وجوب الاحتفاظ بمعلومات موثقة مناسبة كدليل على كفاءة الأشخاص الذين يؤثر عملهم على الأداء الأمني."
        },
        en: {
            q: "An auditor asked for competency evidence (certs, degrees, training logs) for newly hired security leads. HR stated they were hired based on verbal interviews and no records were saved. Finding?",
            opts: [
                "Conformity, provided employees demonstrate strong practical daily performance",
                "Nonconformity against Clause 7.2 (d), as the standard explicitly mandates retaining appropriate documented information as evidence of competence",
                "Opportunity for Improvement (OFI) to conduct technical tests and file the results",
                "Conformity, as unverified digital CVs serve as automatic official proof"
            ],
            ans: 1,
            exp: "Clause 7.2 (d) explicitly dictates retaining appropriate documented information as evidence of competence."
        }
    },
    {
        id: 58,
        ref: "ISO/IEC 27001:2022 - Clause 7.3",
        ar: {
            q: "أثناء المراجعة الميدانية، سأل المراجع أحد موظفي قسم المبيعات عن سياسة أمن المعلومات بالشركة وآثار عدم التوافق مع متطلبات الـ ISMS. الموظف أجاب: 'أنا موظف مبيعات ولا علاقة لي بسياسات أمن المعلومات، هذا عمل قسم IT'. ما هو تقييم المراجع؟",
            opts: [
                "مطابقة، لأن التوعية الأمنية التخصصية مطلوبة فقط من موظفي تقنية المعلومات",
                "حالة عدم مطابقة للبند 7.3، لأن الأشخاص الذين يعملون تحت سيطرة المنظمة يجب أن يكونوا على وعي بسياسة الأمن ومساهمتهم وآثار عدم التوافق",
                "ملاحظة تحسين (OFI) إرسال الإيميل التوعوي للموظف مرة أخرى",
                "مطابقة، طالما أن الموظف يوقع على سجل الحضور في الدورات العامة"
            ],
            ans: 1,
            exp: "البند 7.3 يوجب أن يكون جميع الأشخاص الذين يعملون تحت سيطرة المنظمة على وعي بسياسة أمن المعلومات، ومساهمتهم في الفاعلية، وآثار عدم التوافق."
        },
        en: {
            q: "An auditor asked a sales rep about the security policy and consequences of non-compliance. The rep replied: 'I work in sales; security policies are IT's problem.' How is this evaluated?",
            opts: [
                "Conformity, as technical security awareness applies strictly to IT department staff",
                "Nonconformity against Clause 7.3, because persons doing work under organization control must be aware of the security policy and implications of non-conformity",
                "Opportunity for Improvement (OFI) to re-send awareness emails to the sales department",
                "Conformity, provided the employee signed an attendance log for annual general training"
            ],
            ans: 1,
            exp: "Clause 7.3 mandates that persons doing work under the organization's control shall be aware of the information security policy and implications of not conforming."
        }
    },
    {
        id: 59,
        ref: "ISO/IEC 27001:2022 - Clause 7.4",
        ar: {
            q: "حدث اختراق أمني أدى لتسريب بيانات عملاء. الشركة لم تكن تملك أي آلية أو خطة محددة تسير عملية التواصل الخارجي مع الجهات التنظيمية والعملاء والإعلام (ماذا متى ومع من وكيف يتم التواصل). التواصل تم بشكل عشوائي ومتضارب. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن التواصل في الحوادث يخضع لتقدير الإدارة في لحظة الأزمة",
                "حالة عدم مطابقة للبند 7.4، لعدم تحديد المنظمة للحاجة إلى الاتصالات الداخلية والخارجية ذات الصلة بالنظام (ماذا ومتى ومع من وكيف)",
                "ملاحظة تحسين (OFI) بتعيين متحدث رسمي باسم الشركة",
                "عدم مطابقة للبند 5.1 فقط"
            ],
            ans: 1,
            exp: "البند 7.4 يوجب على المنظمة تحديد الحاجة إلى الاتصالات الداخلية والخارجية ذات الصلة بنظام الـ ISMS متضمنة (ماذا، متى، مع من، وكيف)."
        },
        en: {
            q: "Following a breach, a firm leaked customer PII. External communications with regulators and press were chaotic, lacking pre-defined rules on what, when, with whom, and how to communicate. Finding?",
            opts: [
                "Conformity, as crisis communications are managed at management's ad-hoc discretion during incidents",
                "Nonconformity against Clause 7.4, for failing to determine the need for internal and external communications (what, when, with whom, how)",
                "Opportunity for Improvement (OFI) to hire a dedicated PR spokesperson",
                "Nonconformity against Clause 5.1 only"
            ],
            ans: 1,
            exp: "Clause 7.4 mandates determining the need for internal and external communications relevant to the ISMS, including what, when, with whom, and how to communicate."
        }
    },
    {
        id: 60,
        ref: "ISO/IEC 27001:2022 - Clause 7.5.2",
        ar: {
            q: "أثناء فحص وثائق نظام ISMS، وجد المراجع أن سياسات وإجراءات متعددة لا تحتوي على عنوان، رقم إصدار (Version)، تاريخ اعتماد، أو اسم المحرر والموافق عليها. مسؤول الوثائق قال: 'الملفات محفوظة على خادم داخلي معروف للجميع'. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، طالما أن الملفات إلكترونية وموجودة في المجلد الرسمي",
                "حالة عدم مطابقة للبند 7.5.2 (a)، لأن إنشاء وتحديث المعلومات الموثقة يتطلب التمييز والوصف المناسب (عنوان، تاريخ، مؤلف، مرجع)",
                "ملاحظة تحسين (OFI) لتحويل الملفات إلى صيغة PDF",
                "مطابقة، طالما لم يتم تعديلها من شخص غير مصرح له"
            ],
            ans: 1,
            exp: "البند 7.5.2 (a) يفرض عند إنشاء وتحديث المعلومات الموثقة ضمان التمييز والوصف المناسبين (مثل العنوان، التاريخ، المؤلف، أو الرقم المرجعي)."
        },
        en: {
            q: "Auditor reviewed ISMS policies lacking titles, version numbers, creation dates, author names, or approval signatures. Document Controller said folder location suffices. Verdict?",
            opts: [
                "Conformity, as storing digital files in an official shared drive implicitly validates them",
                "Nonconformity against Clause 7.5.2 (a), because creating/updating documented information requires proper identification and description (title, date, author, reference)",
                "Opportunity for Improvement (OFI) to convert all Word documents to PDF format",
                "Conformity, provided no unauthorized users modified the files"
            ],
            ans: 1,
            exp: "Clause 7.5.2 (a) dictates that when creating and updating documented information, the organization shall ensure appropriate identification and description."
        }
    },
    {
        id: 61,
        ref: "ISO/IEC 27001:2022 - Clause 7.5.3",
        ar: {
            q: "مؤسسة تستخدم وثائق إرشادات أمنية خارجية صادرة من هيئة الأمن السيبراني الحكومية لتشغيل أنظمتها. المراجع وجد أن هذه الوثائق الخارجية غير محددة، ولا يخضع تداولها أو تحديثها لأي نوع من الضبط. مدير IT قال: 'الوثائق الخارجية ليست من صنعنا فلا نضبطها'. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن متطلبات ضبط الوثائق تطبق حصراً على الوثائق الداخلية المنشأة بواسطة الشركة",
                "حالة عدم مطابقة للبند 7.5.3، لأن المعلومات الموثقة ذات المصدر الخارجي والتي تحددها المنظمة كضرورية يجب التمييز عليها وضبطها",
                "ملاحظة تحسين (OFI) ببيان أرقام الوثائق الخارجية في السجل العام",
                "مطابقة، طالما تم تحميلها من الموقع الرسمي للهيئة"
            ],
            ans: 1,
            exp: "البند 7.5.3 ينص صراحة على أن 'المعلومات الموثقة ذات المصدر الخارجي... يجب التمييز عليها كما هو مناسب وضبطها'."
        },
        en: {
            q: "A firm relies on external government cybersecurity frameworks for IT operations. These external documents are unindexed, version-uncontrolled, and unmonitored. IT argued external docs don't need ISMS control. Finding?",
            opts: [
                "Conformity, as document control requirements apply strictly to internal procedures generated in-house",
                "Nonconformity against Clause 7.5.3, because documented information of external origin determined necessary for ISMS must be identified and controlled",
                "Opportunity for Improvement (OFI) to bookmark the regulator's URL",
                "Conformity, provided documents were downloaded from an official domain"
            ],
            ans: 1,
            exp: "Clause 7.5.3 explicitly states: 'Documented information of external origin determined by the organization to be necessary... shall be identified as appropriate, and controlled.'"
        }
    },
    {
        id: 62,
        ref: "ISO/IEC 27001:2022 - Clause 8.1",
        ar: {
            q: "شركة قررت الاستعانة بمصدر خارجي (Outsourced) لتطوير تطبيقها البنكي. أثناء المراجعة، وجد المراجع أن الشركة لا تملك أي معايير أو آليات ضبط للعمليات الخارجية، ولم تطلب أي أدلة على فحص الأكواد أمنياً قبل استلامها. مدير التطوير قال: 'المطور الخارجي هو المسؤول عن جودة كوده'. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن المسؤولية الأمنية تنتقل بالكامل للجهة الخارجية بموجب عقد التطوير",
                "حالة عدم مطابقة للبند 8.1، لأن المنظمة يجب أن تضمن الضبط والتنفيذ للعمليات أو المنتجات أو الخدمات المقدمة من أطراف خارجية والمؤثرة على ISMS",
                "ملاحظة تحسين (OFI) بإضافة بند جزائي في العقد",
                "مطابقة، طالما التطبيق يعمل بدون ثغرات مكتشفة حتى الآن"
            ],
            ans: 1,
            exp: "البند 8.1 ينص على وجوب أن تضمن المنظمة ضبط العمليات أو المنتجات أو الخدمات المقدمة من أطراف خارجية وذات الصلة بنظام ISMS."
        },
        en: {
            q: "A bank outsourced core app development. The bank has no criteria or controls over outsourced processes and performs no security acceptance testing, claiming vendor accountability. Finding?",
            opts: [
                "Conformity, as security liability transfers entirely to the contractor under outsourced development agreements",
                "Nonconformity against Clause 8.1, because the organization shall ensure that externally provided processes, products, or services relevant to the ISMS are controlled",
                "Opportunity for Improvement (OFI) to include financial penalty clauses in future contracts",
                "Conformity, provided no active exploits have been detected in production so far"
            ],
            ans: 1,
            exp: "Clause 8.1 explicitly dictates: 'The organization shall ensure that externally provided processes, products or services that are relevant to the information security management system are controlled.'"
        }
    },
    {
        id: 63,
        ref: "ISO/IEC 27001:2022 - Clause 8.2",
        ar: {
            q: "شركة أجرت تقييم المخاطر عند تأسيس الـ ISMS قبل 3 سنوات. خلال هذه الفترة، أطلقت الشركة 4 خدمات سحابية جديدة وغيرت بنيتها التحتية بالكامل دون إجراء أي تقييم مخاطر جديد. مسؤول المخاطر أفاد: 'تقييم المخاطر المجدول بعد سنتين من الآن'. ما هو التقييم الدقيق؟",
            opts: [
                "مطابقة، طالما أن الموعد المجدول الدوري لتقييم المخاطر لم يحن بعد",
                "حالة عدم مطابقة للبند 8.2، لأن تقييم مخاطر أمن المعلومات يجب أن ينفذ في فترات زمنية مخططة أو عند اقتراح أو حدوث تغييرات جوهرية",
                "ملاحظة تحسين (OFI) لتقليل الفترة الزمنية بين التقييمات الدورية",
                "مطابقة، طالما تم تقييم البنية القديمة بنجاح"
            ],
            ans: 1,
            exp: "البند 8.2 يوجب تنفيذ تقييمات مخاطر أمن المعلومات في فترات زمنية مخططة أو عند اقتراح أو حدوث تغييرات جوهرية (Significant changes)."
        },
        en: {
            q: "A firm did a risk assessment 3 years ago. Since then, it launched 4 cloud platforms and revamped its core architecture without performing new risk assessments, waiting for a 5-year review. Ruling?",
            opts: [
                "Conformity, as long as the organization adheres to its pre-defined multi-year periodic review schedule",
                "Nonconformity against Clause 8.2, because information security risk assessments must be performed at planned intervals OR when significant changes occur",
                "Opportunity for Improvement (OFI) to shorten the baseline periodic assessment cycle",
                "Conformity, provided legacy infrastructure risk logs were formally closed"
            ],
            ans: 1,
            exp: "Clause 8.2 specifies: 'The organization shall perform information security risk assessments at planned intervals or when significant changes are proposed or occur.'"
        }
    },
    {
        id: 64,
        ref: "ISO/IEC 27001:2022 - Clause 8.3",
        ar: {
            q: "وافقت الإدارة على خطة معالجة المخاطر (RTP) التي تتضمن تركيب جدران نارية جديدة وتطبيق التشفير الشامل خلال 6 أشهر. بعد مرور عام، وجد المراجع أن 70% من الإجراءات المحددة في الخطة لم تطبق نهائياً بدون أي تبرير أو تعديل معتمد للخطة. كيف يقيّم المراجع الموقف؟",
            opts: [
                "مطابقة، لأن خطة المعالجة استرشادية وتخضع لتوفر الميزانيات التشغيلية",
                "حالة عدم مطابقة للبند 8.3، لأن المنظمة يجب أن تنفذ خطة معالجة مخاطر أمن المعلومات وتحتفظ بمعلومات موثقة لنتائج المعالجة",
                "ملاحظة تحسين (OFI) لتأجيل الموعد النهائي في الخطة لسنة قادمة",
                "عدم مطابقة للبند 6.1.2 فقط"
            ],
            ans: 1,
            exp: "البند 8.3 ينص بوضوح على: 'يجب على المنظمة تنفيذ خطة معالجة مخاطر أمن المعلومات والاحتفاظ بمعلومات موثقة عن نتائج معالجة المخاطر'."
        },
        en: {
            q: "A Risk Treatment Plan (RTP) was approved 12 months ago to deploy firewalls and encryption within 6 months. Audit revealed 70% of RTP controls were never implemented, with no justification or updates. Finding?",
            opts: [
                "Conformity, as Risk Treatment Plans serve as flexible guidance subject to budget availability",
                "Nonconformity against Clause 8.3, because the organization shall implement the information security risk treatment plan and retain documented results",
                "Opportunity for Improvement (OFI) to extend RTP completion deadlines by another year",
                "Nonconformity against Clause 6.1.2 only"
            ],
            ans: 1,
            exp: "Clause 8.3 mandates: 'The organization shall implement the information security risk treatment plan. The organization shall retain documented information of the results...'"
        }
    },
    {
        id: 65,
        ref: "ISO/IEC 27001:2022 - Annex A 5.1",
        ar: {
            q: "شركة وضعت سياسة عامة عالية المستوى لأمن المعلومات، ولكنها لم تقم بصياغة أو اعتماد أي سياسات تفصيلية نوعية (Topic-specific policies) للتحكم في الوصول، التشفير، والعمل عن بعد. مدير الأمن قال: 'السياسة العامة تغطي كل شيء'. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن السياسة العامة عالية المستوى كافية لجميع متطلبات المعيار",
                "حالة عدم مطابقة للضابط Annex A 5.1، لأن الضابط يتطلب تعريف واعتماد ونشر ومراجعة سياسة أمن المعلومات والسياسات الخاصة بمواضيع معينة (Topic-specific policies)",
                "ملاحظة تحسين (OFI) بدمج إرشادات الوصول داخل السياسة العامة",
                "مطابقة، طالما أن الموظفين يتبعون الممارسات العامة"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.1 يتطلب صراحة تعريف واعتماد ومراجعة سياسة أمن المعلومات والسياسات الخاصة بمواضيع معينة (Topic-specific policies)."
        },
        en: {
            q: "A company published a high-level Security Policy, but defined zero topic-specific policies for Access Control, Cryptography, or Remote Working, claiming the main policy covers all topics. Finding?",
            opts: [
                "Conformity, as an overarching high-level policy satisfies all Annex A policy requirements",
                "Nonconformity against Control Annex A 5.1, as the control mandates defining, approving, and reviewing both the information security policy AND topic-specific policies",
                "Opportunity for Improvement (OFI) to add access control paragraphs to the main document",
                "Conformity, provided employees follow general good security practices in daily work"
            ],
            ans: 1,
            exp: "Control A.5.1 states: 'Information security policy and topic-specific policies shall be defined, approved by management, published, communicated...'"
        }
    },
    {
        id: 66,
        ref: "ISO/IEC 27001:2022 - Annex A 5.3",
        ar: {
            q: "في قسم المالية بشركة صناعية، يمتلك موظف واحد فقط صلاحية إنشاء حسابات الموردين الجدد، اعتماد فواتير الشراء، وإجراء التحويلات المالية النقدية بدون أي مراجعة ثنائية. الإدارة أفادت بوجود نقص في عدد الموظفين. كيف يصنف المراجع الموقف؟",
            opts: [
                "مطابقة، طالما تم فحص الموظف أمنياً أثناء التعيين ووقع على اتفاقية السرية",
                "حالة عدم مطابقة للضابط Annex A 5.3، لعدم تطبيق فصل المهام (Segregation of duties) بين الصلاحيات والمسؤوليات المتعارضة لمنع الاحتيال والخطأ",
                "ملاحظة تحسين (OFI) بتنفيذ مراجعة عشوائية شهرية لحسابات الموردين",
                "مطابقة، طالما لم يتم اكتشاف أي حالات اختلاس حتى تاريخ المراجعة"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.3 ينص بوضوح على وجوب فصل المهام المتعارضة ومجالات المسؤولية المتعارضة (Segregation of duties) للحد من مخاطر الاحتيال والخطأ."
        },
        en: {
            q: "In a firm's Finance unit, a single employee creates new vendor profiles, approves purchase orders, and executes bank wire transfers with zero dual-authorization. Management cited understaffing. Ruling?",
            opts: [
                "Conformity, provided the employee underwent background screening and signed an NDA",
                "Nonconformity against Control Annex A 5.3, because conflicting duties and conflicting areas of responsibility shall be segregated (Segregation of duties)",
                "Opportunity for Improvement (OFI) to conduct random monthly spot-checks on wire transfers",
                "Conformity, provided no financial fraud or embezzlement has been recorded to date"
            ],
            ans: 1,
            exp: "Control A.5.3 explicitly dictates: 'Conflicting duties and conflicting areas of responsibility shall be segregated.'"
        }
    },
    {
        id: 67,
        ref: "ISO/IEC 27001:2022 - Annex A 5.7",
        ar: {
            q: "شركة تقنية تتعرض لهجمات سيبرانية متكررة. المراجع وجد أن الشركة لا تجمع أو تحلل أي معلومات عن التهديدات السيبرانية الخارجية (Threat Intelligence) ولا تتابع منصات الاستخبارات الأمنية لمعرفة الثغرات الجديدة. مدير الأمن قال: 'نحن نكتفي ببرامج مكافحة الفيروسات'. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن جمع استخبارات التهديدات الخارجي إجراء اختياري للمؤسسات الكبرى فقط",
                "حالة عدم مطابقة للضابط Annex A 5.7، لأن الضابط يفرض جمع وتحليل المعلومات المتعلقة بتهديدات أمن المعلومات لإنتاج استخبارات التهديدات (Threat Intelligence)",
                "ملاحظة تحسين (OFI) بالاشتراك في النشرات البريدية الأمنية المجانية",
                "مطابقة، طالما يتم تحديث برامج مكافحة الفيروسات يومياً"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.7 (جديد في إصدار 2022) يفرض جمع وتحليل المعلومات المتعلقة بتهديدات أمن المعلومات لإنتاج استخبارات التهديدات (Threat intelligence)."
        },
        en: {
            q: "A tech firm faces cyber attacks but collects no external threat intelligence data and monitors zero threat feeds, relying solely on legacy antivirus software. What is the audit finding?",
            opts: [
                "Conformity, as threat intelligence collection is an advanced optional control for large military orgs",
                "Nonconformity against Control Annex A 5.7, because information relating to information security threats shall be collected and analyzed to produce threat intelligence",
                "Opportunity for Improvement (OFI) to subscribe to free public security newsletters",
                "Conformity, provided antivirus signature definitions update on a daily basis"
            ],
            ans: 1,
            exp: "Control A.5.7 (new in 2022 edition) states: 'Information relating to information security threats shall be collected and analyzed to produce threat intelligence.'"
        }
    },
    {
        id: 68,
        ref: "ISO/IEC 27001:2022 - Annex A 5.9 & 5.10",
        ar: {
            q: "شركة تمتلك آلاف الأصول التقنية والمعلوماتية. المراجع وجد أن سجل الأصول (Asset Inventory) يحتوي على قائمة بالأجهزة فقط دون تحديد المالكين (Owners) لكل أصل أو وضع قواعد للتعامل والمقابلة المقبولة لهذه الأصول. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن حصر الأجهزة التقنية يكفي لتلبية متطلبات إدارة الأصول",
                "حالة عدم مطابقة للضابطين Annex A 5.9 و 5.10 لعدم تحديد مالكي الأصول (Owners) وعدم توثيق وتطبيق قواعد الاستخدام المقبول (Acceptable use)",
                "ملاحظة تحسين (OFI) بوضع ملصقات باركود على الأجهزة المحمولة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.9 يفرض تطوير وصيانة سجل الأصول متضمناً المالكين (Owners)، والضابط 5.10 يفرض تحديد وتوثيق وتطبيق قواعد الاستخدام المقبول."
        },
        en: {
            q: "A company's Asset Inventory lists hardware items but omits assigned Asset Owners for each entry, and has no documented Acceptable Use policy. What is the nonconformity?",
            opts: [
                "Conformity, as maintaining a raw hardware count fulfills asset management expectations",
                "Nonconformity against Controls Annex A 5.9 and 5.10 for failing to include asset owners in the inventory and define rules for acceptable use",
                "Opportunity for Improvement (OFI) to affix barcode labels onto company laptops",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.5.9 mandates maintaining an inventory of assets 'including owners', and Control A.5.10 mandates rules for acceptable use."
        }
    },
    {
        id: 69,
        ref: "ISO/IEC 27001:2022 - Annex A 5.12 & 5.13",
        ar: {
            q: "مؤسسة قامت بتصنيف البيانات إلى (سرية، خاصة، عامة)، لكن أثناء المراجعة الميدانية، تبين أن جميع المستندات المطبوعة والملفات الإلكترونية المخزنة على الخوادم لا تحمل أي علامات أو ملصقات تصنيف (Labelling)، ولا يعرف الموظفون كيفية تمييز المستند السري. ما هو تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن مخطط التصنيف (Classification scheme) موثق ومعتمد في السياسة",
                "حالة عدم مطابقة للضابط Annex A 5.13، لعدم تطوير وتطبيق إجراءات مناسبة لتعليم وتأشير المعلومات (Information labelling) وفق مخطط التصنيف",
                "ملاحظة تحسين (OFI) بإضافة كلمة سر للملفات السرية",
                "مطابقة، طالما يتم حفظ المستندات الورقية في خزائن مغلقة"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.13 ينص على وجوب تطوير وتطبيق مجموعة إجراءات مناسبة لتعليم وتأشير المعلومات (Information labelling) وفق مخطط التصنيف المعتمد."
        },
        en: {
            q: "An org defined a Data Classification scheme (Confidential, Internal, Public). However, zero physical papers or digital files feature classification labels, and staff cannot visually distinguish confidential files. Finding?",
            opts: [
                "Conformity, provided the classification definitions are properly documented in the policy",
                "Nonconformity against Control Annex A 5.13, for failing to develop and implement procedures for information labelling in accordance with the classification scheme",
                "Opportunity for Improvement (OFI) to apply password protection on confidential Word files",
                "Conformity, provided physical paper files are stored in locked filing cabinets"
            ],
            ans: 1,
            exp: "Control A.5.13 states: 'An appropriate set of procedures for information labelling shall be developed and implemented in accordance with the information classification scheme...'"
        }
    },
    {
        id: 70,
        ref: "ISO/IEC 27001:2022 - Annex A 6.1",
        ar: {
            q: "شركة وظفت 5 مهندسي شبكات يمتلكون صلاحيات كاملة على البنية التحتية. المراجع وجد أن الشركة لم تجرِ أي فحوصات للتحقق من خلفية الموظفين (Screening / Background checks) قبل التعيين، واكتفت بالسيرة الذاتية. مدير HR قال: 'الفحص الأمني يخالف الثقة بيننا وبين الموظف'. ما القرار؟",
            opts: [
                "مطابقة، لأن الفحص الأمني إجراء اختياري يخضع لتقدير قسم الموارد البشرية",
                "حالة عدم مطابقة للضابط Annex A 6.1، لأن عمليات التثبت والتحقق من الخلفية (Screening) يجب أن تجرى لجميع المرشحين قبل الانضمام وبشكل مستمر",
                "ملاحظة تحسين (OFI) يطلب التثبت من صحة المؤهلات الأكاديمية فقط",
                "مطابقة، طالما وقع الموظفون على عقد العمل الرسمي"
            ],
            ans: 1,
            exp: "الضابط Annex A 6.1 ينص على وجوب إجراء عمليات التحقق والتثبت من الخلفية (Screening) لجميع المرشحين للعمل قبل الانضمام وبشكل مستمر."
        },
        en: {
            q: "A firm hired 5 sysadmins with full root access without performing background verification checks, relying solely on CVs. HR claimed background checks breach employee trust. Verdict?",
            opts: [
                "Conformity, as candidate background screening lies entirely within HR's discretionary hiring mandate",
                "Nonconformity against Control Annex A 6.1, because background verification checks on all candidates shall be carried out prior to joining the organization and on an ongoing basis",
                "Opportunity for Improvement (OFI) to verify academic university degrees only",
                "Conformity, provided new hires signed standard employment contracts"
            ],
            ans: 1,
            exp: "Control A.6.1 explicitly states: 'Background verification checks on all candidates to become personnel shall be carried out prior to joining the organization and on an ongoing basis...'"
        }
    },
    {
        id: 71,
        ref: "ISO/IEC 27001:2022 - Annex A 6.2",
        ar: {
            q: "عقود العمل في شركة تقنية لا تحتوي على أي نص أو بند يوضح مسؤوليات الموظف أو الشركة تجاه أمن المعلومات وحماية البيانات. مدير الشؤون القانونية قال: 'نحن نكتفي بتوقيع الموظف على سياسة الأمن بشكل منفصل'. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن توقيع سياسة الأمن منفصلة يعوض عن ذكرها في عقد العمل",
                "حالة عدم مطابقة للضابط Annex A 6.2، لأن الاتفاقيات التعاقدية للتوظيف (Employment contractual agreements) يجب أن تنص على مسؤوليات الموظف والمنظمة تجاه أمن المعلومات",
                "ملاحظة تحسين (OFI) بإضافة الملحق في التجديد القادم",
                "مطابقة، طالما قانون العمل المحلي لا يفرض ذلك"
            ],
            ans: 1,
            exp: "الضابط Annex A 6.2 يفرض صراحة أن تنص الاتفاقيات التعاقدية للتوظيف (Employment contractual agreements) على مسؤوليات الموظف والمنظمة تجاه أمن المعلومات."
        },
        en: {
            q: "Employment contracts contain zero terms regarding information security responsibilities for the employee or company. Legal claimed separate policy sign-offs replace contract clauses. Finding?",
            opts: [
                "Conformity, as signing a standalone security policy document legally replaces employment contract terms",
                "Nonconformity against Control Annex A 6.2, because employment contractual agreements shall state the personnel's and organization's responsibilities for information security",
                "Opportunity for Improvement (OFI) to attach policy annexes during contract renewals",
                "Conformity, provided local labor law does not explicitly compel cybersecurity clauses"
            ],
            ans: 1,
            exp: "Control A.6.2 dictates: 'The employment contractual agreements shall state the personnel's and the organization's responsibilities for information security.'"
        }
    },
    {
        id: 72,
        ref: "ISO/IEC 27001:2022 - Annex A 6.4",
        ar: {
            q: "موظف قام بتسريب بيانات غير حساسة عمداً لزميله المخالف لسياسة الأمن. إدارة الشركة قامت بخصم أسبوعين من راتبه فوراً. المراجع وجد أن الشركة لا تملك أي إجراء موثق ومُعلن للعملية التأديبية (Disciplinary process) للمخالفات الأمنية. ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن الإدارة اتخذت إجراءً عقابياً فعلياً وحازماً ضد المخالف",
                "حالة عدم مطابقة للضابط Annex A 6.4، لعدم وجود عملية تأديبية رسمية وموثقة ومُعلنة (Formalized & Communicated disciplinary process) لاتخاذ الإجراءات ضد مخالفي السياسة",
                "ملاحظة تحسين (OFI) بتخفيف العقوبة المالية",
                "مطابقة، طالما الخصم يتوافق مع قانون العمل"
            ],
            ans: 1,
            exp: "الضابط Annex A 6.4 ينص على وجوب إضفاء الطابع الرسمي وإبلاغ عملية تأديبية (Formalized and communicated disciplinary process) لاتخاذ الإجراءات ضد مخالفي السياسة."
        },
        en: {
            q: "An employee intentionally leaked non-sensitive data. Management docked 2 weeks' pay. Auditor found no formalized or communicated disciplinary process for security violations existed. Finding?",
            opts: [
                "Conformity, provided management took decisive, actual punitive action against the violator",
                "Nonconformity against Control Annex A 6.4, because a disciplinary process shall be formalized and communicated to take action against security policy violators",
                "Opportunity for Improvement (OFI) suggesting reducing the financial penalty severity",
                "Conformity, provided salary deductions comply with local statutory labor codes"
            ],
            ans: 1,
            exp: "Control A.6.4 dictates: 'A disciplinary process shall be formalized and communicated to take actions against personnel... who have committed an information security policy violation.'"
        }
    },
    {
        id: 73,
        ref: "ISO/IEC 27001:2022 - Annex A 6.6",
        ar: {
            q: "شركة تتعامل مع بيانات مالية عالية السرية. المراجع وجد أن موظفي التطوير والمتعاقدين الخارجيين لم يوقعوا على أي اتفاقيات عدم إفشاء أو سرية (NDAs / Confidentiality agreements). مدير HR قال: 'عقد التوظيف العام يتضمن بند طاعة الأوامر وهو كافٍ'. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن بند طاعة الأوامر العام في العقد يحل محل اتفاقيات السرية",
                "حالة عدم مطابقة للضابط Annex A 6.6، لعدم تحديد وتوثيق ومراجعة وتوقيع اتفاقيات السرية أو عدم الإفشاء (NDAs) التي تعكس احتياجات الحماية",
                "ملاحظة تحسين (OFI) بتوقيع NDAs للمتعاقدين الخارجيين فقط",
                "مطابقة، طالما لم يتم تسريب أي بيانات إلكترونية"
            ],
            ans: 1,
            exp: "الضابط Annex A 6.6 يفرض تحديد وتوثيق ومراجعة وتوقيع اتفاقيات السرية أو عدم الإفشاء (Confidentiality or non-disclosure agreements) التي تعكس احتياجات المنظمة."
        },
        en: {
            q: "A financial firm handles top-secret client ledgers. Neither developers nor external contractors signed Non-Disclosure Agreements (NDAs). HR cited standard obedience clauses. Ruling?",
            opts: [
                "Conformity, as general duty-of-loyalty clauses in labor contracts supersede dedicated NDAs",
                "Nonconformity against Control Annex A 6.6, because confidentiality or non-disclosure agreements reflecting protection needs shall be identified, documented, reviewed, and signed",
                "Opportunity for Improvement (OFI) to require NDAs for external contractors exclusively",
                "Conformity, provided no unauthorized data leaks have occurred historically"
            ],
            ans: 1,
            exp: "Control A.6.6 states: 'Confidentiality or non-disclosure agreements reflecting the organization's needs... shall be identified, documented, regularly reviewed and signed...'"
        }
    },
    {
        id: 74,
        ref: "ISO/IEC 27001:2022 - Annex A 6.7",
        ar: {
            q: "شركة سمحت لجميع موظفيها بالعمل عن بُعد (Remote working) باستخدام أجهزتهم الشخصية والتوصيل بشبكات Wi-Fi عامة بدون استخدام VPN أو تشفير الأقراص أو توفير ضوابط أمنية لحماية البيانات المخزنة والمقروءة خارج مقر الشركة. ما تصنيف الخلل؟",
            opts: [
                "مطابقة، لأن العمل عن بعد يخضع لراحة الموظف ومسؤوليته الشخصية",
                "حالة عدم مطابقة للضابط Annex A 6.7، لعدم تطبيق التدابير والضوابط الأمنية عند العمل عن بعد لحماية المعلومات المعالجة أو المخزنة خارج مقر المنظمة",
                "ملاحظة تحسين (OFI) بدفع بدل إنترنت للموظفين لشراء شبكات خاصة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 6.7 ينص على وجوب تنفيذ التدابير الأمنية عند عمل الأفراد عن بُعد لحماية المعلومات التي يتم الوصول إليها أو معالجتها أو تخزينها خارج مقر المنظمة."
        },
        en: {
            q: "A firm permitted remote work via personal laptops over public Wi-Fi without VPN, full-disk encryption, or remote-wipe policies. CISO claimed home security is user responsibility. Finding?",
            opts: [
                "Conformity, as remote working environments fall outside corporate perimeter liability",
                "Nonconformity against Control Annex A 6.7, because security measures shall be implemented when personnel are working remotely to protect information accessed/stored off-site",
                "Opportunity for Improvement (OFI) to provide internet stipends for private home broadband",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.6.7 explicitly states: 'Security measures shall be implemented when personnel are working remotely to protect information accessed, processed or stored outside...'"
        }
    },
    {
        id: 75,
        ref: "ISO/IEC 27001:2022 - Annex A 7.1 & 7.2",
        ar: {
            q: "غرفة الخوادم الرئيسية (Data Center) في شركة بنكية تقع في ممر مفتوح بجوار مكتب الاستقبال، والدخول إليها يتم بمفتاح عادي يحتفظ به عمال النظافة بدون أجهزة بطاقات ممغنطة أو سجلات دخول أو حدود أمنية محددة. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، طالما أن الباب مغلق والمفتاح موزع على أشخاص موثوقين",
                "حالة عدم مطابقة للضابطين Annex A 7.1 و 7.2 لعدم تعريف واستخدام محيط أمني (Security perimeters) وعدم حماية المناطق الآمنة بضوابط دخول مناسبة",
                "ملاحظة تحسين (OFI) بتغيير المفتاح العادي كل 6 أشهر",
                "مطابقة، طالما توجد كاميرا مراقبة واحدة تعمل في الممر"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.1 يفرض تعريف واستخدام حدود ومحيط أمني (Security perimeters)، والضابط 7.2 يفرض حماية المناطق الآمنة بضوابط دخول ونقاط دخول مناسبة."
        },
        en: {
            q: "A bank's main server room sits off the lobby, secured by a mechanical key held by cleaning staff, lacking electronic access cards, logs, or defined security perimeters. Verdict?",
            opts: [
                "Conformity, provided the door stays locked and key holders are trusted internal staff",
                "Nonconformity against Controls Annex A 7.1 and 7.2, for failing to define physical security perimeters and protect secure areas with appropriate entry controls",
                "Opportunity for Improvement (OFI) to replace the mechanical lock core bi-annually",
                "Conformity, provided a single CCTV camera monitors the exterior hallway"
            ],
            ans: 1,
            exp: "Control A.7.1 dictates defining security perimeters, and Control A.7.2 mandates protecting secure areas by appropriate entry controls."
        }
    },
    {
        id: 76,
        ref: "ISO/IEC 27001:2022 - Annex A 7.3",
        ar: {
            q: "شركة تقنية تقع في مبنى يضم مكاتب متعددة لشركات أجنبية. المراجع وجد أن زوار الشركات الأخرى يستطيعون المرور والدخول المباشر لمكاتب التطوير بالشركة دون تسجيل دخول أو الحصول على تصريح أو بطاقات زوار. ما هو تصنيف الخلل؟",
            opts: [
                "مطابقة، طالما أن المكاتب تقع في مبنى تجاري مؤمن بحراسة عمومية",
                "حالة عدم مطابقة للضابط Annex A 7.3، لعدم تصميم وتطبيق حماية فيزيائية ضد الأخطار الطبيعية والتهديدات البيئية والتعديات الخارجية على المكاتب والمرافق",
                "ملاحظة تحسين (OFI) بوضع لافتة ممنوع الدخول على الباب الخارجي",
                "مطابقة، طالما المكاتب مغلقة بالزجاج"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.3 يتطلب توفير وتصميم الحماية الفيزيائية للمكاتب والمرافق وتأمين نقاط الوصول لمنع الدخول غير المصرح به."
        },
        en: {
            q: "A tech firm in a multi-tenant building allows visitors from other companies to freely walk into its software development floor without registration or visitor badges. Finding?",
            opts: [
                "Conformity, provided the commercial building operates general security guards at the ground floor",
                "Nonconformity against Control Annex A 7.3, for failing to design and implement physical security for offices, rooms and facilities against unauthorized access",
                "Opportunity for Improvement (OFI) to place a 'No Entry' sign on the entrance door",
                "Conformity, provided office partitions feature glass panels"
            ],
            ans: 1,
            exp: "Control A.7.3 mandates designing and implementing physical security for offices, rooms, and facilities against unauthorized physical access."
        }
    },
    {
        id: 77,
        ref: "ISO/IEC 27001:2022 - Annex A 7.4",
        ar: {
            q: "غرفة الخوادم بشركة اتصالات تقع في البدروم السفلي بدون أي أجهزة إنذار ضد تسرب المياه أو حساسات حرارة وضغط، وتعرضت للغرق التام بسبب فيضان أنابيب المياه المجاورة. الشركة لم تقم بتقييم مخاطر الكوارث البيئية للموقع. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن انكسار أنابيب المياه حادث طبيعي مفاجئ لا يمكن التنبؤ به",
                "حالة عدم مطابقة للضابط Annex A 7.4، لعدم تصميم وتطبيق حماية فيزيائية ضد التهديدات البيئية والكوارث الطبيعية والأخطار الفيزيائية المتوقعة",
                "ملاحظة تحسين (OFI) بنقل الغرفة للدور الأعلى بعد السيطرة على المياه",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.4 يفرض حماية الأصول والمرافق من التهديدات البيئية والكوارث الطبيعية والمخاطر الفيزيائية المحتملة."
        },
        en: {
            q: "A data center located in a basement flooded due to burst water pipes. The site had zero water leak sensors or environmental risk controls. How is this finding classified?",
            opts: [
                "Conformity, as plumbing pipe bursts constitute unforeseen natural events",
                "Nonconformity against Control Annex A 7.4, for failing to design and implement physical protection against environmental threats and natural disasters",
                "Opportunity for Improvement (OFI) to relocate servers to higher floors post-cleanup",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.7.4 requires designing and implementing physical protection against physical and environmental threats."
        }
    },
    {
        id: 78,
        ref: "ISO/IEC 27001:2022 - Annex A 7.8",
        ar: {
            q: "أثناء المراجعة في موقع مبنى الإدارة الرئيسية، وجد المراجع أن كابلات الشبكة والطاقة المغذية لخوادم البنك معروضة مكشوفة في الطرقات الخارجية دون أنبوب حماية أو دفن آمن، مما يجعلها عرضة للقطع أو التنصت الفيزيائي. ما تصنيف الخلل؟",
            opts: [
                "مطابقة، طالما لم تتعرض الكابلات لأي قطع تشغيلي حتى تاريخه",
                "حالة عدم مطابقة للضابط Annex A 7.8، لعدم حماية كابلات الطاقة والاتصالات بشكل كافٍ من الاعتراض أو التداخل أو التلف الفيزيائي",
                "ملاحظة تحسين (OFI) بتغطية الكابلات بشريط لاصق ملون",
                "مطابقة، طالما تم استخدام كابلات ألياف ضوئية"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.8 يفرض حماية كابلات الطاقة والاتصالات التي تنقل البيانات أو تدعم الخدمات من الاعتراض أو التداخل أو الضرر."
        },
        en: {
            q: "Data and power cables feeding bank servers hang exposed in public hallways without conduit protection, vulnerable to physical tapping or damage. Finding?",
            opts: [
                "Conformity, provided no cable disruptions have occurred historically",
                "Nonconformity against Control Annex A 7.8, for failing to protect power and telecommunications cabling from interception, interference, or damage",
                "Opportunity for Improvement (OFI) to wrap cabling with colored electrical tape",
                "Conformity, provided fiber optic cabling was selected"
            ],
            ans: 1,
            exp: "Control A.7.8 explicitly dictates protecting cabling carrying power or data from interception, interference, or physical damage."
        }
    },
    {
        id: 79,
        ref: "ISO/IEC 27001:2022 - Annex A 7.9",
        ar: {
            q: "شركة تعتمد على سيرفرات داخلية لتشغيل أعمالها. المراجع وجد أن المعدات والأجهزة الخادمة لا تخضع لأي صيانة دورية وقائية من المورد المعتمد، وتعمل في بيئة مليئة بالأتربة دون مراقبة لدرجات الحرارة. مدير IT قال: 'نحن نتدخل فقط عند تعطل الجهاز'. ما القرار؟",
            opts: [
                "مطابقة، لأن الصيانة العلاجية عند الأعطال يوفر تكاليف عقود الصيانة",
                "حالة عدم مطابقة للضابط Annex A 7.9، لعدم صيانة المعدات بشكل صحيح وضمان توافرها وسلامتها المستمرة وفقاً للتوصيات",
                "ملاحظة تحسين (OFI) بشراء مراوح تبريد مكتبية وتوجيهها نحو السيرفر",
                "مطابقة، طالما لا توجد أجهزة متوقفة حالياً"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.9 ينص بوضوح على وجوب صيانة المعدات بشكل صحيح لضمان توافرها وسلامتها المستمرة."
        },
        en: {
            q: "Server hardware undergoes zero preventive maintenance, running in dusty, unmonitored room temperatures. IT stated they repair hardware only post-failure. Assessment?",
            opts: [
                "Conformity, as break-fix reactive maintenance reduces contract costs",
                "Nonconformity against Control Annex A 7.9, for failing to maintain equipment correctly to ensure its continued availability and integrity",
                "Opportunity for Improvement (OFI) to point desktop fans at the servers",
                "Conformity, provided all server racks operate currently without errors"
            ],
            ans: 1,
            exp: "Control A.7.9 mandates: 'Equipment shall be maintained correctly to ensure its continued availability and integrity.'"
        }
    },
    {
        id: 80,
        ref: "ISO/IEC 27001:2022 - Annex A 7.12",
        ar: {
            q: "قام أحد الفنيين بتأجير جهاز كمبيوتر محمول مملوك للشركة لأحد المعارف لاستخدامه في أداء أعمال شخصية خارج مقر العمل دون إذن أو تصريح من إدارة أمن المعلومات. الشركة لا تملك أي سياسة أو ضوابط لحماية الأصول الواقعة خارج المقر (Off-site assets). ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن الجهاز لم يتضمن بيانات سرية للغاية",
                "حالة عدم مطابقة للضابط Annex A 7.12، لعدم حماية الأصول والمعدات الواقعة خارج مقر المنظمة مع مراعاة المخاطر المختلفة للعمل خارج الموقع",
                "ملاحظة تحسين (OFI) بتنبيه الفني شفهياً بعدم تكرار الإعارة",
                "مطابقة، طالما تم استعادة الجهاز بنفس الحالة"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.12 يفرض حماية الأصول والمعدات الواقعة خارج مقر المنظمة وتطبيق ضوابط أمنية تتناسب مع مخاطر بيئة العمل الخارجية."
        },
        en: {
            q: "A tech loaned a company-owned laptop to an acquaintance for personal use outside office grounds without authorization. No off-site asset protection controls exist. Finding?",
            opts: [
                "Conformity, provided the laptop did not store highly confidential files",
                "Nonconformity against Control Annex A 7.12, for failing to protect off-site assets and equipment considering differing risks of working outside premises",
                "Opportunity for Improvement (OFI) to give the tech a verbal warning",
                "Conformity, provided the laptop was returned undamaged"
            ],
            ans: 1,
            exp: "Control A.7.12 mandates protecting off-site assets, taking into account the different risks of working outside the organization's premises."
        }
    },
    {
        id: 81,
        ref: "ISO/IEC 27001:2022 - Annex A 8.1",
        ar: {
            q: "موظفو تطوير البرمجيات بالشركة يتصلون بشبكة الإنتاج الحية باستخدام أجهزتهم الذكية الشخصية (BYOD) عبر شبكات مفتوحة دون تقييد الوصول أو استخدام أجهزة طرفية آمنة ومصرح بها (User endpoint devices). ما التصنيف المنهجي؟",
            opts: [
                "مطابقة، لأن سياسات BYOD تعزز مرونة وسرعة إنتاجية الموظفين",
                "حالة عدم مطابقة للضابط Annex A 8.1، لعدم حماية المعلومات المعالجة أو المخزنة أو المارة عبر أجهزة المستخدم الطرفية (User endpoint devices)",
                "ملاحظة تحسين (OFI) بحظر استخدام شبكات الواي فاي الشائعة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.1 (جديد في 2022) يفرض حماية المعلومات المعالجة أو المخزنة أو المارة عبر أجهزة المستخدم الطرفية (User endpoint devices)."
        },
        en: {
            q: "Engineers access live production infrastructure via personal smartphones over open networks without endpoint management or device security baselines. Finding?",
            opts: [
                "Conformity, as BYOD frameworks improve developer productivity and agility",
                "Nonconformity against Control Annex A 8.1, for failing to protect information processed, stored, or accessible via user endpoint devices",
                "Opportunity for Improvement (OFI) to restrict public guest Wi-Fi access",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.1 (introduced in 2022) mandates protecting information processed, stored, or accessible through user endpoint devices."
        }
    },
    {
        id: 82,
        ref: "ISO/IEC 27001:2022 - Annex A 8.3",
        ar: {
            q: "شركة طيران لا تملك أي سياسة أو ضوابط لمنع أو تقييد ربط وسائط التخزين الخارجية (مثل الفلاشات والأقراص المحمولة) بأجهزة الموظفين، ويقوم الموظفون بنقل ملفات التشغيل بحرية دون أي فحص أو تقييد للوصول (Access restriction). ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن نقل البيانات بوسائط التخزين المحمولة جزء طبيعي من العمل اليومي",
                "حالة عدم مطابقة للضابط Annex A 8.3، لعدم تقييد وإدارة استخدام وسائط التخزين القابلة للإزالة (Removable media) وفقاً لسياسة التحكم بالوصول",
                "ملاحظة تحسين (OFI) بتشفير الفلاشات المملوكة للشركة فقط",
                "مطابقة، طالما تم تثبيت برنامج مكافحة الفيروسات على الأجهزة"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.3 يوجب تقييد وإدارة استخدام وسائط التخزين القابلة للإزالة (Removable media) لحماية البيانات من النقل غير المصرح به."
        },
        en: {
            q: "An airline places zero restrictions or policies on connecting USB removable drives to corporate PCs, letting staff copy files freely. Ruling?",
            opts: [
                "Conformity, as portable storage drive usage represents standard office routines",
                "Nonconformity against Control Annex A 8.3, for failing to restrict and manage the use of removable media in accordance with access control rules",
                "Opportunity for Improvement (OFI) to encrypt company-issued USB drives exclusively",
                "Conformity, provided client endpoint antivirus is active"
            ],
            ans: 1,
            exp: "Control A.8.3 mandates restricting and managing the allocation and usage of removable media according to the access control policy."
        }
    },
    {
        id: 83,
        ref: "ISO/IEC 27001:2022 - Annex A 8.4",
        ar: {
            q: "عند مطالبة المراجع بسجلات الوصول والعمليات المنفذة على خوادم قاعدة البيانات المالية، أفاد مسؤول الشبكات بأن النظام يكتفي بتسجيل عمليات تسجيل الدخول الناجحة فقط، ولا يسجل المحاولات الفاشلة أو عمليات التعديل والحذف التي ينفذها الأدمن. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن تسجيل عمليات الدخول الناجحة يتطلب مساحة تخزين أقل ويحقق الغرض",
                "حالة عدم مطابقة للضابط Annex A 8.4، لعدم تسجيل وحماية ومراجعة سجلات الأحداث (Event logging) التي تشمل الأنشطة والاستثناءات والأحداث الأمنية",
                "ملاحظة تحسين (OFI) بشراء سيرفر تخزين سجلات إضافي",
                "عدم مطابقة للبند 7.5.3 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.4 يفرض تسجيل وإنتاج وحفظ وحماية ومراجعة سجلات الأحداث (Event logging) التي ترصد أنشطة المستخدمين والأحداث الأمنية والاستثناءات."
        },
        en: {
            q: "DB audit logs record successful logins only, omitting failed attempts, data modifications, or admin deletions. IT cited storage space savings. Finding?",
            opts: [
                "Conformity, as recording successful authentications optimizes log storage efficiency",
                "Nonconformity against Control Annex A 8.4, for failing to produce, retain, protect, and review event logs recording user activities and security events",
                "Opportunity for Improvement (OFI) to procure dedicated log archive drives",
                "Nonconformity against Clause 7.5.3 only"
            ],
            ans: 1,
            exp: "Control A.8.4 requires producing, retaining, protecting, and analyzing event logs that record activities, exceptions, faults, and security events."
        }
    },
    {
        id: 84,
        ref: "ISO/IEC 27001:2022 - Annex A 8.6",
        ar: {
            q: "شركة تقنية تستخدم أنظمة خوادم متعددة، وتبين أثناء المراجعة أن الساعة الداخلية لكل خادم تختلف عن الآخر بفارق زمني يصل إلى 15 دقيقة لعدم ربط السيرفرات بمصدر توقيت موحد (NTP/Clock synchronization). ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما أن الفارق الزمني بسيط ولا يتجاوز ساعة كاملة",
                "حالة عدم مطابقة للضابط Annex A 8.6، لعدم مزامنة الساعات الزمانية (Clock synchronization) للأنظمة ومرافق معالجة المعلومات مع مصادر توقيت معتمدة",
                "ملاحظة تحسين (OFI) بتعديل توقيت الخوادم يدوياً كل شهر",
                "مطابقة، طالما أن التوقيت المحلي للمدينة صحيح"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.6 يوجب مزامنة الساعات الزمانية (Clock synchronization) لكافة أنظمة ومرافق المعالجة مع مصادر توقيت دقيقة وموثوقة لضمان صحة التحقيقات والسجلات."
        },
        en: {
            q: "Server clocks across a banking cluster drift by up to 15 minutes due to lacking a centralized Network Time Protocol (NTP) source. Assessment?",
            opts: [
                "Conformity, provided system time drift remains under one full hour",
                "Nonconformity against Control Annex A 8.6, for failing to synchronize system clocks with reference time sources",
                "Opportunity for Improvement (OFI) to manually adjust server clocks bi-monthly",
                "Conformity, provided local workstation times display accurately"
            ],
            ans: 1,
            exp: "Control A.8.6 mandates synchronizing the clocks of information processing systems with precise reference time sources (NTP)."
        }
    },
    {
        id: 85,
        ref: "ISO/IEC 27001:2022 - Annex A 8.7",
        ar: {
            q: "أثناء فحص خوادم تطوير البرمجيات، وجد المراجع أن الحسابات العامة وأدوات التشغيل المساعدة (Utility programs) التي تمتلك صلاحيات الوصول المباشر للذاكرة والتجاوز عن ضوابط النظام متاحة لجميع المطورين دون قيود أو مراقبة استخدام. ما القرار؟",
            opts: [
                "مطابقة، لأن المطورين بحاجة لأدوات النظام المساعدة لإصلح أخطاء البرمجة",
                "حالة عدم مطابقة للضابط Annex A 8.7، لعدم تقييد وإدارة استخدام البرامج الخدمية وأدوات النظام المساعدة (Installation of software / System utilities) التي قد تتجاوز ضوابط الأمان",
                "ملاحظة تحسين (OFI) بحذف الأداة بعد الانتهاء من المشروع",
                "مطابقة، طالما تم شراء الأدوات من مصادر موثوقة"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.7 يفرض تقييد وضبط استخدام برامج أدوات النظام المساعدة (System utilities) التي تملك القدرة على تجاوز ضوابط أمان النظام."
        },
        en: {
            q: "Powerful system utility programs capable of bypassing OS security controls are unrestricted and accessible to all developers on staging servers. Verdict?",
            opts: [
                "Conformity, as developers require high-privilege system utilities for deep memory debugging",
                "Nonconformity against Control Annex A 8.7, for failing to restrict and tightly control the use of utility programs that can override system controls",
                "Opportunity for Improvement (OFI) to uninstall tools after project delivery",
                "Conformity, provided system utility software was sourced from reputable vendors"
            ],
            ans: 1,
            exp: "Control A.8.7 explicitly dictates: 'The use of utility programs that might be capable of overriding system and application controls shall be restricted and tightly controlled.'"
        }
    },
    {
        id: 86,
        ref: "ISO/IEC 27001:2022 - Annex A 8.10",
        ar: {
            q: "شركة برمجية تمتلك سيرفرات معالجة سحابية، وتعمل على حماية بيانات العملاء أثناء التخزين والنقل. لكن المراجع وجد أن الشركة لا تطبق أي ضوابط لحذف وحجب البيانات بشكل آمن (Information deletion) عند طلب العملاء أو عند انتهاء فترة الاحتفاظ القانونية. ما التصنيف؟",
            opts: [
                "مطابقة، لأن الاحتفاظ بالبيانات للأبد يعزز الأرشيف المالي للشركة",
                "حالة عدم مطابقة للضابط Annex A 8.10، لعدم إنشاء وتطبيق آليات للحذف الآمن للمعلومات (Information deletion) المعتمدة على متطلبات التخزين واللوائح",
                "ملاحظة تحسين (OFI) بنقل البيانات القديمة إلى مجلد مهملات عام",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.10 (جديد في 2022) يتطلب حذف المعلومات المخزنة في الأنظمة والمرافق بشكل آمن فور انتهاء الحاجة إليها أو وفق اللوائح."
        },
        en: {
            q: "A SaaS provider has zero processes or automated routines for secure information deletion upon customer contract termination or retention expiry. Finding?",
            opts: [
                "Conformity, as perpetual data retention safeguards corporate archival historical records",
                "Nonconformity against Control Annex A 8.10, for failing to implement secure information deletion per retention rules and legal mandates",
                "Opportunity for Improvement (OFI) to move expired data into an unencrypted archive folder",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.10 (introduced in 2022) mandates: 'Information stored in information systems, devices or in any other storage media shall be deleted when no longer required.'"
        }
    },
    {
        id: 87,
        ref: "ISO/IEC 27001:2022 - Annex A 8.14",
        ar: {
            q: "مركز بيانات بنكي لا يمتلك أي مراقبة أو إعادة توجيه مسار لحركة السيرفرات والأجهزة الحساسة، ويستخدم تقنية الشبكة المسطحة (Flat network) حيث ترتبط كافة أجهزة الموظفين وسيرفرات المعاملات وسيرفرات التطوير بنطاق شبكي واحد. ما هو التقييم؟",
            opts: [
                "مطابقة، لأن الشبكات المسطحة تبسط إجراءات الصيانة وتسهل النقل",
                "حالة عدم مطابقة للضابطين Annex A 8.14 و 8.22، لعدم تقطيع وفصل الشبكات (Redundancy / Segregation in networks) وعدم حماية الخدمات والأنظمة الحساسة بتجزئة الشبكات",
                "ملاحظة تحسين (OFI) بوضع كلمة سر معقدة على الراوتر الرئيسي",
                "مطابقة، طالما تم تركيب جدار ناري خارجي واحد"
            ],
            ans: 1,
            exp: "الضوابط Annex A 8.14 و 8.22 تفرض إعادة التكرارية وفصل وتجزئة الشبكات (Redundancy & Segregation of networks) لحماية الأنظمة والمجموعات الحساسة."
        },
        en: {
            q: "A bank runs a completely flat internal network topology where user PCs, core transaction servers, and guest Wi-Fi share a single VLAN without isolation. Finding?",
            opts: [
                "Conformity, as flat network architecture streamlines routing and reduces hardware latency",
                "Nonconformity against Controls Annex A 8.14 and 8.22, for failing to enforce network segregation and redundancy controls for sensitive systems",
                "Opportunity for Improvement (OFI) to set complex admin passwords on core routers",
                "Conformity, provided a perimeter firewall guards the internet pipe"
            ],
            ans: 1,
            exp: "Controls A.8.14 and A.8.22 mandate network segregation (isolating groups of information services, users and systems) and network redundancy."
        }
    },
    {
        id: 88,
        ref: "ISO/IEC 27001:2022 - Annex A 8.15",
        ar: {
            q: "شركة طيران تستخدم تطبيقات موقعها الإلكتروني لمعالجة الحجوزات. المراجع وجد أن التطبيق لا يطبق أي آليات لتصفية وفحص مدخلات المستخدمين (Input validation)، مما سمح بظهور ثغرات حقن الاستعلامات (SQL Injection) وااختراق بيانات الركاب. ما القرار المنهجي؟",
            opts: [
                "مطابقة، طالما أن المبرمجين يقومون بمعالجة الأخطاء فور الإبلاغ عنها",
                "حالة عدم مطابقة للضابطين Annex A 8.15 و 8.28، لعدم تطبيق قواعد البرمجة والترميز الآمن (Secure coding) وعدم حماية التطبيقات من الثغرات المعروفة",
                "ملاحظة تحسين (OFI) بإعادة كتابة الواجهة باستخدام لغة برمجة أخرى",
                "مطابقة، طالما أن السيرفر محمي بنظام نسخ احتياطي"
            ],
            ans: 1,
            exp: "الضوابط Annex A 8.15 و 8.28 يفرضان تطبيق قواعد الترميز البرمجي الآمن (Secure coding) وفحص المدخلات لحماية التطبيقات من الثغرات البرمجية."
        },
        en: {
            q: "A passenger booking web portal lacks input validation, allowing SQL injection attacks that exposed flight rosters. What is the audit finding?",
            opts: [
                "Conformity, provided software developers patch vulnerabilities whenever bugs are reported",
                "Nonconformity against Controls Annex A 8.15 and 8.28, for failing to enforce secure coding principles and protect application software against input vulnerabilities",
                "Opportunity for Improvement (OFI) to rewrite the front-end interface in a different framework",
                "Conformity, provided daily backups protect the SQL database"
            ],
            ans: 1,
            exp: "Controls A.8.15 and A.8.28 mandate applying secure coding principles during software development to prevent input manipulation exploits."
        }
    },
    {
        id: 89,
        ref: "ISO/IEC 27001:2022 - Annex A 8.16",
        ar: {
            q: "شركة تقنية طورت تطبيقاً بنكياً، وتبين أثناء المراجعة أن اختبارات الأمان التشغيلية لا تجرى إلا في البيئة الحية (Production) بعد إطلاق الخدمة للجمهور لعدم توفر بيئة اختبار مخصصة. مدير التطوير أفاد: 'البيئة الحية تعطي النتائج الأدق'. ما هو التصنيف؟",
            opts: [
                "مطابقة، لأن اختبار الأنظمة في البيئة الحية يضمن اكتشاف الأخطاء الواقعية",
                "حالة عدم مطابقة للضابط Annex A 8.16، لعدم إجراء اختبارات أمنية واستعراض للأنظمة في بيئة اختبار مخصصة ومستقلة أثناء عملية التطوير (Security testing in development)",
                "ملاحظة تحسين (OFI) بإجراء الاختبارات ليلاً في أوقات خفض الحركة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.16 يفرض إجراء اختبارات الأمان وتحديد المتطلبات الأمنية واختبارها في بيئات اختبار وتطوير مخصصة ومستقلة قبل النشر الحي."
        },
        en: {
            q: "A fintech conducts penetration security testing exclusively on live production systems post-launch due to lacking staging environments. Dev Manager claims live testing yields accurate results. Ruling?",
            opts: [
                "Conformity, as live penetration testing guarantees authentic operational vulnerability metrics",
                "Nonconformity against Control Annex A 8.16, for failing to execute security testing during development within dedicated staging environments prior to live deployment",
                "Opportunity for Improvement (OFI) to restrict live penetration testing to off-peak night hours",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.16 explicitly mandates establishing and executing security testing processes in development and staging environments."
        }
    },
    {
        id: 90,
        ref: "ISO/IEC 27001:2022 - Annex A 8.19",
        ar: {
            q: "تعتمد شركة خدمات مالية على أجهزة تشفير خارجية متخصصة لحماية التوقيع الإلكتروني والمعاملات المصرفية. المراجع وجد أن الشركة لا تملك أي سياسة أو عمليات موثقة لإدارة مفاتيح التشفير (Key management) عبر دورة حياتها (إنشاء، توزيع، تخزين، إلغاء). ما القرار؟",
            opts: [
                "مطابقة، طالما أن خوارزمية التشفير المستعملة خوارزمية عالمية قوية",
                "حالة عدم مطابقة للضابط Annex A 8.19، لعدم تعريف وتطبيق سياسة وإجراءات موثقة لإدارة مفاتيح التشفير طوال دورة حياتها",
                "ملاحظة تحسين (OFI) بتغيير المفاتيح يدوياً كل عامين",
                "مطابقة، طالما أن المفاتيح مخزنة داخل أجهزة هاردوير آمنة"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.19 يفرض وضع وتطبيق سياسة وإجراءات لإدارة مفاتيح التشفير (Key management) تشمل كامل دورة حياة المفاتيح."
        },
        en: {
            q: "A financial firm uses strong cryptography for electronic signatures, but maintains zero documented procedures or controls for cryptographic key management across key lifecycles. Finding?",
            opts: [
                "Conformity, provided underlying encryption algorithms conform to international standards",
                "Nonconformity against Control Annex A 8.19, for failing to define and implement a topic-specific policy and procedures for cryptographic key management throughout their lifecycle",
                "Opportunity for Improvement (OFI) to manually regenerate encryption keys bi-annually",
                "Conformity, provided keys reside inside Hardware Security Modules (HSMs)"
            ],
            ans: 1,
            exp: "Control A.8.19 dictates: 'A policy and procedures for the use, protection and lifecycle management of cryptographic keys shall be defined and implemented.'"
        }
    },
    {
        id: 91,
        ref: "ISO/IEC 27001:2022 - Annex A 8.20",
        ar: {
            q: "أثناء فحص الشبكة الخارجية لشركة تجارية، تبين وجود شبكات Wi-Fi مفتوحة بدون كلمة سر أو تشفير متاحة للموظفين وتتصل بصفة مباشرة بسيرفرات المعاملات المالية الداخلية للشركة. مسؤل IT قال: 'الشبكة اللاسلكية مجرد خدمة مريحة للموظفين'. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن توفير الشبكات اللاسلكية يعزز مرونة بيئة العمل",
                "حالة عدم مطابقة للضابط Annex A 8.20، لعدم حماية وقياس وأمن الشبكات اللاسلكية (Network security) وضبط الاتصالات بالأنظمة الحساسة",
                "ملاحظة تحسين (OFI) بتغيير اسم الشبكة اللاسلكية لاسم غير لافت",
                "مطابقة، طالما تم وضع الجدار الناري الخارجي للإنترنت"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.20 يفرض إدارة وحماية الشبكات وأجهزة الشبكات (Networks and network devices) لحماية المعلومات في الأنظمة والتطبيقات المترابطة."
        },
        en: {
            q: "An unencrypted open Wi-Fi network for staff bridges directly into internal financial transaction servers without authentication or firewall boundary controls. Assessment?",
            opts: [
                "Conformity, as wireless accessibility supports corporate mobility and flexibility",
                "Nonconformity against Control Annex A 8.20, for failing to secure and control wireless networks connected to sensitive information systems",
                "Opportunity for Improvement (OFI) to rename the wireless SSID to an obscure string",
                "Conformity, provided the main internet perimeter features an active firewall"
            ],
            ans: 1,
            exp: "Control A.8.20 requires securing, managing, and controlling networks and network devices to protect information in systems and applications."
        }
    },
    {
        id: 92,
        ref: "ISO/IEC 27001:2022 - Annex A 8.21",
        ar: {
            q: "شركة تعمل في مجالات الحوسبة السحابية. المراجع وجد أن موظفي المبيعات والعملاء الخارجيين يستطيعون الوصول المباشر للشبكات الداخلية للشركة عبر إنترنت بدون تشفير قنوات النقل (Security of network services) أو توفير آليات حماية وتوثيق للخدمات الشبكية. ما هو التصنيف؟",
            opts: [
                "مطابقة، لأن الوصول عبر الإنترنت المباشر يقلل تعقيد الشبكات",
                "حالة عدم مطابقة للضابط Annex A 8.21، لعدم تحديد وتطبيق آليات أمان الخدمات الشبكية (Security of network services) وضمان نقل البيانات بأمان",
                "ملاحظة تحسين (OFI) بشركة مزود إنترنت أسرع",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.21 ينص على وجوب تحديد وتطبيق آليات أمان الخدمات الشبكية (Network services) لضمان النقل الآمن للبيانات والخدمات."
        },
        en: {
            q: "External users and sales reps connect over raw unencrypted public internet directly into corporate internal subnets with zero security mechanisms or secure tunnels. Ruling?",
            opts: [
                "Conformity, as direct public routing eliminates VPN infrastructure overhead",
                "Nonconformity against Control Annex A 8.21, for failing to identify, implement, and monitor security mechanisms within network services",
                "Opportunity for Improvement (OFI) to upgrade internet pipe bandwidth speed",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.21 dictates: 'Security mechanisms, service levels and service requirements of network services shall be identified, implemented and monitored.'"
        }
    },
    {
        id: 93,
        ref: "ISO/IEC 27001:2022 - Annex A 8.23",
        ar: {
            q: "مؤسسة صحية تتيح لموظفيها تصفح جميع مواقع الإنترنت الخارجية دون تطبيق أي برمجيات لتصفية وفحص المواقع (Web filtering) أو حظر المواقع الخبيثة والمشبوة والتصيدية التي تهدد أمن البيانات. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن تصفح الإنترنت حق شخصي مكفول لجميع الموظفين",
                "حالة عدم مطابقة للضابط Annex A 8.23، لعدم تقييد وإدارة الوصول إلى المواقع الإلكترونية الخارجية وتطبيق تصفية الويب (Web filtering) لحماية الأنظمة",
                "ملاحظة تحسين (OFI) بإرسال إيميل تحذيري للموظفين بعدم فتح المواقع المشبوهة",
                "مطابقة، طالما تم تثبيت برامج مكافحة فيروسات عادية"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.23 (جديد في 2022) يفرض تقييد وإدارة الوصول للمواقع الإلكترونية الخارجية وتطبيق تصفية الويب (Web filtering) لحماية المنظمة من التهديدات."
        },
        en: {
            q: "A hospital allows unmonitored web browsing to high-risk malicious websites without URL categorization, malware inspection, or web filtering controls. Verdict?",
            opts: [
                "Conformity, as unrestricted internet access represents a basic staff workplace benefit",
                "Nonconformity against Control Annex A 8.23, for failing to manage and restrict access to external websites using web filtering tools",
                "Opportunity for Improvement (OFI) to email staff requesting caution when browsing",
                "Conformity, provided basic desktop antivirus software is installed"
            ],
            ans: 1,
            exp: "Control A.8.23 (introduced in 2022) explicitly requires: 'Access to external websites shall be managed to reduce exposure to malicious content (Web filtering).'"
        }
    },
    {
        id: 94,
        ref: "ISO/IEC 27001:2022 - Annex A 8.25",
        ar: {
            q: "شركة لتطوير الحلول البرمجية تبني قواعد وهياكل تطبيقاتها وتجري التعديلات عليها مباشرة دون توثيق مبادئ الهندسة الآمنة (Secure system engineering principles) أو اعتماد معايير للتصميم الآمن. مدير البرمجيات قال: 'السرعة في الإنجاز هي أولويتنا'. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن تطبيق مبادئ الهندسة الآمنة يعطل إنتاج البرمجيات",
                "حالة عدم مطابقة للضابط Annex A 8.25، لعدم تطوير وتوثيق وتطبيق ومراجعة مبادئ هندسة الأنظمة الآمنة (Secure system engineering principles) في جميع مراحل تطوير الأنظمة",
                "ملاحظة تحسين (OFI) بالاستعانة بمستشار تصميم خارجي",
                "مطابقة، طالما أن البرمجيات تعمل بدون مشاكل تشغيلية"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.25 يوجب تطوير وتوثيق وتطبيق مبادئ هندسة الأنظمة الآمنة (Secure system engineering principles) وضمان مراجعتها بانتظام."
        },
        en: {
            q: "A software vendor builds core application architecture without documented secure system engineering principles or design baselines, citing delivery speed. Finding?",
            opts: [
                "Conformity, as enforcing formal engineering principles impedes rapid agile software delivery",
                "Nonconformity against Control Annex A 8.25, for failing to establish, document, apply, and regularly review secure system engineering principles",
                "Opportunity for Improvement (OFI) to hire external architectural design consultants",
                "Conformity, provided application software runs with zero functional bugs"
            ],
            ans: 1,
            exp: "Control A.8.25 mandates establishing, documenting, applying, and regularly reviewing secure system engineering principles across software development lifecycles."
        }
    },
    {
        id: 95,
        ref: "ISO/IEC 27001:2022 - Annex A 8.26",
        ar: {
            q: "شركة تعاقدت مع مطور خارجي لبناء نظام إدارة الموردين. المراجع وجد أن الشركة لم تضع أي قواعد أو متطلبات أمنية للبرمجة الموكلة للطرف الثالث (Application security requirements)، ولم تقم بفحص الكود البرمجي المسلم قبل اعتماده وريه في البيئة الحية. ما القرار؟",
            opts: [
                "مطابقة، لأن المطور الخارجي يضمن أمان كوده بموجب العقد التجاري",
                "حالة عدم مطابقة للضابطين Annex A 8.26 و 8.30، لعدم تحديد وتطبيق متطلبات أمان التطبيقات المشتراة أو المنجزة خارجياً ولعدم مراجعة واختبار البرمجيات المسلمة",
                "ملاحظة تحسين (OFI) بطلب خصم مالي عند اكتشاف أخطاء برمجية",
                "مطابقة، طالما تم تسليم المشروع في الموعد المرتكز عليه"
            ],
            ans: 1,
            exp: "الضوابط Annex A 8.26 و 8.30 تفرض تحديد متطلبات أمان التطبيقات (Application security requirements) وضبط واختبار البرمجيات المطورة عبر أطراف خارجية قبل اعتمادها."
        },
        en: {
            q: "An organization outsourced application coding but defined zero security architecture requirements, accepting and deploying vendor code without security reviews. Finding?",
            opts: [
                "Conformity, as commercial contracts implicitly obligate software vendors to deliver secure code",
                "Nonconformity against Controls Annex A 8.26 and 8.30, for failing to define application security requirements and verify externally developed software security",
                "Opportunity for Improvement (OFI) to apply contractual penalty fees for code bugs",
                "Conformity, provided the contractor delivered the project on schedule"
            ],
            ans: 1,
            exp: "Controls A.8.26 and A.8.30 dictate identifying application security requirements and establishing testing processes for outsourced software development."
        }
    },
    {
        id: 96,
        ref: "ISO/IEC 27001:2022 - Annex A 8.27",
        ar: {
            q: "شركة تقنية تجري تعديلات يومية على كود الأنظمة الحية، لكنها لا تملك بيئة تطوير واختبار آمنة (Secure system architecture) وتجري عمليات التطوير والتمرير دون وجود سجلات ضبط النسخ البرمجية (Version control) أو مسارات اعتماد موثقة للتغييرات. ما هو الخلل؟",
            opts: [
                "مطابقة، لأن العمل في بيئات DevSecOps يستلزم التمرير السريع للتغيرات",
                "حالة عدم مطابقة للضابطين Annex A 8.27 و 8.32، لعدم تأمين ومراقبة بيئات التطوير ولعدم تطبيق إدارة التغيير المنهجية (Change management) على التطبيقات",
                "ملاحظة تحسين (OFI) بحفظ النسخ القديمة من الكود على أجهزة المطورين",
                "عدم مطابقة للبند 5.1 فقط"
            ],
            ans: 1,
            exp: "الضوابط Annex A 8.27 و 8.32 تفرض حماية وتأمين بيئات التطوير (Secure development environment) وإخضاع تغييرات الأنظمة والتطبيقات لإدارة التغيير الصارمة."
        },
        en: {
            q: "Developers alter live application source code daily with no version control systems, change approvals, or secure development environment baselines. Assessment?",
            opts: [
                "Conformity, as modern DevSecOps deployment pipelines require unhindered continuous code commits",
                "Nonconformity against Controls Annex A 8.27 and 8.32, for failing to establish secure development environments and enforce application change management controls",
                "Opportunity for Improvement (OFI) to save legacy code copies on personal laptops",
                "Nonconformity against Clause 5.1 only"
            ],
            ans: 1,
            exp: "Controls A.8.27 and A.8.32 require establishing secure development environments and controlling changes to systems across development lifecycles."
        }
    },
    {
        id: 97,
        ref: "ISO/IEC 27001:2022 - Annex A 8.29",
        ar: {
            q: "شركة بنكية قامت بتركيب نظام جديد لمعالجة البطاقات البنكية. أثناء المراجعة، تبين أن الشركة لم تجرِ أي اختبارات أمنية معتمدة للقبول (Security acceptance testing) للتأكد من استيفاء النظام لمتطلبات الأمن والسلامة قبل الإطلاق الحي. مدير المشروع قال: 'النظام أثبت نجاحه في معالجة المعاملات المالية'. ما القرار؟",
            opts: [
                "مطابقة، لأن نجاح المعاملات المالية يثبت كفاءة أمان النظام ضمنياً",
                "حالة عدم مطابقة للضابط Annex A 8.29، لعدم تعريف وتطبيق معايير واختبارات القبول الأمني (Security testing in acceptance) للأنظمة والمنتجات الجديدة قبل إطلاقها التشغيلي",
                "ملاحظة تحسين (OFI) بتأجيل التقييم لشهور قادمة",
                "مطابقة، طالما أن المورد حاصل على شهادة ISO 27001"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.29 يفرض إنشاء وتطبيق معايير واختبارات القبول الأمني (Security acceptance testing) للأنظمة والمنتجات والخدمات الجديدة قبل الاعتماد والتشغيل الحي."
        },
        en: {
            q: "A bank deployed a payment processing engine into production without conducting formal security acceptance testing to verify compliance with security criteria. Ruling?",
            opts: [
                "Conformity, as successful transaction processing implicitly validates underlying platform security",
                "Nonconformity against Control Annex A 8.29, for failing to establish and execute security acceptance testing criteria prior to live deployment",
                "Opportunity for Improvement (OFI) to schedule post-launch security testing in six months",
                "Conformity, provided the software vendor holds a valid ISO 27001 certificate"
            ],
            ans: 1,
            exp: "Control A.8.29 mandates defining and executing security acceptance criteria and testing when new or upgraded systems are introduced."
        }
    },
    {
        id: 98,
        ref: "ISO/IEC 27001:2022 - Annex A 8.33",
        ar: {
            q: "شركة تجارية تمتلك قواعد بيانات ضخمة تحتوي على تفاصيل المعاملات وأسرار الصفقات. المراجع وجد أن البيانات الحساسة مخزنة ومتبادلة بين السيرفرات دون تطبيق أي آليات للاختبار الدوري لتكامل وسلامة البيانات (Test data) ودون وجود سجلات لتوثيق فحص سلامة الملفات. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن سلامة البيانات مضمونة طالما أن قواعد البيانات تعمل دون توقف",
                "حالة عدم مطابقة للضابط Annex A 8.33، لعدم اختيار وحماية وإدارة بيانات الاختبار (Test information) بشكل آمن وضمان حماية سلامتها",
                "ملاحظة تحسين (OFI) بعمل مقارنة يدوية عشوائية للملفات",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.33 يفرض اختيار وحماية وإدارة بيانات الاختبار (Test information) وضمان عدم استخدام بيانات الإنتاج الحساسة دون حماية."
        },
        en: {
            q: "A commercial firm copies unencrypted production databases containing trade secrets into staging environments for test purposes without protection or access controls. Finding?",
            opts: [
                "Conformity, as test environments require real production data for authentic QA simulation",
                "Nonconformity against Control Annex A 8.33, for failing to appropriately select, protect, and control test information",
                "Opportunity for Improvement (OFI) to run manual spot-checks on test database records",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.33 mandates that test information shall be appropriately selected, protected, and controlled, forbidding unprotected live data copying."
        }
    },
    {
        id: 99,
        ref: "ISO/IEC 27001:2022 - Annex A 8.34",
        ar: {
            q: "أثناء مراجعة الأجهزة الخاصة بمراكز البيانات، وجد المراجع أن السيرفرات القديمة التي تم إخراجها من الخدمة تحتوي على مستندات ونظم تشغيل بدون فحص وتدقيق مستقل للتأكد من حماية الملكية الفكرية والبرمجيات المرخصة (Information systems audit controls). ما هو الخلل؟",
            opts: [
                "مطابقة، طالما أن السيرفرات القديمة محفظوة داخل مخزن آمن",
                "حالة عدم مطابقة للضابط Annex A 8.34، لعدم التخطيط والاتفاق على اختبارات ومراجعات أنظمة المعلومات (Information systems audit controls) وتقليل الآثار على العمليات التشغيلية",
                "ملاحظة تحسين (OFI) بمسح السيرفرات بقطعة قماش قماشية",
                "مطابقة، طالما تم شراء سيرفرات جديدة"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.34 يتطلب التخطيط والاتفاق على مراجعات واختبارات التدقيق لأنظمة المعلومات المباشرة لتقليل الاضطراب والحفاظ على الأصول."
        },
        en: {
            q: "ISMS audit activities and automated vulnerability scans were run against core live transaction systems during peak hours without prior planning, causing server crashes. Finding?",
            opts: [
                "Conformity, as unannounced audit testing evaluates real-time incident readiness",
                "Nonconformity against Control Annex A 8.34, for failing to plan and agree audit tests and operational reviews involving verification of operational systems to minimize disruption",
                "Opportunity for Improvement (OFI) to notify staff via email after tests complete",
                "Conformity, provided servers auto-rebooted successfully"
            ],
            ans: 1,
            exp: "Control A.8.34 mandates: 'Audit tests and other assurance activities involving verification of operational systems shall be planned and agreed between auditor and management.'"
        }
    },
    {
        id: 100,
        ref: "ISO/IEC 27001:2022 - Clause 10.2 & Annex A 5.27",
        ar: {
            q: "وقعت حادثة تسريب بيانات ضخمة من خادم البريد. أتمت الشركة احتواء التسريب وإصلاح الثغرة الفنية، ولكن عند مطالبة المراجع بسجل الدروس المستفادة (Learning from information security incidents) وخطة الإجراءات التصحيحية المحدثة، تبين أن الإدارة أغلق الملف دون عقد اجتماع تقييمي أو تحديث سجل المخاطر. ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن احتواء التسريب الفني تم بنجاح وإصلاح الثغرة اكتمل",
                "حالة عدم مطابقة للبند 10.2 والضابط Annex A 5.27، لعدم استخلاص واستخدام المعرفة المكتسبة من حوادث أمن المعلومات لتطوير الضوابط ومنع التكرار",
                "ملاحظة تحسين (OFI) بأرشفة تقرير الحادثة في مجلد الأزمات",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 10.2 والضابط Annex A 5.27 يفرضان الاستفادة والتعلم من الحوادث الأمنية (Learning from incidents) وتحديث تقييم المخاطر والضوابط لمنع تكرارها."
        },
        en: {
            q: "Following a major breach, IT patched the flaw but management conducted zero post-incident reviews, derived no lessons learned, and left the risk register unchanged. Finding?",
            opts: [
                "Conformity, as technical patch deployment fully resolves the incident remediation cycle",
                "Nonconformity against Clause 10.2 and Control Annex A 5.27, for failing to evaluate lessons learned from security incidents to improve controls and prevent recurrence",
                "Opportunity for Improvement (OFI) to archive incident tickets in an executive folder",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 10.2 & Control A.5.27 explicitly mandate deriving lessons learned from information security incidents to continuously strengthen the ISMS."
        }
    },
    {
        id: 101,
        ref: "ISO/IEC 27001:2022 - Clause 4.1 & 4.2",
        ar: {
            q: "شركة مدفوعات تخطط للتوسع في سوق إفريقي جديد وتتعامل مع قوانين حماية بيانات محلية جديدة هناك. الإدارة لم تقم بتحديث تقرير سياق المنظمة (Context) أو مصفوفة الأطراف المهتمة بحجة أن الفرع الإفريقي ما زال في مرحلة التأسيس. ما هو تقييم المراجع؟",
            opts: [
                "مطابقة، لأن الفروع تحت التأسيس تعفى تماماً من نطاق الـ ISMS حتى يبدأ التشغيل التجاري",
                "حالة عدم مطابقة للبندين 4.1 و 4.2، لأن القوانين واللوائح في الأسواق الجديدة تعتبر قضايا خارجية ومتطلبات أطراف مهتمة يجب تحديدها وتحديثها بانتظام",
                "ملاحظة تحسين (OFI) لإضافة السوق الجديد بعد افتتاح الفرع رسمياً",
                "مطابقة، طالما أن الفرع الرئيسي يطبق قوانين الدولة الأم"
            ],
            ans: 1,
            exp: "البندان 4.1 و 4.2 يفرضان المراجعة والتحديث المستمر للقضايا الخارجية والداخلية ومتطلبات الأطراف المهتمة عند حدوث أي تغيرات استراتيجية أو قانونية."
        },
        en: {
            q: "A fintech expanding into a new African market skipped updating its ISMS Context and Interested Parties register, claiming the local entity is still incorporating. Auditor assessment?",
            opts: [
                "Conformity, as subsidiaries under setup are fully exempt from ISMS scoping until commercial launch",
                "Nonconformity against Clauses 4.1 & 4.2, because new market laws represent external context issues and interested party requirements that must be identified",
                "Opportunity for Improvement (OFI) to update logs post-launch",
                "Conformity, provided head office adheres to home country laws"
            ],
            ans: 1,
            exp: "Clauses 4.1 and 4.2 require continuous monitoring and updating of internal/external context and interested party requirements during strategic expansion."
        }
    },
    {
        id: 102,
        ref: "ISO/IEC 27001:2022 - Clause 4.3",
        ar: {
            q: "مؤسسة طيران حددت نطاق الـ ISMS ليشمل 'نظام حجوزات التذاكر عبر الإنترنت فقط' واستبعدت الشبكة المباشرة لمركز خدمة العملاء الذي يتلقى بيانات البطاقات الائتمانية هاتفياً ويدخلها بنفسه في نفس النظام. ما قرار المراجع؟",
            opts: [
                "قبول التحديد، لأن للمؤسسة مطلق الحرية في استبعاد أي إدارة تشغيلية ترى صعوبة مراجعتها",
                "حالة عدم مطابقة للبند 4.3، لأن تحديد النطاق أهمل الاعتماديات والواجهات التشغيلية (Interfaces and dependencies) بين مركز الاتصال ونظام الحجز",
                "ملاحظة تحسين (OFI) بإدراج مركز الاتصالات في خطة العام القادم",
                "مطابقة، طالما تم توثيق النطاق صراحة في وثيقة Scope Document"
            ],
            ans: 1,
            exp: "البند 4.3 يشترط عند تحديد حدود ونطاق الـ ISMS مراعاة الواجهات والاعتماديات بين الأنشطة المختلفة داخل المؤسسة والأطراف الخارجية."
        },
        en: {
            q: "An airline scoped its ISMS strictly to the 'Online Booking Engine', excluding the call center that manually inputs caller credit card data into that same system. Audit finding?",
            opts: [
                "Accept scope, as organizations hold total autonomy to omit hard-to-audit operational units",
                "Nonconformity against Clause 4.3, because scoping ignored critical operational interfaces and dependencies between the call center and booking engine",
                "Opportunity for Improvement (OFI) to expand scope during the next audit cycle",
                "Conformity, provided the scope boundary text is documented clearly"
            ],
            ans: 1,
            exp: "Clause 4.3 mandates considering interfaces and dependencies between internal functions when defining ISMS boundaries."
        }
    },
    {
        id: 103,
        ref: "ISO/IEC 27001:2022 - Clause 5.1",
        ar: {
            q: "خلال المراجعة، تبين أن الإدارة العليا ترفض توفير الميزانيات المخصصة لاختبارات الاختراق السنوية وترفض حضور مراجعات الإدارة، محملة مدير الأمن (CISO) كامل المسؤولية عن أي اختراق قد يحدث. كيف يصنف المراجع هذا الموقف؟",
            opts: [
                "مطابقة، لأن CISO هو المسؤول التنفيذي المباشر عن أمن المعلومات",
                "حالة عدم مطابقة للبند 5.1، لأن الإدارة العليا فشلت في إظهار القيادة والالتزام بضمان توفير الموارد اللازمة ودعم الأدوار القيادية الأخرى",
                "ملاحظة تحسين (OFI) لزيادة صلاحيات CISO المالية",
                "مطابقة، طالما تم توقيع السياسة الأمنية عند التأسيس"
            ],
            ans: 1,
            exp: "البند 5.1 ينص صراحة على واجب الإدارة العليا في إظهار القيادة والالتزام من خلال ضمان توفير الموارد ودعم قيادات الأمن السيبراني."
        },
        en: {
            q: "Top Management continuously denies penetration testing budgets and skips management reviews, shifting all breach liability onto the CISO. How is this audited?",
            opts: [
                "Conformity, as the CISO holds ultimate functional responsibility for operational security",
                "Nonconformity against Clause 5.1, as Top Management failed to demonstrate leadership and commitment regarding resource provision and supporting roles",
                "Opportunity for Improvement (OFI) to expand CISO spending limits",
                "Conformity, provided executive signature exists on baseline policy documents"
            ],
            ans: 1,
            exp: "Clause 5.1 places strict obligation on Top Management to demonstrate leadership and commitment by ensuring resource availability and supporting security roles."
        }
    },
    {
        id: 104,
        ref: "ISO/IEC 27001:2022 - Clause 5.2",
        ar: {
            q: "سياسة أمن المعلومات في شركة بنكية تم إعدادها باللغة الإنجليزية فقط، رغم أن 60% من موظفي التشغيل والخدمات اللوجستية لا يجيدون سوى اللغة العربية، ولم يتم شرح السياسة لهم. كيف يقيم المراجع مدى فاعلية السياسة؟",
            opts: [
                "مطابقة، لأن اللغة الإنجليزية هي اللغة الرسمية المعتمدة في المعايير الدولية ISO",
                "حالة عدم مطابقة للبند 5.2 (e)، لأن السياسة يجب أن يتم إبلاغها وفهمها (Communicated and understood) داخل المنظمة لجميع الموظفين",
                "ملاحظة تحسين (OFI) بترجمة ملخص تنفيذي للسياسة فقط",
                "مطابقة، طالما تم حفظ السياسة على شبكة Intranet"
            ],
            ans: 1,
            exp: "البند 5.2 (e) يتطلب أن تكون سياسة أمن المعلومات مُبلغة ومفهومة (Communicated & Understood) داخل المنظمة، واللغة غير المفهومة تحول دون تحسين الفهم."
        },
        en: {
            q: "A bank's security policy is published exclusively in English, even though 60% of operational staff only speak Arabic and cannot read it. Verdict?",
            opts: [
                "Conformity, as English is the official standard language for ISO frameworks globally",
                "Nonconformity against Clause 5.2 (e), because the policy must be properly communicated AND understood within the organization",
                "Opportunity for Improvement (OFI) to translate an executive summary",
                "Conformity, provided the document is uploaded on the internal intranet"
            ],
            ans: 1,
            exp: "Clause 5.2 (e) mandates that the information security policy must be communicated and understood within the organization."
        }
    },
    {
        id: 105,
        ref: "ISO/IEC 27001:2022 - Clause 5.3",
        ar: {
            q: "في مستشفى استثماري، تم إعطاء مدير تقنية المعلومات (IT Director) صلاحية كاملة لاعتماد التغييرات في النظام وإدارة الحسابات، وفي نفس الوقت يتولى مهام مراجع أمن المعلومات الداخلي (ISMS Internal Auditor). ما تصنيف المراجع الخارجي؟",
            opts: [
                "مطابقة، لأن دمج الوظائف يقلل التكاليف التشغيلية في القطاع الصحي",
                "حالة عدم مطابقة للبند 5.3 والبند 9.2، لأن توزيع المسؤوليات والصلاحيات يفرض استقلالية المراجع الداخلي لمنع تعارض المصالح (Conflict of interest)",
                "ملاحظة تحسين (OFI) بالاستعانة بمساعد لمدير IT في عمليات المراجعة",
                "مطابقة، طالما أن التقرير يُرفع للمدير الطبي"
            ],
            ans: 1,
            exp: "البند 5.3 والبند 9.2 يفرضان تحديد المسؤوليات والصلاحيات بوضوح وضمان استقلالية وموضوعية المراجعين الداخليين لمنع تعارض المصالح."
        },
        en: {
            q: "An IT Director holds total system change rights while concurrently acting as the internal ISMS auditor. How is this conflict handled?",
            opts: [
                "Conformity, as multi-role consolidation reduces administrative overhead in healthcare",
                "Nonconformity against Clauses 5.3 & 9.2, because organizational roles must ensure auditor objectivity and prevent direct conflict of interest",
                "Opportunity for Improvement (OFI) to assign an assistant to aid audit tasks",
                "Conformity, provided audit reports go directly to the Chief Medical Officer"
            ],
            ans: 1,
            exp: "Clauses 5.3 and 9.2 require that assigned roles prevent conflict of interest and guarantee objectivity and impartiality of internal auditors."
        }
    },
    {
        id: 106,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.1",
        ar: {
            q: "شركة استشارات أمنية قامت بوضع تقييم للمخاطر، ولكنها لم تجرِ أي تقييم أو تخطيط للفرص (Opportunities) المتاحة لتطوير الـ ISMS. مسؤل السلامة ادعى أن المعيار ينصب حصرياً على المخاطر السلبية. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن نظام ISO 27001 يركز على إدارة المخاطر والتهديدات الأمنية فقط",
                "حالة عدم مطابقة للبند 6.1.1، لأن التخطيط يفرض تحديد كل من المخاطر والـفرص (Risks and opportunities) الواجب معالجتها تحقيقاً للأهداف والتحسين",
                "ملاحظة تحسين (OFI) ببيان الفرص في اجتماع مراجعة الإدارة بدلاً من سجل المخاطر",
                "مطابقة، طالما تم خفض المخاطر العالية"
            ],
            ans: 1,
            exp: " ينص البند 6.1.1 على وجوب النظر في القضايا والمتطلبات لتحديد المخاطر والفرص (Risks and opportunities) الواجب معالجتها."
        },
        en: {
            q: "A consulting firm evaluated security threats but completely ignored identifying ISMS Opportunities, arguing ISO 27001 handles negative risks only. Ruling?",
            opts: [
                "Conformity, as ISO 27001 strictly focuses on mitigating adverse cybersecurity risks",
                "Nonconformity against Clause 6.1.1, because planning mandates determining both risks AND opportunities that need to be addressed",
                "Opportunity for Improvement (OFI) to discuss opportunities orally in management reviews",
                "Conformity, provided high residual risks are mitigated"
            ],
            ans: 1,
            exp: "Clause 6.1.1 explicitly requires determining both risks and opportunities that need to be addressed to ensure ISMS outcomes."
        }
    },
    {
        id: 107,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "أثناء المراجعة، تبين أن مصفوفة معايير تقييم المخاطر بشركة لوجستية تسمح بتغيير حدود قبول المخاطر (Risk Acceptance Criteria) شفهياً وبشكل مرن حسب رغبة مدراء المشاريع لإغلاق المشاريع بسرعة. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن المرونة التشغيلية مطلوب إتاحتها لمدراء المشاريع لضمان عدم التعطيل",
                "حالة عدم مطابقة للبند 6.1.2 (a)، لأن معايير تقييم ومستوى قبول المخاطر يجب أن تضمن إنتاج نتائج متسقة وتكون محددة ومصادق عليها رسمياً",
                "ملاحظة تحسين (OFI) بتوثيق التجاوزات الشفهية في إيميل مجمع نهاية الشهر",
                "مطابقة، طالما لم تقع أي حوادث أمنية في هذه المشاريع"
            ],
            ans: 1,
            exp: "البند 6.1.2 (a) يوجب أن تكون عملية تقييم المخاطر قائمة على معايير محددة ومعتمدة لمستويات قبول المخاطر لمنع الاجتهادات الشفهية المتضاربة."
        },
        en: {
            q: "Project managers verbally shift Risk Acceptance Criteria boundaries ad-hoc to fast-track project sign-offs. How is this non-standard practice audited?",
            opts: [
                "Conformity, as operational agility requires empowering project leads with flexible risk thresholds",
                "Nonconformity against Clause 6.1.2 (a), because risk acceptance criteria must be formalized to ensure consistent, valid, and comparable outcomes",
                "Opportunity for Improvement (OFI) to log verbal waivers via monthly recap emails",
                "Conformity, provided no active breaches hit those projects"
            ],
            ans: 1,
            exp: "Clause 6.1.2 (a) mandates establishing and maintaining information security risk criteria, including risk acceptance criteria."
        }
    },
    {
        id: 108,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.3",
        ar: {
            q: "شركة برمجيات اختارت جميع ضوابط الملحق Annex A في بيان الصلاحية (SoA) وقالت: 'نحن نطبق الـ 93 ضابط بالكامل دون استبعاد'. لكن المراجع وجد أن 20 ضابطاً منها غير منفذة مطلقاً بالواقع لعدم ملاءمتها. كيف يصنف المراجع هذا البيان؟",
            opts: [
                "مطابقة، لأن اختيار كافة الضوابط يعبر عن التزام كامل بالمعيار",
                "حالة عدم مطابقة للبند 6.1.3 (d)، لأن بيان الصلاحية (SoA) يجب أن يعكس الحالة الفعلية للضوابط المطبقة وتبريرات الاستبعاد أو التطبيق بدقة",
                "ملاحظة تحسين (OFI) بتعديل SoA قبل الزيادة القادمة",
                "مطابقة، بشرط وجود خطة لتطبيق الضوابط الـ 20 مستقبلاً"
            ],
            ans: 1,
            exp: "البند 6.1.3 (d) يفرض إعداد بيان الصلاحية (SoA) ليعكس الضوابط المطبقة وتبريرات تضمينها أو استبعادها، والتصريح بتطبيق ضوابط وهمية يخالف واقع النظام."
        },
        en: {
            q: "A software vendor included all 93 Annex A controls in its SoA claiming 100% inclusion, but field sampling proved 20 controls are completely non-existent in reality. Finding?",
            opts: [
                "Conformity, as declaring total control adoption demonstrates high security commitment",
                "Nonconformity against Clause 6.1.3 (d), because the Statement of Applicability (SoA) must accurately reflect controls implemented and valid justifications",
                "Opportunity for Improvement (OFI) to update SoA prior to recertification",
                "Conformity, provided a future roadmap exists to deploy the missing 20 controls"
            ],
            ans: 1,
            exp: "Clause 6.1.3 (d) requires the SoA to accurately contain controls necessary, their implementation status, and objective justifications."
        }
    },
    {
        id: 109,
        ref: "ISO/IEC 27001:2022 - Clause 6.2",
        ar: {
            q: "أهداف أمن المعلومات في شركة اتصال صيغت كالتالي: 'سنتعامل بجدية مع التهديدات وسنقلل الاختراقات لأقصى درجة'. المراجع أشار إلى أن الأهداف غير قابلة للقياس (Measurable) ولا تخضع لأرقام أو نسب محددة. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن الأهداف التوجيهية العامة لا تشترط قياساً رقمياً دقيقاً",
                "حالة عدم مطابقة للبند 6.2 (b)، لأن أهداف أمن المعلومات يجب أن تكون قابلة للقياس (Measurable) إذا كان ذلك ممكناً عملياً لضمان المتابعة",
                "ملاحظة تحسين (OFI) بوضع صياغة أرقام تقريبية في التقرير القادم",
                "مطابقة، طالما وافقت الإدارة العليا على الأهداف"
            ],
            ans: 1,
            exp: "البند 6.2 (b) يتطلب صراحة أن تكون أهداف أمن المعلومات قابلة للقياس (Measurable) لتقييم مدى النجاح في تحقيقها."
        },
        en: {
            q: "A telco set ISMS goals as: 'We will take threats seriously and minimize breaches as much as possible.' Auditor observed zero quantitative metrics. Finding?",
            opts: [
                "Conformity, as qualitative motivational statements constitute acceptable governance goals",
                "Nonconformity against Clause 6.2 (b), because information security objectives shall be measurable (if practicable)",
                "Opportunity for Improvement (OFI) to suggest vague percentage targets next year",
                "Conformity, provided Top Management formally approved the objective text"
            ],
            ans: 1,
            exp: "Clause 6.2 (b) explicitly dictates that information security objectives shall be measurable (if practicable)."
        }
    },
    {
        id: 110,
        ref: "ISO/IEC 27001:2022 - Clause 6.3",
        ar: {
            q: "شركة تجارة إلكترونية غيرت موفر الخدمة السحابية بالكامل (Cloud Provider Migration) خلال يوم واحد دون إخطار فريق الأمن أو مراجعة أثر النقل على ضوابط الـ ISMS المخزنة كـ Documented Information. ما القرار؟",
            opts: [
                "مطابقة، لأن التغييرات السريعة تضمن استمرارية خدمات البيع دون توقف",
                "حالة عدم مطابقة للبند 6.3، لأن المنظمة عندما تحدد الحاجة لتغيير الـ ISMS يجب أن يُنفذ التغيير بطريقة مخططة (Planned manner)",
                "ملاحظة تحسين (OFI) بتضمين الفريق السحابي في مجموعات الوتساب",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 6.3 يفرض أن التغييرات في نظام إدارة أمن المعلومات يجب أن تنفذ بطريقة مخططة (Planned manner)."
        },
        en: {
            q: "An e-commerce firm migrated its cloud infrastructure in 24 hours without notifying security or evaluating changes to ISMS documented information. Verdict?",
            opts: [
                "Conformity, as rapid cloud migration preserves online sales availability",
                "Nonconformity against Clause 6.3, because changes to the ISMS shall be carried out in a planned manner",
                "Opportunity for Improvement (OFI) to add cloud admins to incident chat groups",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 6.3 mandates that when changes to the ISMS are needed, they shall be executed in a planned manner."
        }
    },
    {
        id: 111,
        ref: "ISO/IEC 27001:2022 - Clause 7.1 & 7.2",
        ar: {
            q: "شركة عينت خبيراً لإدارة أنظمة تشفير قواعد البيانات. الخبير لا يملك أي شهادات أو مؤهلات، وعند طلب المراجع لأدلة التقييم الموثقة، أفاد قسم الـ HR: 'تم اختباره عملياً وشاد به مدير الشبكات شفاهة'. ما القرار؟",
            opts: [
                "مطابقة، لأن التقييم الشفهي والتطبيق العملي الفعلي يلغي الحاجة للوثائق",
                "حالة عدم مطابقة للبند 7.2 (d)، لأن المعيار يفرض الاحتفاظ بمعلومات موثقة مناسبة كدليل على الكفاءة (Evidence of competence)",
                "ملاحظة تحسين (OFI) بإرسال إيميل من مدير الشبكات يشيد بالخبير",
                "مطابقة، طالما أن التشفير يعمل دون مشاكل"
            ],
            ans: 1,
            exp: "البند 7.2 (d) يفرض صراحة الاحتفاظ بمعلومات موثقة مناسبة كدليل كفاءة (Appropriate documented information as evidence of competence)."
        },
        en: {
            q: "A database encryption expert was hired based strictly on a verbal nod from the Network Manager, with zero competency records saved in HR files. Assessment?",
            opts: [
                "Conformity, as practical hands-on evaluation overrides formal paper certifications",
                "Nonconformity against Clause 7.2 (d), as the standard mandates retaining appropriate documented information as evidence of competence",
                "Opportunity for Improvement (OFI) to file a retroactive email endorsement",
                "Conformity, provided encryption algorithms operate without flaws"
            ],
            ans: 1,
            exp: "Clause 7.2 (d) dictates retaining appropriate documented information as evidence of competence for critical security roles."
        }
    },
    {
        id: 112,
        ref: "ISO/IEC 27001:2022 - Clause 7.3",
        ar: {
            q: "أثناء جولة المراجع، سأل أحد العمال بعقد مؤقت (Contractor) عن مساهمته في أمن المعلومات بالشركة، فأجاب: 'أنا متعاقد مؤقت ولا يخضع عملي لسياسات أمن المعلومات أو التوعية'. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن متطلبات التوعية تطبق فقط على الموظفين الدائمين بالملاكات الرسمية",
                "حالة عدم مطابقة للبند 7.3، لأن التوعية يجب أن تشمل الأشخاص الذين يقومون بعمل تحت سيطرة المنظمة (Persons doing work under organization control)",
                "ملاحظة تحسين (OFI) بإعطاء المتعاقدين منشورات ورقية عند البوابة",
                "مطابقة، طالما أن الموظف المؤقت يعمل تحت إشراف مباشر"
            ],
            ans: 1,
            exp: "البند 7.3 يفرض أن يكون الأشخاص الذين يعملون تحت سيطرة المنظمة (بما في ذلك المتعاقدين والمؤقتين) على وعي بسياسة الأمن ومساهمتهم وآثار عدم التوافق."
        },
        en: {
            q: "A temporary third-party contractor stated he has zero security awareness duties because he isn't a permanent direct-hire employee. How is this finding logged?",
            opts: [
                "Conformity, as awareness requirements apply strictly to permanent staff on direct payroll",
                "Nonconformity against Clause 7.3, because awareness applies to ALL persons doing work under organization control including temporary contractors",
                "Opportunity for Improvement (OFI) to hand out paper security flyers at reception",
                "Conformity, provided the contractor works under direct internal supervision"
            ],
            ans: 1,
            exp: "Clause 7.3 dictates awareness obligations for 'persons doing work under the organization's control', covering contractors and temporary staff."
        }
    },
    {
        id: 113,
        ref: "ISO/IEC 27001:2022 - Clause 7.4",
        ar: {
            q: "شركة تعاقدت مع وكالة إعلامية لإدارة الأزمات، ولكن عند مراجعة وثائق الاتصال لم يجد المراجع أي قواعد محددة لـ (متى، مع من، وكيف) يتم إبلاغ الجهات التنظيمية والجمهور عند تسريب البيانات. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن الاستعانة بوكالة إعلامية خارحية يغني عن التوثيق الداخلي",
                "حالة عدم مطابقة للبند 7.4، لعدم تحديد المنظمة للحاجة إلى الاتصالات الداخلية والخارجية ذات الصلة بالـ ISMS وتفاصيلها (What, When, With whom, How)",
                "ملاحظة تحسين (OFI) بإدراج رقم الوكالة الإعلامية في السجل العام",
                "عدم مطابقة للبند 5.1 فقط"
            ],
            ans: 1,
            exp: "البند 7.4 يفرض تحديد وتوثيق آلية الاتصالات الداخلية والخارجية المتضمنة (ماذا، متى، مع من، وكيف) للتواصل الفعال."
        },
        en: {
            q: "A company retained a PR firm for crisis comms but lacked written internal protocols specifying what, when, with whom, and how to notify regulators during breaches. Finding?",
            opts: [
                "Conformity, as hiring a specialized PR agency fulfills crisis communication expectations",
                "Nonconformity against Clause 7.4, for failing to determine internal and external communications relevant to the ISMS (what, when, with whom, how)",
                "Opportunity for Improvement (OFI) to save the PR agency phone number on the dashboard",
                "Nonconformity against Clause 5.1 only"
            ],
            ans: 1,
            exp: "Clause 7.4 mandates specifying what to communicate, when to communicate, with whom to communicate, and how communications occur."
        }
    },
    {
        id: 114,
        ref: "ISO/IEC 27001:2022 - Clause 7.5.2 & 7.5.3",
        ar: {
            q: "سياسات أمن المعلومات بشركة برمجيات موثقة كصفحات ويكي (Wiki pages)، ويستطيع أي موظف تعديل محتواها فوراً دون وجود مسار للمراجعة والاعتماد (Review and Approval) ودون وجود حماية ضد التعديل غير المصرح به. ما القرار المنهجي؟",
            opts: [
                "مطابقة، لأن نظام الـ Wiki يعزز التعاون المستمر والتحسين السريع",
                "حالة عدم مطابقة للبندين 7.5.2 و 7.5.3، لعدم ضمان المراجعة والاعتماد للملاءمة والكفاية، ولعدم ضبط وحماية المعلومات الموثقة من التعديل غير المصرح به",
                "ملاحظة تحسين (OFI) بأخذ نسخة أسبوعية من الـ Wiki",
                "مطابقة، طالما تم تسجيل عناوين الـ IP الخاصة بالمعدلين"
            ],
            ans: 1,
            exp: "البند 7.5.2 يشترط المراجعة والاعتماد للملاءمة والكفاية، والبند 7.5.3 يشترط ضبط المعلومات الموثقة وحمايتها من التعديل والتغيير غير المعتمد."
        },
        en: {
            q: "ISMS policies are hosted on an open internal Wiki where any developer can edit live policy text without secondary review or authorization. Audit verdict?",
            opts: [
                "Conformity, as open Wiki frameworks promote continual improvement and agility",
                "Nonconformity against Clauses 7.5.2 & 7.5.3, for failing to ensure review/approval for suitability and failing to control documented information against unauthorized edits",
                "Opportunity for Improvement (OFI) to back up Wiki pages weekly",
                "Conformity, provided editor IP addresses are recorded in Wiki history logs"
            ],
            ans: 1,
            exp: "Clause 7.5.2 requires review and approval for suitability/adequacy, and Clause 7.5.3 demands protection against improper modification."
        }
    },
    {
        id: 115,
        ref: "ISO/IEC 27001:2022 - Clause 8.1",
        ar: {
            q: "شركة بنكية أسندت عملية إدارة النسخ الاحتياطي (Backups) لشركة خارجية. المراجع وجد أن البنك لا يملك أي وثائق أو معايير محددة لضبط العمليات المسندة للطرف الخارجي (Outsourced processes) ولم يراجع تنفيذها أمنياً. ما التصنيف؟",
            opts: [
                "مطابقة، لأن المسند إليه يحمل المسؤولية التشغيلية بالكامل وفق العقد",
                "حالة عدم مطابقة للبند 8.1، لعدم ضمان ضبط وتنفيذ العمليات المقدمة من أطراف خارجية (Externally provided processes) والمؤثرة على الـ ISMS",
                "ملاحظة تحسين (OFI) بإرسال استبيان سنوي للشركة الخارجية",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 8.1 ينص بوضوح على وجوب أن تضمن المنظمة ضبط وحكم العمليات المقدمة من أطراف خارجية وذات الصلة بـ ISMS."
        },
        en: {
            q: "A bank outsourced core backup management but defined zero criteria or controls over the vendor's backup operations. Where lies the audit nonconformity?",
            opts: [
                "Conformity, as contractual outsourcing delegates full operational responsibility to the vendor",
                "Nonconformity against Clause 8.1, because the organization must ensure that externally provided processes relevant to the ISMS are controlled",
                "Opportunity for Improvement (OFI) to send an annual questionnaire to the backup vendor",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 8.1 dictates: 'The organization shall ensure that externally provided processes, products or services that are relevant to the ISMS are controlled.'"
        }
    },
    {
        id: 116,
        ref: "ISO/IEC 27001:2022 - Clause 8.2",
        ar: {
            q: "شركة أجرت تقييم المخاطر منذ عامين، وحدث تغيير جوهري بتطبيق نظام ERP جديد بالكامل. الشركة لم تقم بتحديث تقييم المخاطر بحجة أن الموعد المجدول الدوري في السياسة بعد 3 سنوات. كيف يقيّم المراجع الموقف؟",
            opts: [
                "مطابقة، طالما أن الشركة تلتزم بالجدول الدوري المكتوب في السياسة",
                "حالة عدم مطابقة للبند 8.2، لأن تقييم مخاطر أمن المعلومات يجب أن ينفذ عند اقتراح أو حدوث تغييرات جوهرية (Significant changes) وليس فقط بالجدول الدوري",
                "ملاحظة تحسين (OFI) بتقديم موعد التقييم الدوري بضعة أشهر",
                "مطابقة، طالما أن نظام الـ ERP تم شراؤه من شركة عالمية"
            ],
            ans: 1,
            exp: "البند 8.2 يفرض تنفيذ تقييمات المخاطر في فترات زمنية مخططة أو عند اقتراح أو حدوث تغييرات جوهرية (When significant changes occur)."
        },
        en: {
            q: "A firm deployed an ERP system but skipped updating its risk assessment, waiting for its pre-scheduled 3-year periodic risk review cycle. Finding?",
            opts: [
                "Conformity, provided the firm strictly abides by its internal policy schedule",
                "Nonconformity against Clause 8.2, because risk assessments must be performed at planned intervals OR when significant changes occur",
                "Opportunity for Improvement (OFI) to shorten periodic review intervals",
                "Conformity, since the ERP software was procured from a market-leading vendor"
            ],
            ans: 1,
            exp: "Clause 8.2 explicitly requires conducting risk assessments at planned intervals or when significant changes are proposed or occur."
        }
    },
    {
        id: 117,
        ref: "ISO/IEC 27001:2022 - Clause 8.3",
        ar: {
            q: "خطة معالجة المخاطر (RTP) اعتمدت تركيب جدار ناري لحماية السيرفرات. أثناء المراجعة، وجد المراجع أن الجدار الناري تم شراؤه ولكنه موجود في المخازن ولم يتم تركيبه أو ضبط إعداداته منذ 8 أشهر. ما القرار؟",
            opts: [
                "مطابقة، لأن الشراء يثبت بدء التنفيذ والنية في معالجة المخاطر",
                "حالة عدم مطابقة للبند 8.3، لأن المنظمة يجب أن تُنفذ (Implement) خطة معالجة مخاطر أمن المعلومات وتحتفظ بالأدلة الموثقة لنتائج التنفيذ",
                "ملاحظة تحسين (OFI) بتوجيه قسم IT لسرعة التركيب",
                "مطابقة، طالما لم تحدث أي هجمات سيبرانية خلال الـ 8 أشهر"
            ],
            ans: 1,
            exp: "البند 8.3 يتطلب تنفيذ خطة معالجة مخاطر أمن المعلومات فعلياً (Implement risk treatment plan) وليس مجرد التجهيز أو الشراء."
        },
        en: {
            q: "An approved Risk Treatment Plan selected installing a firewall. Audit revealed the hardware was purchased 8 months ago but sits unboxing in storage. Ruling?",
            opts: [
                "Conformity, as hardware procurement proves active intent to treat the risk",
                "Nonconformity against Clause 8.3, because the organization shall implement the information security risk treatment plan and retain documented results",
                "Opportunity for Improvement (OFI) to urge IT to unbox the firewall",
                "Conformity, provided no active intrusions targeted the infrastructure during storage"
            ],
            ans: 1,
            exp: "Clause 8.3 mandates implementing the risk treatment plan, requiring actual operational deployment rather than mere purchasing."
        }
    },
    {
        id: 118,
        ref: "ISO/IEC 27001:2022 - Clause 9.1",
        ar: {
            q: "شركة تقيس فاعلية الضوابط الأمنية، لكنها لا تحتفظ بأي أدلة أو معلومات موثقة لنتائج المراقبة والقياس (Documented information as evidence of monitoring results). مسؤل الأمن قال: 'نحن نناقش النتائج شفهياً'. ما التصنيف؟",
            opts: [
                "مطابقة، لأن المناقشات الإدارية الشفهية تكفي لتلبية غرض القياس",
                "حالة عدم مطابقة للبند 9.1، لأن المنظمة يجب أن تحتفظ بـمعلومات موثقة مناسبة كدليل على نتائج المراقبة والقياس",
                "ملاحظة تحسين (OFI) بكتابة ملخص بخط اليد في المفكرة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 9.1 ينص صراحة على وجوب الاحتفاظ بمعلومات موثقة مناسبة كدليل على نتائج المراقبة والقياس (Retain appropriate documented information as evidence of monitoring results)."
        },
        en: {
            q: "Security measures control effectiveness, but zero logs or retained metrics exist to prove monitoring evaluations. CISO cites verbal talks. Finding?",
            opts: [
                "Conformity, as verbal executive evaluation satisfies performance monitoring goals",
                "Nonconformity against Clause 9.1, because the organization shall retain appropriate documented information as evidence of monitoring and measurement results",
                "Opportunity for Improvement (OFI) to jot handwritten notes in meeting pads",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 9.1 explicitly demands retaining appropriate documented information as evidence of monitoring and measurement results."
        }
    },
    {
        id: 119,
        ref: "ISO/IEC 27001:2022 - Clause 9.2.2",
        ar: {
            q: "المراجع الداخلي للشركة قام بمراجعة قسم IT واكتشف عدم مطابقة حرجة، ولكنه لم يقم بإبلاغ النتائج للإدارة المعنية أو رفع التقرير للإدارة العليا، واكتفى بحفظ التقرير في درجه. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن المراجع الداخلي له الحق في تأجيل الإبلاغ لحين تصحيح الخلل",
                "حالة عدم مطابقة للبند 9.2.2 (e)، لأن نتائج المراجعات الداخلية يجب إبلاغها للإدارة المعنية (Reported to relevant management)",
                "ملاحظة تحسين (OFI) بإرسال نسخة بالبريد المسجل للمدير التنفيذي",
                "مطابقة، طالما أن المراجع سجل الملاحظات لديه"
            ],
            ans: 1,
            exp: "البند 9.2.2 (e) يفرض صراحة إبلاغ نتائج المراجعات الداخلية إلى الإدارة المعنية ذات الصلة."
        },
        en: {
            q: "An internal auditor discovered a major nonconformity in IT but kept the audit report locked in his desk without informing IT management or executives. Finding?",
            opts: [
                "Conformity, as internal auditors hold sole discretion to delay reporting until informal fixes occur",
                "Nonconformity against Clause 9.2.2 (e), because internal audit results shall be reported to relevant management",
                "Opportunity for Improvement (OFI) to mail a registered copy to the CEO",
                "Conformity, provided audit observations were recorded locally"
            ],
            ans: 1,
            exp: "Clause 9.2.2 (e) mandates that the organization shall ensure that the results of the audits are reported to relevant management."
        }
    },
    {
        id: 120,
        ref: "ISO/IEC 27001:2022 - Clause 9.3.2",
        ar: {
            q: "اجتماع مراجعة الإدارة (Management Review) ناقش كافة البنود والمدخلات، لكنه أهمل تقييم أداء وملاحظات الموردين والأطراف الخارجية (Feedback from interested parties). ما تصنيف الخلل؟",
            opts: [
                "مطابقة، لأن مراجعة الإدارة تركز حصرياً على الأداء الداخلي للمؤسسة",
                "حالة عدم مطابقة للبند 9.3.2 (c)(1)، لأن مدخلات مراجعة الإدارة يجب أن تتضمن ملاحظات وتغذية الأطراف المهتمة (Feedback from interested parties)",
                "ملاحظة تحسين (OFI) بإرسال استبيان للموردين قبل الاجتماع القادم",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 9.3.2 (c)(1) ينص على أن مراجعة الإدارة يجب أن تشمل ملاحظات وتغذية راجعة من الأطراف المهتمة (Feedback from interested parties)."
        },
        en: {
            q: "Management review evaluated internal security metrics but skipped evaluating feedback from suppliers and external interested parties. Audit finding?",
            opts: [
                "Conformity, as executive reviews focus exclusively on internal corporate operations",
                "Nonconformity against Clause 9.3.2 (c)(1), because management review inputs shall include feedback from interested parties",
                "Opportunity for Improvement (OFI) to email vendor feedback surveys prior to the next review",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 9.3.2 (c)(1) mandates that management review shall consider feedback from interested parties as a required input."
        }
    },
    {
        id: 121,
        ref: "ISO/IEC 27001:2022 - Clause 10.1 & 10.2",
        ar: {
            q: "شركة تلقت حالة عدم مطابقة في مراجعة سابقة، وقامت باتخاذ إجراء تصحيحي، لكنها لم تقم بمراجعة فاعلية أي إجراء تصحيحي تم اتخاذه (Review the effectiveness of corrective action) للتحقق من زوال السبب الرئيسي. ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما تم تنفيذ الإجراء التصحيحي وإغلاق التذكرة",
                "حالة عدم مطابقة للبند 10.2 (d)، لأن المعيار يفرض مراجعة فاعلية أي إجراء تصحيحي يتخذ لضمان معالجة السبب الجذر لمنع التكرار",
                "ملاحظة تحسين (OFI) بزيارة الموقع بعد 6 أشهر للتحقق",
                "مطابقة، طالما أن المشكلة لم تتكرر خلال أسبوعين"
            ],
            ans: 1,
            exp: "البند 10.2 (d) يفرض صراحة مراجعة فاعلية أي إجراء تصحيحي متخذ (Review the effectiveness of any corrective action taken)."
        },
        en: {
            q: "Following a nonconformity fix, the company closed the issue ticket without conducting a formal review of the effectiveness of the corrective action taken. Ruling?",
            opts: [
                "Conformity, provided the corrective patch was applied and the ticket closed",
                "Nonconformity against Clause 10.2 (d), because the organization shall review the effectiveness of any corrective action taken",
                "Opportunity for Improvement (OFI) to re-check the system six months later",
                "Conformity, provided no repeat failures occurred within two weeks"
            ],
            ans: 1,
            exp: "Clause 10.2 (d) explicitly dictates reviewing the effectiveness of any corrective action taken to ensure root causes are eliminated."
        }
    },
    // --- ANNEX A 5: ORGANIZATIONAL CONTROLS ---
    {
        id: 122,
        ref: "ISO/IEC 27001:2022 - Annex A 5.2",
        ar: {
            q: "في شركة استشارات، تم تحديد وتوزيع أدوار ومسؤوليات أمن المعلومات، لكن الإدارة لم تضع أي آلية لتخصيص المساءلة والمؤشرات المحددة بكل دور وظيفي. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن توزيع المسميات الوظيفية العامة كافٍ لتلبية متطلبات الضابط",
                "حالة عدم مطابقة للضابط Annex A 5.2، لعدم تعريف وتخصيص أدوار ومسؤوليات أمن المعلومات وفقاً لاحتياجات المنظمة وبشكل يضمن المساءلة",
                "ملاحظة تحسين (OFI) بتثبيت الهيكل التنظيمي على لوحة الإعلانات",
                "مطابقة، طالما الموظفون يعرفون مدراء المباشرين"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.2 يتطلب تعريف وتخصيص أدوار أمن المعلومات ومسؤولياتها وفقاً لاحتياجات المنظمة وضمان إبلاغها والتزام الأفراد بها."
        },
        en: {
            q: "A firm assigned general job titles but defined no specific information security responsibilities or accountability frameworks for key roles. Finding?",
            opts: [
                "Conformity, as general organizational chart titles fulfill role allocation expectations",
                "Nonconformity against Control Annex A 5.2, for failing to define and allocate information security roles and responsibilities according to organizational needs",
                "Opportunity for Improvement (OFI) to print the org chart on physical lobby posters",
                "Conformity, provided staff know their immediate reporting line managers"
            ],
            ans: 1,
            exp: "Control A.5.2 mandates that information security roles and responsibilities shall be defined and allocated according to the organization's needs."
        }
    },
    {
        id: 123,
        ref: "ISO/IEC 27001:2022 - Annex A 5.4",
        ar: {
            q: "شركة تقنية أطلقت خدمة سحابية معتمدة على التشفير الكامل، ولكن الإدارة العليا لم ترتب أو تضمن الاتصال والتعامل الإداري مع الجهات الإدارية والتنظيمية لمراجعة التوافق مع ضوابط حماية البيانات. ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن الضوابط التقنية المطبقة تلغي الحاجة للتواصل الإداري",
                "حالة عدم مطابقة للضابط Annex A 5.4، لعدم ضمان المنظمة لتحديد وتطبيق الاتصال والالتزام الإداري (Management responsibilities) لتوجيه ودعم الأمن",
                "ملاحظة تحسين (OFI) ببيان المسؤوليات في العقد القادم",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.4 يتطلب تحديد وتطبيق مسؤوليات الإدارة (Management responsibilities) لضمان توجيه ودعم أمن المعلومات وفق السياسات."
        },
        en: {
            q: "Management launched a cloud service relying purely on technical filters, with zero executive oversight or administrative verification of regulatory alignment. Verdict?",
            opts: [
                "Conformity, as automated technical controls negate the requirement for manual management oversight",
                "Nonconformity against Control Annex A 5.4, for failing to enforce management responsibilities to direct and support security in accordance with policies",
                "Opportunity for Improvement (OFI) to clarify management oversight terms in vendor SLAs",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.5.4 requires management to require all personnel to apply information security in accordance with the established policies."
        }
    },
    {
        id: 124,
        ref: "ISO/IEC 27001:2022 - Annex A 5.15",
        ar: {
            q: "شركة تمنح جميع موظفي المبيعات صلاحية الوصول الكامل لقواعد بيانات المنتجات والعملاء دون وجود سياسة أو ضوابط للتحكم بالوصول (Access control) مبنية على الحاجة للعرف (Need-to-know). ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما الموظفون بحاجة للبيانات لإتمام المبيعات",
                "حالة عدم مطابقة للضابط Annex A 5.15، لعدم إنشاء وتوثيق وتطبيق سياسة التحكم بالوصول القائمة على متطلبات العمل والحاجة للمعرفة (Need-to-know & Need-to-use)",
                "ملاحظة تحسين (OFI) بحظر الوصول خارج أوقات العمل",
                "مطابقة، طالما تم فحص الموظفين قبل التعيين"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.15 يفرض تعريف وتوثيق وتطبيق قواعد التحكم بالوصول إلى المعلومات ومرافق المعالجة بناءً على متطلبات العمل والحاجة للمعرفة (Need-to-know)."
        },
        en: {
            q: "All sales staff hold blanket root access to central customer DBs without access control rules or restricting access based on Need-to-know. Finding?",
            opts: [
                "Conformity, as sales teams require unrestricted DB visibility for commercial performance",
                "Nonconformity against Control Annex A 5.15, for failing to define and implement access control rules based on business and Need-to-know requirements",
                "Opportunity for Improvement (OFI) to block off-hours remote access",
                "Conformity, provided sales personnel underwent background screening"
            ],
            ans: 1,
            exp: "Control A.5.15 requires that rules to control physical and logical access to information and associated assets shall be established based on business and Need-to-know."
        }
    },
    {
        id: 125,
        ref: "ISO/IEC 27001:2022 - Annex A 5.16 & 5.18",
        ar: {
            q: "عند استقالة أحد مهندسي الشبكات، قامت الشركة بإلغاء حساب البريد الإلكتروني، ولكنها نسيت إزالة أو تعديل حقوق الوصول والصلاحيات (Access rights) الخاصة به على السيرفرات والجدران النارية لمدة 3 أشهر. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما لم يقم المهندس المستقيل بالدخول أو التسبب في أي ضرر",
                "حالة عدم مطابقة للضابطين Annex A 5.16 و 5.18، لعدم تعديل أو إزالة حقوق الوصول (Access rights) للأفراد عند إنهاء أو تغيير التوظيف فوراً",
                "ملاحظة تحسين (OFI) بتكليف موظف آخر لمراجعة الحسابات شهرياً",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضوابط Annex A 5.16 و 5.18 تفرض إدارة إغلاق وتعديل وإزالة حقوق الوصول للصلاحيات والهويات فور إنهاء التوظيف أو العقد أو تغييره."
        },
        en: {
            q: "Three months post-resignation, a network engineer's SSH keys and firewall admin privileges remained active. HR had deleted his email only. Verdict?",
            opts: [
                "Conformity, provided the departed engineer made zero attempts to log into production",
                "Nonconformity against Controls Annex A 5.16 and 5.18, for failing to remove or modify access rights upon termination of employment",
                "Opportunity for Improvement (OFI) to assign monthly manual account audits",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Controls A.5.16 and A.5.18 explicitly mandate that access rights of all personnel and interested parties shall be removed or modified upon termination."
        }
    },
    {
        id: 126,
        ref: "ISO/IEC 27001:2022 - Annex A 6.3",
        ar: {
            q: "شركة تقنية تجري تدريباً توعوياً أمنياً لجميع الموظفين الجدد عند الانضمام فقط، ولكنها لا تقدم أي توعية أو تدريب أمني دوري ومستمر (Information security awareness) للموظفين القدامى لمواجهة التهديدات الحديثة. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن التوعية عند التعيين تكفي لتغطية المتطلبات الأساسية",
                "حالة عدم مطابقة للضابط Annex A 6.3، لأن أفراد المنظمة والجهات المعنية يجب أن يتلقوا التوعية والتعليم والتدريب الأمني المناسب والتحديثات المنتظمة",
                "ملاحظة تحسين (OFI) بإرسال إيميل تحذيري كلما ظهر فيروس جديد",
                "مطابقة، طالما تم توقيع السياسة الأمنية عند التعيين"
            ],
            ans: 1,
            exp: "الضابط Annex A 6.3 يفرض أن يتلقى الموظفون والمتعاقدون التوعية والتعليم والتدريب الأمني المناسب والتحديثات المنتظمة (Regular updates) المتعلقة بسياسات المنظمة."
        },
        en: {
            q: "Security onboarding training occurs exclusively during hiring, with zero ongoing awareness refresher sessions provided to existing staff. Audit ruling?",
            opts: [
                "Conformity, as initial onboarding training satisfies baseline compliance expectations",
                "Nonconformity against Control Annex A 6.3, because personnel shall receive appropriate awareness, education, and regular training updates",
                "Opportunity for Improvement (OFI) to send warning emails whenever new malware emerges",
                "Conformity, provided employees signed policy acknowledgments during hiring"
            ],
            ans: 1,
            exp: "Control A.6.3 mandates that personnel of the organization and relevant interested parties shall receive appropriate information security awareness and regular updates."
        }
    },
    {
        id: 127,
        ref: "ISO/IEC 27001:2022 - Annex A 6.5",
        ar: {
            q: "عند إنهاء عقد موظف يعمل في إدارة المخاطر، لم يقم قسم HR أو مدير المباشر بتعريف الموظف بمسؤولياته وتزاماته المستمرة بعد إنهاء التوظيف (Responsibilities after termination) والمتعلقة بالحفاظ على سرية البيانات. ما تصنيف الخلل؟",
            opts: [
                "مطابقة، لأن الالتزامات تنتهي تلقائياً بانتهاء عقد العمل وتسليم الراتب",
                "حالة عدم مطابقة للضابط Annex A 6.5، لعدم تعريف وإبلاغ وتطبيق مسؤوليات والتزامات أمن المعلومات التي تظل سارية بعد تغيير أو إنهاء التوظيف",
                "ملاحظة تحسين (OFI) بإرسال خطاط شكر ينص على السرية",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 6.5 ينص بوضوح على أن مسؤوليات والتزامات أمن المعلومات التي تظل سارية بعد إنهاء أو تغيير التوظيف يجب تعريفها وإبلاغها للفرد وتنفيذها."
        },
        en: {
            q: "During employee offboarding, HR executed zero exit briefings regarding post-employment confidentiality obligations or ongoing data secrecy. Finding?",
            opts: [
                "Conformity, as all contractual duties legally expire upon final paycheck settlement",
                "Nonconformity against Control Annex A 6.5, for failing to define, communicate, and enforce information security responsibilities that remain valid post-termination",
                "Opportunity for Improvement (OFI) to mail a thank-you note mentioning confidentiality",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.6.5 dictates: 'Information security responsibilities and duties that remain valid after termination or change of employment shall be defined, enforced...'"
        }
    },
    {
        id: 128,
        ref: "ISO/IEC 27001:2022 - Annex A 7.5",
        ar: {
            q: "شركة تسمح لعمال النظافة وموظفي الصيانة الخارجية بالعمل داخل غرف السيرفرات والمناطق الآمنة (Secure areas) دون مراقبة أو إشراف ودون الحصول على تصاريح دخول مؤقتة. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن عمال الصيانة والنظافة يمتلكون تصاريح دخول عامة للمبنى",
                "حالة عدم مطابقة للضابط Annex A 7.5، لعدم حماية ومراقبة العمل في المناطق الآمنة (Working in secure areas) وضمان إشراف الأفراد المصرح لهم",
                "ملاحظة تحسين (OFI) بتركيب كاميرات إضافية وتجاهل الإشراف البشري",
                "مطابقة، طالما لم يتم إيقاف أي سيرفر عن العمل"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.5 يتطلب تصميم وتطبيق إجراءات الحماية والعمل في المناطق الآمنة (Working in secure areas) وضمان الإشراف على الأطراف غير المصرح لها."
        },
        en: {
            q: "External cleaning crews work inside primary server rooms unescorted, unmonitored, and without logged temporary visitor permits. Assessment?",
            opts: [
                "Conformity, provided maintenance crews hold general facility entry badges",
                "Nonconformity against Control Annex A 7.5, for failing to enforce protection and supervision rules for working in secure areas",
                "Opportunity for Improvement (OFI) to add CCTV coverage and skip physical escorts",
                "Conformity, provided no server hardware suffered operational outages"
            ],
            ans: 1,
            exp: "Control A.7.5 mandates that working in secure areas shall be protected and monitored, ensuring unauthorized physical access is prevented."
        }
    },
    {
        id: 129,
        ref: "ISO/IEC 27001:2022 - Annex A 7.6",
        ar: {
            q: "شركة تملك صالة استقبال مخصصة لتناول الأطعمة والمشروبات بجوار أجهزة الخوادم وسيرفرات حفظ النسخ الاحتياطية مباشرة دون وجود فاصل، وتبين وجود أطعمة وسوائل موضوعة فوق أجهزة السيرفر. ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن الموظفين يتوخون الحذر أثناء الأكل والشرب",
                "حالة عدم مطابقة للضابط Annex A 7.6، لعدم منع أو تقييد الأكل والشرب والتخزين غير الملاءم في المناطق الآمنة لمنع المخاطر الفيزيائية (Delivery/Loading bays & Delivery points)",
                "ملاحظة تحسين (OFI) بوضع غطاء بلاستيكي على السيرفرات",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 7.6 يوجب وضع وتطبيق قواعد لمنع الأكل والشرب والتعديات البيئية داخل المناطق الآمنة لحماية المعدات من التلف الفيزيائي."
        },
        en: {
            q: "Staff eat meals and store open drinks directly on top of active server chassis due to space constraints in the server room. Ruling?",
            opts: [
                "Conformity, provided technical personnel exercise personal caution while eating",
                "Nonconformity against Control Annex A 7.6, for failing to prohibit and restrict eating, drinking, and unsafe environmental hazards in secure physical areas",
                "Opportunity for Improvement (OFI) to place plastic covers over server racks",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.7.6 requires enforcing physical safety rules, including prohibiting eating and drinking in secure processing areas to avoid damage."
        }
    },
    {
        id: 130,
        ref: "ISO/IEC 27001:2022 - Annex A 8.7",
        ar: {
            q: "شركة تسمح للموظفين بتثبيت أي برمجيات وتطبيقات مجانية من الإنترنت على أجهزتهم المكتبية بحرية دون وجود سياسة أو ضوابط لتثبيت البرامج (Installation of software on operational systems). ما هو القرار؟",
            opts: [
                "مطابقة، لأن تحميل البرمجيات يرفع كفاءة وإنتاجية الموظف",
                "حالة عدم مطابقة للضابط Annex A 8.7، لعدم إنشاء وتطبيق قواعد لتقييد وإدارة تثبيت البرمجيات بواسطة المستخدمين على الأنظمة التشغيلية",
                "ملاحظة تحسين (OFI) بحظر التثبيت في قسم المالية فقط",
                "مطابقة، طالما تم تثبيت برامج مكافحة الفيروسات"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.7 ينص على وجوب إنشاء وتطبيق قواعد لضبط وتقييد تثبيت البرمجيات (Installation of software) بواسطة المستخدمين على الأنظمة التشغيلية."
        },
        en: {
            q: "Employees install arbitrary open-source software onto corporate workstations without IT approval, policies, or administrative restrictions. Finding?",
            opts: [
                "Conformity, as unhindered software installation supports employee workplace flexibility",
                "Nonconformity against Control Annex A 8.7, for failing to establish and enforce rules governing software installation by users on operational systems",
                "Opportunity for Improvement (OFI) to block installations in Finance only",
                "Conformity, provided endpoint antivirus protection is running"
            ],
            ans: 1,
            exp: "Control A.8.7 explicitly requires: 'Rules governing the installation of software by users on operational systems shall be established and implemented.'"
        }
    },
    // --- CONTINUATION: QUESTIONS 131 TO 200 ---
    {
        id: 131,
        ref: "ISO/IEC 27001:2022 - Annex A 8.17",
        ar: {
            q: "نظام التداول بشركة مالية يعتمد على سيرفرات معالجة معقدة. المراجع وجد أن السيرفرات لا تطبق أي آليات للمراقبة والقياس التلقائي للسعة والاستيعاب (Capacity management) لمنع تعطل النظام عند تزاحم المعاملات. ما التصنيف؟",
            opts: [
                "مطابقة، لأن زيادة السعة تتم يدوياً عند تباطؤ النظام",
                "حالة عدم مطابقة للضابط Annex A 8.17، لعدم مراقبة وتعديل استخدام الموارد وإسقاطات متطلبات السعة المستقبلية (Capacity management) لضمان الأداء التوافري المطلوب",
                "ملاحظة تحسين (OFI) بشراء سيرفر احتياطي إضافي وضعه في المخزن",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.17 يوجب مراقبة وتعديل استخدام الموارد وإجراء توقعات السعة المستقبلية (Capacity management) لضمان توفر قدرة المعالجة والتخزين المطلوبة."
        },
        en: {
            q: "A trading platform operates without system capacity monitoring or forecasting metrics, causing frequent crashes during high volume trading spikes. Finding?",
            opts: [
                "Conformity, provided IT manually provisions extra RAM after performance dips occur",
                "Nonconformity against Control Annex A 8.17, for failing to monitor, tune, and forecast capacity requirements to ensure required system performance",
                "Opportunity for Improvement (OFI) to purchase spare unconfigured server blades",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.17 explicitly dictates: 'The use of resources shall be monitored and tuned, and projections made of future capacity requirements...'"
        }
    },
    {
        id: 132,
        ref: "ISO/IEC 27001:2022 - Annex A 8.18",
        ar: {
            q: "شركة تقنية تستخدم برمجيات سحابية لتخزين البيانات. المراجع وجد أن الشركة لم تقم بتطبيق أو تفعيل آليات حماية التشفير أو التثبت من سلامة الملفات أثناء المعالجة (Use of cryptography). مدير IT أفاد: 'الشركة السحابية هي المسؤولة عن التشفير'. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن التشفير في البيئات السحابية يعتبر مسؤولية حصرية للمزود",
                "حالة عدم مطابقة للضابط Annex A 8.18، لعدم تعريف وتطبيق القواعد الخاصة باستخدام التشفير والضوابط التشفيرية وفقاً لتقييم المخاطر",
                "ملاحظة تحسين (OFI) بالتأكد من نوع التشفير المستعمل في التقرير القادم",
                "مطابقة، طالما أن الاتصال يتم عبر بروتوكول HTTPS"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.18 يفرض تحديد وتطبيق القواعد الخاصة باستخدام التشفير وضوابطه (Use of cryptography) لحماية سرية وسلامة البيانات."
        },
        en: {
            q: "A firm stores sensitive ledgers in cloud buckets without defining cryptographic usage policies or validating encryption enforcement, claiming cloud vendor liability. Ruling?",
            opts: [
                "Conformity, as cloud data encryption falls entirely under cloud provider responsibility",
                "Nonconformity against Control Annex A 8.18, for failing to define and implement rules for the effective use of cryptography according to risk assessment",
                "Opportunity for Improvement (OFI) to check cloud encryption algorithms next cycle",
                "Conformity, provided connections use standard HTTPS protocol"
            ],
            ans: 1,
            exp: "Control A.8.18 mandates that rules for the effective use of cryptography, including cryptographic key management, shall be defined and implemented."
        }
    },
    {
        id: 133,
        ref: "ISO/IEC 27001:2022 - Annex A 8.22",
        ar: {
            q: "شركة طيران تربط أجهزة الحاسب الخاصة بالموظفين في كافة الفروع بـ (Internal Network) واحدة مفتوحة دون أي تقسيم أو عزل للشبكات (Segregation of networks) بين الإدارات الحساسة والبث العام. ما هو الخلل؟",
            opts: [
                "مطابقة، لأن توحيد نطاق الشبكة يسهل مشاركة الملفات والطابعات",
                "حالة عدم مطابقة للضابط Annex A 8.22، لعدم تجزئة وفصل مجموعات خدمات المعلومات والمستخدمين والأنظمة داخل الشبكة (Segregation in networks)",
                "ملاحظة تحسين (OFI) بوضع كلمات سر على المجلدات المشتركة",
                "عدم مطابقة للبند 5.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.22 يوجب فصل وتقسيم الشبكات (Segregation of networks) لعزل المجموعات والخدمات والأنظمة الحساسة وتقليل مخاطر الاختراق الممتد."
        },
        en: {
            q: "An airline connects branch office PCs, passenger Wi-Fi, and Flight Operations into a single unsegmented corporate VLAN. What is the finding?",
            opts: [
                "Conformity, as flat network architecture facilitates cross-branch file and printer sharing",
                "Nonconformity against Control Annex A 8.22, for failing to segregate groups of information services, users, and information systems on networks",
                "Opportunity for Improvement (OFI) to set passwords on shared network folders",
                "Nonconformity against Clause 5.1 only"
            ],
            ans: 1,
            exp: "Control A.8.22 dictates: 'Groups of information services, users and information systems shall be segregated on networks.'"
        }
    },
    {
        id: 134,
        ref: "ISO/IEC 27001:2022 - Annex A 8.24",
        ar: {
            q: "تعتمد شركة بنكية على برمجيات لإدارة المفاتيح والمصادقة، ولكن المراجع وجد أن الأكواد المصدرية (Source code) للتطبيقات الحساسة محفوظة في مجلد مفتوح لجميع موظفي شركة البرمجيات دون تقييد الوصول أو حماية الملكية الفكرية. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما أن الكود المصدري محفوظ داخل بيئة الشركة الداخلية",
                "حالة عدم مطابقة للضابط Annex A 8.24، لعدم تقييد وحماية الوصول إلى الكود المصدري للبرمجيات (Use of secret authentication information / Source code protection)",
                "ملاحظة تحسين (OFI) بنقل الكود المصدري إلى فلاشة خارجية",
                "مطابقة، طالما لم يتم تسريب الكود للإنترنت"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.24 يفرض تقييد وإدارة الوصول إلى الأكواد المصدرية (Source code) وأدوات التطوير لحمايتها من التعديل والسرقة."
        },
        en: {
            q: "A bank's proprietary application source code is stored in an unencrypted shared repository accessible to all employees and contractors. Ruling?",
            opts: [
                "Conformity, provided the repository sits inside the internal corporate firewalled network",
                "Nonconformity against Control Annex A 8.24, for failing to restrict and manage read/write access to program source code and associated items",
                "Opportunity for Improvement (OFI) to store source code on removable flash drives",
                "Conformity, provided no leaks occurred on public developer forums"
            ],
            ans: 1,
            exp: "Control A.8.24 mandates that read and write access to program source code and associated items shall be appropriately restricted."
        }
    },
    {
        id: 135,
        ref: "ISO/IEC 27001:2022 - Annex A 8.28",
        ar: {
            q: "شركة تطوير تطبيقات لا تطبق أي ممارسات للترميز الآمن (Secure coding)، وتسمح للمبرمجين بترك كلمة السر الخاصة بقاعدة البيانات مكتوبة صراحة داخل الكود البرمجي (Hardcoded credentials). ما هو التصنيف؟",
            opts: [
                "مطابقة، لأن كتابة كلمة السر داخل الكود يزيد سرعة الاتصال بقاعدة البيانات",
                "حالة عدم مطابقة للضابط Annex A 8.28، لعدم تطبيق مبادئ الترميز الآمن (Secure coding) لحماية البرمجيات من الثغرات المكتشفة",
                "ملاحظة تحسين (OFI) بتغيير كلمة سر قاعدة البيانات كل شهر",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.28 (جديد في 2022) يفرض تطبيق مبادئ وقواعد البرمجة والترميز الآمن (Secure coding) لحماية التطبيقات ومنع كتابة التوثيق داخل الكود."
        },
        en: {
            q: "Developers hardcode production database admin credentials directly inside application source code files. What is the audit finding?",
            opts: [
                "Conformity, as hardcoding credentials optimizes application database query performance",
                "Nonconformity against Control Annex A 8.28, for failing to establish and enforce secure coding principles across software development",
                "Opportunity for Improvement (OFI) to rotate DB passwords monthly",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.28 (introduced in 2022 edition) requires establishing secure coding principles for software development, forbidding hardcoded secrets."
        }
    },
    {
        id: 136,
        ref: "ISO/IEC 27001:2022 - Clause 4.2 & Annex A 5.31",
        ar: {
            q: "مؤسسة صحية تخزن بيانات المرضى وتخضع للوائح الحكومية لحماية البيانات. المراجع وجد أن المؤسسة لم تقم بمراجعة توافق أنظمتها مع اللوائح القانونية والتنظيمية بشكل دوري، وتعتمد على تقرير استشاري قديم عمره 4 سنوات. ما هو القرار؟",
            opts: [
                "مطابقة، لأن التشريعات والقوانين لا تتغير بسرعة في القطاع الطبي",
                "حالة عدم مطابقة للبند 4.2 والضابط Annex A 5.31، لعدم المراجعة المستقلة والمستمرة للتوافق مع المتطلبات القانونية والتنظيمية والتعاقدية ذات الصلة بأمن المعلومات",
                "ملاحظة تحسين (OFI) بتعيين محامي لمتابعة القوانين عند الحاجة",
                "مطابقة، طالما لم توقع غرامات حكومية على المؤسسة"
            ],
            ans: 1,
            exp: "البند 4.2 والضابط Annex A 5.31 يفرضان تحديد ومراجعة التوافق مع المتطلبات القانونية والتنظيمية والتعاقدية (Legal & Regulatory requirements) بانتظام."
        },
        en: {
            q: "A healthcare facility relies on a 4-year-old legal review to prove regulatory compliance with state health privacy laws, conducting zero periodic updates. Verdict?",
            opts: [
                "Conformity, as statutory healthcare privacy frameworks remain static over long multi-year cycles",
                "Nonconformity against Clause 4.2 and Control Annex A 5.31, for failing to regularly review and maintain compliance with legal, statutory, and contractual requirements",
                "Opportunity for Improvement (OFI) to retain external legal counsel on call",
                "Conformity, provided regulators issued no formal compliance fines"
            ],
            ans: 1,
            exp: "Clause 4.2 and Control A.5.31 mandate regularly reviewing and maintaining compliance with statutory, regulatory, and contractual obligations."
        }
    },
    {
        id: 137,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2 & Annex A 8.8",
        ar: {
            q: "شركة تقنية أعدت سجلاً للمخاطر، ولكن عند فحص عملية تقييم الثغرات الفنية (Vulnerability management)، تبين أن الشركة تجمع الثغرات ولكنها لا تقوم بربطها بتقييم المخاطر أو خطط المعالجة المعتمدة بالـ ISMS. كيف يقيّم المراجع هذا الفصل؟",
            opts: [
                "مطابقة، لأن إدارة الثغرات الفنية عملية تشغيلية منفصلة عن إدارة مخاطر المعيار",
                "حالة عدم مطابقة للبند 6.1.2 والضابط Annex A 8.8، لأن تقييم ومعالجة الثغرات الفنية يجب أن يدمج ضمن منهجية إدارة المخاطر وتحديد خطط المعالجة",
                "ملاحظة تحسين (OFI) بإنشاء ملف Excel مشترك بين الفريقين",
                "مطابقة، طالما يتم فحص الثغرات شهرياً"
            ],
            ans: 1,
            exp: "إدارة الثغرات الفنية (A.8.8) جزء لا يتجزأ من عملية تقييم ومعالجة المخاطر (6.1.2 & 6.1.3) لضمان تحديد الأثر والترتيب حسب الأولوية."
        },
        en: {
            q: "Technical vulnerability scanning logs run independently without integrating scan findings into the ISMS Risk Assessment or Risk Treatment Plan. Assessment?",
            opts: [
                "Conformity, as technical vulnerability scanning acts as an operational IT function distinct from ISMS risk management",
                "Nonconformity against Clause 6.1.2 & Control Annex A 8.8, because managing technical vulnerabilities must directly feed the ISMS risk assessment and treatment process",
                "Opportunity for Improvement (OFI) to create a shared spreadsheet between IT and Security",
                "Conformity, provided vulnerability scans run monthly"
            ],
            ans: 1,
            exp: "Control A.8.8 technical vulnerability management must directly integrate into Clause 6.1.2 risk assessment to evaluate exposure and drive risk treatment."
        }
    },
    {
        id: 138,
        ref: "ISO/IEC 27001:2022 - Clause 7.2 & 7.3",
        ar: {
            q: "شركة تعاقدت مع موظفي دعم فني عبر الإنترنت (Remote Helpdesk). المراجع وجد أن الشركة لم تقم بالتحقق من كفاءتهم ولم تقدم لهم أي توعية بسياسات أمن المعلومات الخاصة بالنظام الذي يديرونه. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن موظفي الدعم عن بعد يعتبرون أطرافاً خارجية خارج نطاق التوعية والكفاءة",
                "حالة عدم مطابقة للبندين 7.2 و 7.3، لأن متطلبات الكفاءة والتوعية تطبق على جميع العاملين الذين يؤثر عملهم على أداء أمن المعلومات بغض النظر عن موقعهم",
                "ملاحظة تحسين (OFI) بإرسال رابط السياسة في رسالة نصية",
                "مطابقة، طالما أن عقد توريد العمالة يتضمن بند الكفاءة"
            ],
            ans: 1,
            exp: "البندان 7.2 و 7.3 يفرضان شروط الكفاءة والتوعية على أي شخص يعمل تحت سيطرة المنظمة ويؤثر على أداء أمن المعلومات، سواء كان داخلياً أو يعمل عن بعد."
        },
        en: {
            q: "Outsourced remote helpdesk technicians hold full active directory admin rights but received zero competence validation or ISMS awareness training. Finding?",
            opts: [
                "Conformity, as remote third-party support personnel fall outside internal competence and awareness requirements",
                "Nonconformity against Clauses 7.2 & 7.3, as competency and awareness mandates apply to all personnel affecting security performance regardless of location",
                "Opportunity for Improvement (OFI) to text a link to the security policy",
                "Conformity, provided the outsourcing agreement includes a general competency clause"
            ],
            ans: 1,
            exp: "Clauses 7.2 and 7.3 apply to ALL persons doing work under the organization's control that affects information security performance."
        }
    },
    {
        id: 139,
        ref: "ISO/IEC 27001:2022 - Clause 8.1 & Annex A 5.19",
        ar: {
            q: "شركة تتعامل مع 10 موردين للخدمات التقنية والحوسبة. المراجع وجد أن الشركة لا تملك أي سياسة أو ضوابط لإدارة أمن المعلومات في علاقات الموردين (Supplier relationships) وتعتمد حصرياً على العقود التجارية القياسية للموردين. ما القرار؟",
            opts: [
                "مطابقة، لأن العقود التجارية القياسية كافية لحماية حقوق المنظمة",
                "حالة عدم مطابقة للبند 8.1 والضابط Annex A 5.19، لعدم تحديد وتطبيق سياسة وإجراءات لضبط مخاطر أمن المعلومات المتعلقة بعلاقات الموردين",
                "ملاحظة تحسين (OFI) بطلب شهادة ISO 27001 من الموردين عند التجديد",
                "مطابقة، طالما لم يحدث أي خرق أمني من طرف الموردين"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.19 والبند 8.1 يفرضان تحديد وتطبيق سياسة وضوابط لتقليل المخاطر المرتبطة بالوصول إلى أصول المنظمة عبر الموردين."
        },
        en: {
            q: "An enterprise utilizes 10 critical cloud vendors but maintains zero supplier security policies or evaluation processes, relying strictly on standard vendor click-through terms. Ruling?",
            opts: [
                "Conformity, as standard vendor terms legally satisfy baseline corporate protection needs",
                "Nonconformity against Clause 8.1 & Control Annex A 5.19, for failing to define and implement supplier security policies and controls to manage supplier risks",
                "Opportunity for Improvement (OFI) to request ISO certs from vendors upon renewal",
                "Conformity, provided no supplier-related breaches occurred historically"
            ],
            ans: 1,
            exp: "Control A.5.19 and Clause 8.1 require defining and implementing processes and topic-specific policies to manage information security risks associated with supplier relationships."
        }
    },
    {
        id: 140,
        ref: "ISO/IEC 27001:2022 - Clause 9.1 & Annex A 8.16",
        ar: {
            q: "شركة تقوم بإجراء فحص أمني واختبارات اختراق (Penetration testing) للأنظمة التطويرية، لكنها لا تقوم بتحليل أو قياس أو تقييم النتائج لمعرفة مدى تحسن أو تدهور الوضع الأمني عبر الزمن. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن إجراء اختبار الاختراق واكتشاف الثغرات يكفي لتلبية غرض الضابط",
                "حالة عدم مطابقة للبند 9.1 والضابط Annex A 8.16، لأن نتائج الاختبارات والمراقبة يجب تحليلها وتقييمها (Analyzed and evaluated) لقياس فاعلية النظام",
                "ملاحظة تحسين (OFI) بوضع الرسوم البيانية في تقرير المراجعة القادم",
                "مطابقة، طالما تم إرسال التقرير الفني لمهندسي الشبكات"
            ],
            ans: 1,
            exp: "البند 9.1 يتطلب عدم الاكتفاء بجمع البيانات أو إجراء الاختبارات، بل يوجب تحليل وتقييم النتائج (Analyzed & Evaluated) لقياس الفاعلية."
        },
        en: {
            q: "Penetration tests run annually, but management performs zero analysis or trend evaluation on historical findings to measure security improvement over time. Finding?",
            opts: [
                "Conformity, as executing penetration tests and generating vulnerability lists satisfies technical testing controls",
                "Nonconformity against Clause 9.1 & Control Annex A 8.16, because monitoring results must be analyzed and evaluated to measure ISMS effectiveness",
                "Opportunity for Improvement (OFI) to attach trend charts to future audit reports",
                "Conformity, provided technical reports were emailed to network engineers"
            ],
            ans: 1,
            exp: "Clause 9.1 specifically requires analyzing and evaluating monitoring and measurement results to evaluate ISMS performance and effectiveness."
        }
    },
    {
        id: 141,
        ref: "ISO/IEC 27001:2022 - Clause 10.2 & Annex A 5.26",
        ar: {
            q: "شركة تعرضت لهجوم سيبراني أدى لتوقف السيرفرات لمدة يومين. الشركة قامت بتركيب جدار ناري جديد لمنع الهجوم، لكنها لم تجرِ أي تقييم لسبب الفشل الأول ولم تقم بتحديث سجل المخاطر أو خطة الاستجابة. ما هو قرار المراجع؟",
            opts: [
                "مطابقة، لأن شراء الجدار الناري الجديد يعتبر معالجة كافية وناجحة للحادثة",
                "حالة عدم مطابقة للبند 10.2 والضابط Annex A 5.26، لعدم تحليل السبب الجذر (Root cause) وعدم تقييم الحاجة لإجراءات تصحيحية لمنع تكرار عدم المطابقة",
                "ملاحظة تحسين (OFI) بكتابة ملخص للحادثة في تقرير الجودة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 10.2 يتطلب عند وقوع خرق أو عدم مطابقة تقييم الحاجة لإجراء تصحيحي لإزالة الأسباب الجذرية (Root causes) لمنع التكرار وتحديث المخاطر."
        },
        en: {
            q: "Following a 2-day outage caused by a cyber attack, IT bought a new firewall but conducted zero root-cause analysis and left risk logs unupdated. Ruling?",
            opts: [
                "Conformity, as procuring new firewall hardware successfully resolves the security incident",
                "Nonconformity against Clause 10.2 and Control Annex A 5.26, for failing to evaluate the root cause and execute corrective actions to eliminate causes of nonconformity",
                "Opportunity for Improvement (OFI) to log an incident summary in quality files",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 10.2 explicitly mandates evaluating the need for action to eliminate the causes of nonconformity so that it does not recur elsewhere."
        }
    },
    {
        id: 142,
        ref: "ISO/IEC 27001:2022 - Annex A 5.13 & 8.12",
        ar: {
            q: "مؤسسة قامت بتصنيف مستنداتها إلى (سرية)، لكنها تتيح إرسال هذه المستندات السرية عبر البريد الإلكتروني الخارجي العادي دون أي مشفرات أو أدوات لمنع تسريب البيانات (DLP). ما موقف المراجع؟",
            opts: [
                "مطابقة، طالما أن كلمة 'سري' مكتوبة على أعلى المستند الورقي الأصلي",
                "حالة عدم مطابقة للضابطين Annex A 5.13 و 8.12، لعدم تطبيق تدابير المنافذ والملصقات وتدابير منع تسريب البيانات (DLP) المتوافقة مع مخطط التصنيف",
                "ملاحظة تحسين (OFI) بتنبيه الموظفين بعدم إرفاق المستندات السرية",
                "مطابقة، طالما لم يكتشف أي تسريب حتى الآن"
            ],
            ans: 1,
            exp: "الضوابط Annex A 5.13 و 8.12 تفرض حماية البيانات المصنفة وتطبيق تدابير التشفير والـ DLP لمنع نقلها أو تسريبها بشكل مخالف للتصنيف."
        },
        en: {
            q: "Documents marked 'Confidential' are routinely emailed across open internet channels with zero Data Leakage Prevention (DLP) or transit encryption. Finding?",
            opts: [
                "Conformity, provided the word 'Confidential' is stamped on the physical header of original files",
                "Nonconformity against Controls Annex A 5.13 and 8.12, for failing to enforce protection and Data Leakage Prevention (DLP) controls aligned with data classification",
                "Opportunity for Improvement (OFI) to remind staff not to attach confidential files",
                "Conformity, provided no leaks have been detected on the dark web"
            ],
            ans: 1,
            exp: "Controls A.5.13 and A.8.12 require implementing procedures for handling classified information and deploying DLP controls to protect sensitive egress data."
        }
    },
    {
        id: 143,
        ref: "ISO/IEC 27001:2022 - Annex A 7.10 & 8.10",
        ar: {
            q: "شركة تقوم ببيع الأجهزة والكمبيوترات القديمة التالفة في مزاد علني دون إجراء مسح آمن للبيانات (Secure deletion / overwriting) ودون توثيق عملية الإتلاف أو إزالة البيانات الحساسة المخزنة عليها. ما هو التصنيف؟",
            opts: [
                "مطابقة، لأن بيع الأجهزة التالفة يعيد جزءاً من التكاليف المالي للمؤسسة",
                "حالة عدم مطابقة للضابطين Annex A 7.10 و 8.10، لعدم إدارة وسائط التخزين والتخلص منها بأمان ولعدم التحقق من الحذف الآمن للمعلومات قبل التخلص",
                "ملاحظة تحسين (OFI) بتهشيم الأقراص الصلبة بمطرقة بدائياً",
                "مطابقة، طالما أن الأجهزة لا تعمل بكفاءة"
            ],
            ans: 1,
            exp: "الضوابط Annex A 7.10 و 8.10 تفرض التخلص الآمن من وسائط التخزين والمعدات، والتحقق من الحذف والمسح الآمن للبيانات الحساسة قبل التخلص أو البيع."
        },
        en: {
            q: "Decommissioned corporate laptops containing historical client data are sold at public auctions without secure data wiping or destruction certification. Finding?",
            opts: [
                "Conformity, as liquidating asset scrap recovers financial capital for the enterprise",
                "Nonconformity against Controls Annex A 7.10 and 8.10, for failing to safely manage storage media disposal and verify secure information deletion prior to release",
                "Opportunity for Improvement (OFI) to manually smash hard drives with hammers",
                "Conformity, provided auction buyers sign informal liability waivers"
            ],
            ans: 1,
            exp: "Controls A.7.10 and A.8.10 mandate managing storage media throughout their lifecycle and ensuring secure information deletion before equipment disposal."
        }
    },
    {
        id: 144,
        ref: "ISO/IEC 27001:2022 - Annex A 8.5 & 8.20",
        ar: {
            q: "شركة توفر خدمة الدخول عن بعد لشبكة الإنتاج عبر الـ VPN، ولكنها تكتفي بكلمة سر فقط دون تطبيق المصادقة المتعددة العوامل (MFA) ودون تقييد الشبكة اللاسلكية الخارجية. ما هو القرار المنهجي؟",
            opts: [
                "مطابقة، لأن بروتوكولات الـ VPN تعتبر آمنة بذاتها ولا تحتاج لـ MFA",
                "حالة عدم مطابقة للضابطين Annex A 8.5 و 8.20، لعدم تطبيق تقنيات المصادقة الآمنة (Secure authentication / MFA) لحماية الوصول المباشر للشبكات الحساسة",
                "ملاحظة تحسين (OFI) بزيادة طول كلمة السر إلى 16 حرفاً",
                "مطابقة، طالما يتم تغيير كلمة السر كل 90 يوماً"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.5 يفرض استخدام تقنيات المصادقة الآمنة (مثل MFA) بناءً على قيود الوصول والتحكم المباشر بالشبكات والأنظمة الحساسة."
        },
        en: {
            q: "Remote administrative VPN connections into core production environments rely solely on single-factor passwords with zero Multi-Factor Authentication (MFA). Ruling?",
            opts: [
                "Conformity, as standard VPN tunneling protocols inherently guarantee perimeter transport encryption",
                "Nonconformity against Controls Annex A 8.5 and 8.20, for failing to deploy secure authentication mechanisms (e.g., MFA) for privileged network access",
                "Opportunity for Improvement (OFI) to enforce 16-character password complexity rules",
                "Conformity, provided passwords are rotated every 90 days"
            ],
            ans: 1,
            exp: "Control A.8.5 explicitly requires implementing secure authentication technologies (such as MFA) based on information access restrictions and risk assessments."
        }
    },
    {
        id: 145,
        ref: "ISO/IEC 27001:2022 - Annex A 8.9",
        ar: {
            q: "شركة أعدت مسودة لإعدادات التكوين الآمن (Configuration baselines) لخوادمها، لكن أثناء الفحص تبين أن السيرفرات الحية تعمل بإعدادات المورد الافتراضية وبها خدمات غير مستخدمة مفتوحة بدون أي مراقبة أو ضبط للتكوين. ما التصنيف؟",
            opts: [
                "مطابقة، لأن وجود المسودة يثبت تخطيط الشركة للتكوين الآمن مستقبلاً",
                "حالة عدم مطابقة للضابط Annex A 8.9، لعدم تطبيق ومراقبة ومراجعة إدارة التكوين الآمن (Configuration management) للأجهزة والبرامج بشكل فعال",
                "ملاحظة تحسين (OFI) بإغلاق المنافذ المفتوحة يدوياً عند تباطؤ السيرفر",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.9 (جديد في 2022) يوجب إنشاء وتوثيق وتطبيق ومراقبة ومراجعة إعدادات التكوين الآمن (Configuration management) لضمان صلابة الأنظمة."
        },
        en: {
            q: "A firm drafted security hardening baselines on paper, but live servers still run default vendor configurations with unnecessary open ports and unneeded services. Ruling?",
            opts: [
                "Conformity, as having documented baseline drafts proves future configuration management intent",
                "Nonconformity against Control Annex A 8.9, for failing to implement, monitor, and enforce secure configuration management baselines in practice",
                "Opportunity for Improvement (OFI) to manually close open ports during maintenance windows",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.9 (introduced in 2022) dictates establishing, documenting, implementing, monitoring, and reviewing secure configurations for hardware and software."
        }
    },
    {
        id: 146,
        ref: "ISO/IEC 27001:2022 - Annex A 8.11",
        ar: {
            q: "شركة برمجية تقوم بنسخ قواعد بيانات المعاملات المالية المباشرة وتغذي بها أجهزة المطورين لاختبار الأكواد البرمجية دون تطبيق أي تقنيات لتمويه وحجب البيانات (Data masking). ما تقييم المراجع؟",
            opts: [
                "مطابقة، لأن المطورين يوقعون اتفاقيات عدم الإفشاء (NDA)",
                "حالة عدم مطابقة للضابط Annex A 8.11، لعدم استخدام تمويه وحجب البيانات (Data masking) لحماية البيانات الحساسة المستخدمة في بيئات غير إنتاجية",
                "ملاحظة تحسين (OFI) بمسح البيانات من أجهزة المطورين بعد انتهاء المشروع",
                "مطابقة، طالما أن المطورين يعملون من داخل مقر الشركة"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.11 (جديد في 2022) يفرض استخدام تمويه وحجب البيانات (Data masking) وفقاً لسياسة التحكم بالوصول والقوانين لحماية البيانات الحساسة."
        },
        en: {
            q: "Unmasked live financial customer DB dumps are regularly loaded onto developers' workstations for bug debugging. What is the nonconformity?",
            opts: [
                "Conformity, as software developers signed corporate Non-Disclosure Agreements (NDAs)",
                "Nonconformity against Control Annex A 8.11, for failing to enforce data masking techniques to protect sensitive data used in non-production environments",
                "Opportunity for Improvement (OFI) to delete test databases post-project delivery",
                "Conformity, provided software development occurs exclusively on-site"
            ],
            ans: 1,
            exp: "Control A.8.11 (introduced in 2022) specifies: 'Data masking shall be used in accordance with the organization's topic-specific policy on access control...'"
        }
    },
    {
        id: 147,
        ref: "ISO/IEC 27001:2022 - Annex A 8.13",
        ar: {
            q: "مؤسسة تجارية تقوم بأخذ نسخ احتياطية يومية، وعند تجربة استعادة إحدى النسخ أثناء المراجعة الميدانية، تبين أن النسخة تالفة وغير قابلة للاسترجاع لعدم وجود إجراءات للاختبار الدوري للنسخ. ما هو الخلل؟",
            opts: [
                "مطابقة، لأن تلف النسخة حادث اتفاقي عارض لا يعيب أصل عملية الأخذ اليومي",
                "حالة عدم مطابقة للضابط Annex A 8.13، لعدم اختبار استعادة النسخ الاحتياطية بانتظام (Regularly tested) للتحقق من سلامتها وقابليتها للاسترجاع",
                "ملاحظة تحسين (OFI) بأخذ نسختين يومياً بدلاً من نسخة واحدة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.13 يفرض صراحة الاحتفاظ بالنسخ الاحتياطية واختبارها بانتظام (Regularly tested) للتأكد من جاهزيتها وقابليتها للاستعادة."
        },
        en: {
            q: "Automated daily backup jobs execute without errors, but live sample restoration testing failed due to unmonitored corruption. What is the finding?",
            opts: [
                "Conformity, as isolated backup corruption represents a minor random media failure",
                "Nonconformity against Control Annex A 8.13, because backup copies shall be maintained AND regularly tested in accordance with agreed policies",
                "Opportunity for Improvement (OFI) to run dual backup jobs daily",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.13 explicitly mandates that backup copies of information, software, and systems shall be maintained and regularly tested."
        }
    },
    {
        id: 148,
        ref: "ISO/IEC 27001:2022 - Annex A 8.23",
        ar: {
            q: "شركة تتيح للموظفين تصفح شبكة الإنترنت بالكامل دون تطبيق أي حلول لتصفية الويب (Web filtering) أو منع الوصول للمواقع المشبوهة والتصيدية، مما أدى لإصابة الأجهزة ببرمجيات خبيثة. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، لأن الإصابة بالفيروسات حظر تشغيلي يتم علاجه ببرنامج Antivirus",
                "حالة عدم مطابقة للضابط Annex A 8.23، لعدم تقييد وإدارة الوصول إلى المواقع الإلكترونية الخارجية وتطبيق تصفية الويب (Web filtering) لحماية الأنظمة",
                "ملاحظة تحسين (OFI) بتنبيه الموظفين في الاجتماع الصباحي بعدم فتح الأظرف المشبوهة",
                "عدم مطابقة للبند 5.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.23 (جديد في 2022) يتطلب إدارة وتقييد الوصول للمواقع الإلكترونية الخارجية وتطبيق تصفية الويب (Web filtering) لحماية المنظمة."
        },
        en: {
            q: "Corporate workstations browse unfiltered public websites freely without URL filtering software or blocking malicious domains, leading to malware infections. Verdict?",
            opts: [
                "Conformity, as endpoint antivirus software sufficiently manages malware remediation cycles",
                "Nonconformity against Control Annex A 8.23, for failing to manage access to external websites through web filtering controls",
                "Opportunity for Improvement (OFI) to issue verbal reminders during morning staff meetings",
                "Nonconformity against Clause 5.1 only"
            ],
            ans: 1,
            exp: "Control A.8.23 (introduced in 2022) explicitly requires managing access to external websites to reduce exposure to malicious content (Web filtering)."
        }
    },
    {
        id: 149,
        ref: "ISO/IEC 27001:2022 - Annex A 8.31",
        ar: {
            q: "في شركة تطوير برمجيات، يعمل المبرمجون على السيرفر الرئيسي الحقيقي (Production) ويقومون بتعديل الأكواد البرمجية مباشرة على قاعدة البيانات الحية لسرعة إصلاح المشاكل، دون وجود فصل بين بيئات التطوير والإنتاج. ما موقف المراجع؟",
            opts: [
                "مطابقة، لأن العمل المباشر يسرع من معالجة المشاكل البنكية",
                "حالة عدم مطابقة للضابط Annex A 8.31، لعدم فصل وتأمين بيئات التطوير والاختبار والإنتاج (Separation of development, test and production environments)",
                "ملاحظة تحسين (OFI) بتخصيص ساعات الليل لإجراء التعديلات المباشرة",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.31 ينص بوضوح على وجوب فصل وتأمين بيئات التطوير والاختبار والإنتاج (Separation of development, test, and production environments) لمنع الأخطاء والتعديل غير المصرح به."
        },
        en: {
            q: "Software engineers edit, debug, and execute source code directly inside the live production database environment without environment isolation. Finding?",
            opts: [
                "Conformity, as direct production debugging accelerates critical bug resolution times",
                "Nonconformity against Control Annex A 8.31, for failing to separate and secure development, testing, and production environments",
                "Opportunity for Improvement (OFI) to restrict direct live edits to late night hours",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.31 explicitly mandates: 'Development, testing and production environments shall be separated and secured.'"
        }
    },
    {
        id: 150,
        ref: "ISO/IEC 27001:2022 - Clause 10.1 & Annex A 5.36",
        ar: {
            q: "شركة تمتلك نظام ISMS معتمد منذ 3 سنوات، ولكنها لم تجرِ أي مراجعة أو اختبار لفاعلية ضوابط أمن المعلومات المستحدثة بعد التعديلات التقنية الأخيرة. المراجع وجد أن النظام يحافظ على نفس الوثائق القديمة بدون تحسين مستمر. ما القرار؟",
            opts: [
                "مطابقة، طالما أن الشهادة ما زالت سارية ولم تسحب بواسطة جهة الشهادات",
                "حالة عدم مطابقة للبند 10.1 والضابط Annex A 5.36، لعدم التحقق والتحسين المستمر لملاءمة وكفاية وفاعلية نظام إدارة أمن المعلومات وضوابطه",
                "ملاحظة تحسين (OFI) بتغيير شكل غلاف الوثائق لإظهار التحديث",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "البند 10.1 والضابط Annex A 5.36 يفرضان التحقق والتحسين المستمر (Continual improvement) وتدقيق فاعلية وضوابط الـ ISMS لضمان ملاءمته وكفايته."
        },
        en: {
            q: "A certified firm maintains unchanged ISMS controls and documentation for 3 years post-tech revamps, demonstrating zero continual improvement activities. Ruling?",
            opts: [
                "Conformity, provided the external certification body has not formally revoked the certificate",
                "Nonconformity against Clause 10.1 & Control Annex A 5.36, for failing to continually improve the suitability, adequacy, and effectiveness of the ISMS and its controls",
                "Opportunity for Improvement (OFI) to redesign document cover templates",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Clause 10.1 and Control A.5.36 demand continually improving the suitability, adequacy, and effectiveness of the ISMS and verifying control implementation."
        }
    },
    {
        id: 151,
        ref: "ISO/IEC 27001:2022 - Core Concepts",
        ar: {
            q: "ما هو الهدف الأساسي من تطبيق معيار نظام إدارة أمن المعلومات ISO/IEC 27001:2022؟",
            opts: [
                "تحديد المواصفات الفنية للمنتجات الهندسية",
                "إرساء إطار عمل لإدارة مخاطر أمن المعلومات وحمايتها",
                "تحديد الضوابط التشغيلية لأنظمة الإدارة البيئية",
                "تقديم إرشادات للسلامة والصحة المهنية"
            ],
            ans: 1,
            exp: "الهدف الأساسي لمعيار ISO 27001 هو إنشاء إطار عمل لإدارة ومواجهة مخاطر أمن المعلومات بفاعلية[cite: 3]."
        },
        en: {
            q: "What is the primary objective of ISO/IEC 27001:2022?",
            opts: [
                "To define requirements for implementing a quality management system",
                "To establish a framework for managing information security risks",
                "To specify operational controls for environmental management systems",
                "To provide guidelines for occupational health and safety"
            ],
            ans: 1,
            exp: "The primary objective of ISO 27001 is to establish a framework for managing information security risks[cite: 3]."
        }
    },
    {
        id: 152,
        ref: "ISO/IEC 27001:2022 - Core Concepts",
        ar: {
            q: "ما هي المبادئ الأساسية الثلاثة لأمن المعلومات (CIA Triad) وفقاً للمعايير الدولية؟",
            opts: [
                "السرية، السلامة، التوفر",
                "الموثوقية، السرعة، الأداء",
                "المساءلة، الشفافية، العدالة",
                "الاستدامة، التكلفة، الجودة"
            ],
            ans: 0,
            exp: "المبادئ الأساسية الثلاثة لأمن المعلومات هي السرية (Confidentiality)، السلامة (Integrity)، والتوفر (Availability)[cite: 3]."
        },
        en: {
            q: "What are the three fundamental principles of information security?",
            opts: [
                "Confidentiality, Integrity, Availability",
                "Reliability, Speed, Performance",
                "Accountability, Transparency, Fairness",
                "Sustainability, Cost, Quality"
            ],
            ans: 0,
            exp: "The three fundamental principles of information security are Confidentiality, Integrity, and Availability[cite: 3]."
        }
    },
    {
        id: 153,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "أي من المصطلحات التالية يصف أفضل عملية 'تحديد وتقييم والتحكم في المخاطر التي تهدد أمن المعلومات'؟",
            opts: [
                "معالجة المخاطر (Risk treatment)",
                "تقييم المخاطر (Risk assessment)",
                "قبول المخاطر (Risk acceptance)",
                "مراقبة المخاطر (Risk monitoring)"
            ],
            ans: 1,
            exp: "تقييم المخاطر (Risk assessment) هو المصطلح الدقيق الذي يجمع عمليات التحديد والتقييم للتحكم في المخاطر[cite: 3]."
        },
        en: {
            q: "Which of the following terms best describes the 'process of identifying, assessing, and controlling risks to information security'?",
            opts: [
                "Risk treatment",
                "Risk assessment",
                "Risk acceptance",
                "Risk monitoring"
            ],
            ans: 1,
            exp: "Risk assessment best describes the process of identifying, assessing, and controlling risks to information security[cite: 3]."
        }
    },
    {
        id: 154,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.3",
        ar: {
            q: "ما هو الدور الرئيسي لوثيقة بيان الصلاحية (Statement of Applicability - SoA) في المعيار؟",
            opts: [
                "حصر جميع المخاطر الموجودة بالشركة تفصيلياً",
                "توثيق النطاق الجغرافي والتشغيلي لنظام الـ ISMS",
                "تبرير تضمين أو استبعاد ضوابط الملحق Annex A الأمنية",
                "تحديد منهجية تقييم المخاطر المعتمدة بالشركة"
            ],
            ans: 2,
            exp: "وثيقة بيان الصلاحية (SoA) تهدف إلى تبرير سبب تضمين أو استبعاد أي من ضوابط الملحق Annex A[cite: 3]."
        },
        en: {
            q: "What is the role of the Statement of Applicability (SoA) in ISO/IEC 27001:2022?",
            opts: [
                "To list all identified risks in the organization",
                "To document the scope of the ISMS",
                "To justify the inclusion or exclusion of specific security controls",
                "To define the organization's risk treatment methodology"
            ],
            ans: 2,
            exp: "The SoA justifies the inclusion or exclusion of specific security controls from Annex A[cite: 3]."
        }
    },
    {
        id: 155,
        ref: "ISO/IEC 27001:2022 - Clause 9.2",
        ar: {
            q: "ما هي الصفة الأساسية التي يجب أن يتحلى بها المراجع دائماً لضمان نزاهة وحيادية عملية المراجعة؟",
            opts: [
                "السرية المطلقة",
                "الاستقلالية (Independence)",
                "الشفافية التامة",
                "السلطة الإدارية"
            ],
            ans: 1,
            exp: "يجب أن يبقى المراجع مستقلاً تماماً (Independent) طوال عملية المراجعة لضمان عدالة وحيادية النتائج[cite: 3]."
        },
        en: {
            q: "An auditor must always remain ______________ during the audit process to ensure the audit is fair and unbiased.",
            opts: [
                "Confidential",
                "Independent",
                "Transparent",
                "Authoritative"
            ],
            ans: 1,
            exp: "An auditor must always remain independent during the audit process to ensure fairness and objectivity[cite: 3]."
        }
    },
    {
        id: 156,
        ref: "ISO/IEC 27001:2022 - Clause 4.3",
        ar: {
            q: "ما هو العنصر الذي يحدد الحدود والتطبيق الفعلي لنظام إدارة أمن المعلومات على مستوى المنظمة؟",
            opts: [
                "معايير المراجعة (Audit criteria)",
                "نطاق المراجعة (Audit scope)",
                "أهداف المراجعة (Audit objective)",
                "تقييم المخاطر (Risk assessment)"
            ],
            ans: 1,
            exp: "نطاق المراجعة والنظام (Audit scope) هو الذي يحدد بدقة الحدود والتطبيق العملي للـ ISMS[cite: 3]."
        },
        en: {
            q: "The ______________ defines the boundaries and applicability of the ISMS to the organization.",
            opts: [
                "Audit criteria",
                "Audit scope",
                "Audit objective",
                "Risk assessment"
            ],
            ans: 1,
            exp: "The audit scope defines the boundaries and applicability of the ISMS to the organization[cite: 3]."
        }
    },
    {
        id: 157,
        ref: "ISO/IEC 27001:2022 - Audit Process",
        ar: {
            q: "ما هو الغرض الأساسي من عقد اجتماع الافتتاح (Opening Meeting) في بداية المراجعة؟",
            opts: [
                "تسجيل حالات عدم المطابقة بشكل نهائي",
                "بناء الثقة وتوضيح وتأكيد خطوة عملية المراجعة",
                "إجراء تحليل السبب الجذري للمشاكل",
                "صياغة واعتماد تقرير المراجعة النهائي"
            ],
            ans: 1,
            exp: "الغرض من اجتماع الافتتاح هو بناء الثقة مع الجهة الخاضعة للمراجعة وشرح تفاصيل وخطة عملية المراجعة[cite: 3]."
        },
        en: {
            q: "What is the purpose of conducting opening meetings in an audit?",
            opts: [
                "To identify nonconformities immediately",
                "To establish trust and clarify the audit process",
                "To perform a root cause analysis",
                "To finalize the audit report"
            ],
            ans: 1,
            exp: "Opening meetings are conducted to establish trust and clarify the audit process[cite: 3]."
        }
    },
    {
        id: 158,
        ref: "ISO/IEC 27001:2022 - Audit Evidence",
        ar: {
            q: "ما هي الصفات الواجب توفرها في أدلة المراجعة (Audit evidence) لتكون مقبولة ومعتمدة؟",
            opts: [
                "أن تكون ذات صلة، وكافية، وموثوقة (Relevant, sufficient, reliable)",
                "أن تكون مطبوعة، ورسمية، ومختومة بختم الشركة",
                "أن تكون سرية، ومعقدة، وغير قابلة للمراجعة الخارجية",
                "أن تكون مقتصرة على التقارير المالية فقط"
            ],
            ans: 0,
            exp: "يشترط في أدلة المراجعة أن تكون ذات صلة بالموضوع (Relevant)، وكافية (Sufficient)، وموثوقة (Reliable)[cite: 3]."
        },
        en: {
            q: "Audit evidence must be ____________, ____________, and ____________.",
            opts: [
                "Relevant, sufficient, reliable",
                "Redundant, formal, complex",
                "Restricted, digital, unverified",
                "Financial, technical, statutory"
            ],
            ans: 0,
            exp: "Audit evidence must be relevant, sufficient, and reliable[cite: 3]."
        }
    },
    {
        id: 159,
        ref: "ISO/IEC 27001:2022 - Audit Reporting",
        ar: {
            q: "ما هو الغرض الأساسي من عقد اجتماع الإغلاق (Closing Meeting) في نهاية المراجعة؟",
            opts: [
                "تلخيص النتائج وتأكيد استنتاجات المراجعة مع الإدارة",
                "توقيع عقوبات جزائية على الأقسام المخالفة",
                "إعداد خطة تقييم المخاطر السنوية الجديدة",
                "جمع الأدلة المفقودة لحالات عدم المطابقة"
            ],
            ans: 0,
            exp: "اجتماع الإغلاق يعقد لتلخيص النتائج وتأكيد استنتاجات المراجعة مع المسؤولين في المنظمة[cite: 3]."
        },
        en: {
            q: "What is the primary purpose of the closing meeting?",
            opts: [
                "To summarize findings and confirm the audit conclusions",
                "To perform a root cause analysis",
                "To draft the audit plan",
                "To collect evidence for nonconformities"
            ],
            ans: 0,
            exp: "The primary purpose of the closing meeting is to summarize findings and confirm audit conclusions[cite: 3]."
        }
    },
    {
        id: 160,
        ref: "ISO/IEC 27001:2022 - Clause 7.5",
        ar: {
            q: "ما هو الغرض الرئيسي من الاحتفاظ بالمعلومات الموثقة (Documented information) في أي نظام إداري؟",
            opts: [
                "تسهيل عملية المراجعة كدليل على مطابقة المعيار",
                "إثقال كاهل الموظفين بالمهام الإدارية الورقية",
                "إخفاء الأخطاء التشغيلية عن الإدارة العليا",
                "تقليل سرعة تداول المعلومات بين الأقسام"
            ],
            ans: 0,
            exp: "الهدف الرئيسي للاحتفاظ بالمعلومات الموثقة هو تسهيل المراجعة كدليل على مطابقة المتطلبات المعيارية[cite: 4]."
        },
        en: {
            q: "Select the term that best describes the purpose of retaining documented information in any management system according to ISO requirements.",
            opts: [
                "To facilitate auditing for proof of conformity to the standard",
                "To provide confidence in the effectiveness of the management system",
                "To safeguard the integrity of the management system",
                "To support the operation of the processes of the management system"
            ],
            ans: 0,
            exp: "Retaining documented information primarily facilitates auditing as proof of conformity[cite: 4]."
        }
    },
    {
        id: 161,
        ref: "ISO 19011 - Audit Types",
        ar: {
            q: "ما هو الفرق الجوهري بين مراجعة الطرف الأول (1st Party) ومراجعة الطرف الثاني (2nd Party) ومراجعة الطرف الثالث (3rd Party)؟",
            opts: [
                "الطرف الأول مراجعة داخلية، والطرف الثاني مراجعة الموردين، والطرف الثالث مراجعة مستقلة للحصول على الشهادة",
                "الطرف الأول للموردين، والطرف الثاني للشهادات، والطرف الثالث مراجعة داخلية",
                "جميع الأنواع متماثلة تماماً وتؤدي نفس الغرض الإداري",
                "الطرف الثالث يتم حصراً عبر موظفي الشركة فقط"
            ],
            ans: 0,
            exp: "مراجعة الطرف الأول هي مراجعة داخلية، والطرف الثاني تجريها المنظمة على الموردين، والطرف الثالث هي مراجعة مستقلة لجهات منح الشهادات[cite: 4]."
        },
        en: {
            q: "What is the main difference between 1st, 2nd, and 3rd party audits?",
            opts: [
                "1st party is internal, 2nd party audits suppliers, and 3rd party is an independent certification audit",
                "1st party is for suppliers, 2nd party for certification, and 3rd party is internal",
                "All three audit types perform identical operational functions",
                "3rd party audits are exclusively performed by internal staff"
            ],
            ans: 0,
            exp: "1st party audits are internal, 2nd party audits assess suppliers, and 3rd party audits are external certification assessments[cite: 4]."
        }
    },
    {
        id: 162,
        ref: "ISO/IEC 27001:2022 - Clause 9.2",
        ar: {
            q: "شركة قامت بتعيين مدير تكنولوجيا المعلومات ليقوم بمراجعة قسم تكنولوجيا المعلومات نفسه في المراجعة الداخلية. كيف يصنف المراجع الخارجي هذا التعيين؟",
            opts: [
                "مطابقة، لأن مدير IT هو الأكثر خبراً بأعمال قسمه",
                "حالة عدم مطابقة للبند 9.2.2 (c)، لأن المراجعين يجب ألا يراجعوا أعمالهم الخاصة لضمان النزاهة والموضوعية",
                "ملاحظة تحسين (OFI) بالاستعانة بمساعد إداري",
                "مطابقة، طالما أن المراجعة تمت وفق قائمة التدقيق"
            ],
            ans: 1,
            exp: "البند 9.2.2 (c) يفرض اختيار المراجعين وإجراء المراجعات لضمان الموضوعية والحياد وأن لا يراجع المراجع عمله الخاص[cite: 4]."
        },
        en: {
            q: "An IT Manager conducted an internal audit on the IT department itself. How is this assessed?",
            opts: [
                "Conformity, as the IT Manager possesses the deepest technical knowledge of the department",
                "Nonconformity against Clause 9.2.2 (c), because auditors shall not audit their own work to ensure objectivity and impartiality",
                "Opportunity for Improvement (OFI) to appoint an administrative assistant",
                "Conformity, provided the audit used a standardized checklist"
            ],
            ans: 1,
            exp: "Clause 9.2.2 (c) requires auditors to be objective and impartial, prohibiting them from auditing their own work[cite: 4]."
        }
    },
    {
        id: 163,
        ref: "ISO 19011 - Audit Principles",
        ar: {
            q: "ماذا يعني مبدأ 'النهج القائم على الدليل' (Evidence-based approach) في المراجعة؟",
            opts: [
                "الاعتماد على الانطباعات الشخصية والافتراضات فقط",
                "أن تكون الاستنتاجات مبنية على أدلة مراجعة قابلة للتحقق وموضوعية",
                "تصديق تصريحات الإدارة دون الحاجة لوثائق",
                "تجاهل العينات والاعتماد على التخمين"
            ],
            ans: 1,
            exp: "النهج القائم على الدليل هو طريقة عقلانية للوصول إلى استنتاجات مراجعة موثوقة وقابلة للتكرار بناءً على أدلة قابلة للتحقق[cite: 4]."
        },
        en: {
            q: "What is meant by an 'evidence-based approach' to auditing?",
            opts: [
                "Relying strictly on personal intuition and subjective guesswork",
                "Reaching conclusions based on verifiable, objective audit evidence",
                "Accepting management statements without documentation",
                "Disregarding audit sampling in favor of assumption"
            ],
            ans: 1,
            exp: "An evidence-based approach ensures audit conclusions are reliable and verifiable through objective criteria[cite: 4]."
        }
    },
    {
        id: 164,
        ref: "ISO/IEC 27001:2022 - Clause 5.1",
        ar: {
            q: "ما هو التعريف المعتمد لمصطلح 'الإدارة العليا' (Top Management) وفقاً لمعيار ISO 27001؟",
            opts: [
                "مدير قسم أمن المعلومات المباشر فقط",
                "الشخص أو مجموعة الأشخاص الذين يوجهون ويسيطرون على المنظمة في أعلى مستوى",
                "المراجع الخارجي المكلف من جهة الشهادات",
                "مجلس الاستشاريين التقنيين"
            ],
            ans: 1,
            exp: "الإدارة العليا هي الشخص أو مجموعة الأشخاص الذين يوجهون ويسيطرون على المنظمة على أعلى مستوى تنفيذي[cite: 4]."
        },
        en: {
            q: "In ISO terms, what is meant by 'Top Management'?",
            opts: [
                "The CISO or Information Security Manager exclusively",
                "The person or group of people who directs and controls an organization at the highest level",
                "The lead external certification auditor",
                "The technical steering committee"
            ],
            ans: 1,
            exp: "Top Management is defined as the person or group directing and controlling the organization at the highest level[cite: 4]."
        }
    },
    {
        id: 165,
        ref: "ISO/IEC 27001:2022 - Annex A 5.18",
        ar: {
            q: "انتقل موظف من قسم تقنية المعلومات إلى قسم التسويق، ولكنه ما زال يحتفظ بصلاحيات الوصول لقواعد البيانات الحساسة الخاصة بقسم IT بعد 6 أشهر. ما هو الخلل المعياري؟",
            opts: [
                "مطابقة، طالما أن الموظف يحتاج البيانات لمساندة قسمه القديم",
                "حالة عدم مطابقة للضابط Annex A 5.18، لعدم تعديل أو إزالة حقوق الوصول فور تغيير الوظيفة أو التكليف",
                "ملاحظة تحسين (OFI) بإرسال تنبيه لقسم الموارد البشرية",
                "مطابقة، طالما لم يقم الموظف بإساءة استخدام الصلاحيات"
            ],
            ans: 1,
            exp: "الضابط Annex A 5.18 يفرض تعديل أو تعديل وإزالة حقوق وصول الأشخاص فور تغيير توظيفهم أو أدوارهم الوظيفية[cite: 4]."
        },
        en: {
            q: "An employee transferred from IT to Marketing but still retains IT admin access rights 6 months later. Finding?",
            opts: [
                "Conformity, provided the employee occasionally assists his legacy team",
                "Nonconformity against Control Annex A 5.18, for failing to modify or revoke access rights upon job role change",
                "Opportunity for Improvement (OFI) to remind HR during annual reviews",
                "Conformity, provided no unauthorized actions were logged"
            ],
            ans: 1,
            exp: "Control A.5.18 requires that access rights of personnel shall be modified or revoked upon change of employment role[cite: 4]."
        }
    },
    {
        id: 166,
        ref: "ISO/IEC 27001:2022 - Annex A 8.5",
        ar: {
            q: "أثناء المراجعة الداخلية، وجد المراجع أن تطبيقاً كمبيوترياً يستخدمه الموظفون يظهر اسم المستخدم وكلمة السر بنص واضح مجرد (Plain text) على الشاشة أثناء إدخال البيانات. ما القرار؟",
            opts: [
                "مطابقة، طالما أن الشاشة موجهة نحو حائط مغلق",
                "حالة عدم مطابقة للضابط Annex A 8.5، لعدم حماية معلمات المصادقة وتأمين بيانات الاعتماد السري من الانكشاف",
                "ملاحظة تحسين (OFI) بوضع شاشة حماية بلاستيكية",
                "مطابقة، لأن إظهار كلمة السر يقلل أخطاء الكتابة"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.5 يفرض حماية معلمات المصادقة وإدارتها بآلية آمنة تمنع كشف كلمات السر بنص واضح[cite: 4]."
        },
        en: {
            q: "During an audit, an auditor observed a business application displaying usernames and passwords in plain text on screen upon entry. Finding?",
            opts: [
                "Conformity, provided the monitor faces away from visitor pathways",
                "Nonconformity against Control Annex A 8.5, for failing to protect secret authentication information from unauthorized disclosure",
                "Opportunity for Improvement (OFI) to attach privacy screen filters",
                "Conformity, as unmasked passwords reduce user login errors"
            ],
            ans: 1,
            exp: "Control A.8.5 dictates that authentication parameters must be kept secure and prevented from exposure in plain text[cite: 4]."
        }
    },
    {
        id: 167,
        ref: "ISO/IEC 27001:2022 - Annex A 8.20",
        ar: {
            q: "الشركة تستخدم اتصال إنترنت عبر مزود خدمة محلي، ووجدت المراجعة أن نقطة التواجد (PoP) ترتبط مباشرة وبشكل مفتوح بالشبكة المحلية للشركة دون أي حدود أمنية أو جدار ناري. ما تصنيف المراجع؟",
            opts: [
                "مطابقة، لأن الاتصال المباشر يرفع سرعة نقل البيانات",
                "حالة عدم مطابقة للضابط Annex A 8.20، لعدم حماية وتأمين الشبكات وضبط الحدود الشبكية بين الشبكة المحلية والشبكات الخارجية",
                "ملاحظة تحسين (OFI) بتغيير شركة مزود الإنترنت",
                "مطابقة، طالما تم توقيع العقد مع المزود"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.20 يتطلب إدارة الشبكات وأمنها بشكل فعال وضبط نقاط الاتصال لحماية الأنظمة الداخلية من الشبكات العامة[cite: 4]."
        },
        en: {
            q: "An ISP's Point of Presence (PoP) connects directly into the internal corporate network with zero boundary protection or firewalls. Ruling?",
            opts: [
                "Conformity, as direct connection maximizes network throughput",
                "Nonconformity against Control Annex A 8.20, for failing to control and protect network boundaries connecting to public networks",
                "Opportunity for Improvement (OFI) to switch to a higher speed ISP tier",
                "Conformity, provided a valid ISP service contract is active"
            ],
            ans: 1,
            exp: "Control A.8.20 mandates securing and managing network boundaries to protect systems from public network exposures[cite: 4]."
        }
    },
    {
        id: 168,
        ref: "ISO/IEC 27001:2022 - Clause 9.3.2",
        ar: {
            q: "جدول أعمال مراجعة الإدارة (Management Review) اقتصر فقط على (نتائج المراجعة الداخلية السابقة، حالة الإجراءات الوقائية والتصحيحية، ومتابعة قرارات الاجتماع السابق). ما موقف المراجع؟",
            opts: [
                "مطابقة، طالما حظي الاجتماع بحضور الإدارة العليا",
                "حالة عدم مطابقة للبند 9.3.2، لعدم استيفاء جميع مدخلات مراجعة الإدارة الإلزامية مثل تغييرات القضايا وتقييم المخاطر وتغذية الأطراف المهتمة",
                "ملاحظة تحسين (OFI) بتدوين الملاحظات بخط يدي أوضح",
                "مطابقة، لأن جدول الأعمال متروك لتقدير الشركة"
            ],
            ans: 1,
            exp: "البند 9.3.2 يحدد مدخلات إلزامية يجب مناقشتها في مراجعة الإدارة واقتصار الأجندة على بعضها يعد عدم مطابقة[cite: 4]."
        },
        en: {
            q: "Management review agenda covered only previous audit results, corrective action status, and prior decisions, ignoring all other mandatory standard inputs. Verdict?",
            opts: [
                "Conformity, provided Top Management actively attended the meeting",
                "Nonconformity against Clause 9.3.2, for omitting required inputs such as context changes, risk results, and interested party feedback",
                "Opportunity for Improvement (OFI) to record cleaner meeting minutes",
                "Conformity, as agenda setting lies entirely within executive choice"
            ],
            ans: 1,
            exp: "Clause 9.3.2 lists mandatory input topics that must be systematically evaluated during management reviews[cite: 4]."
        }
    },
    {
        id: 169,
        ref: "ISO/IEC 27001:2022 - Clause 4.2 & Annex A 5.19",
        ar: {
            q: "شركة تدريب وقعت عقداً جديداً ينص على الالتزام بالإجراء الإداري الحكومي رقم 853 لحماية بيانات الطلاب الشخصية. مدير العقود افاد بأنه لم يقرأ هذا البند واكتفى بمراجعة أعداد الطلاب المحددة في الملحق. ما تصنيف المراجع؟",
            opts: [
                "مطابقة، طالما أن الشركة تطبق إجراءاتها الداخلية الخاصة بالحماية",
                "حالة عدم مطابقة للبند 4.2 والضابط Annex A 5.19، لعدم تحديد والوفاء بالمتطلبات التعاقدية والتنظيمية الجديدة للأطراف المهتمة",
                "ملاحظة تحسين (OFI) بوضع إشارة على المستند المرفق",
                "مطابقة، طالما أن العقد المبدئي القديم لم يحتوي على هذا الشروط"
            ],
            ans: 1,
            exp: "البند 4.2 والضابط A.5.19 يفرضان مراجعة والالتزام بكل المتطلبات القانونية والتعاقدية الواردة في العقود الجديدة للأطراف المهتمة[cite: 4]."
        },
        en: {
            q: "A training provider accepted a contract addition mandating Government Procedure 853 for data privacy, but Contract Lead only checked student quota numbers without reviewing or applying the mandatory procedure. Ruling?",
            opts: [
                "Conformity, provided the firm continues executing its existing internal privacy rules",
                "Nonconformity against Clause 4.2 and Control Annex A 5.19, for failing to review, identify, and meet new contractual interested party requirements",
                "Opportunity for Improvement (OFI) to highlight contract clauses",
                "Conformity, since the baseline legacy contract omitted Procedure 853"
            ],
            ans: 1,
            exp: "Clause 4.2 & Control A.5.19 require organizations to identify and comply with new statutory, regulatory, and contractual obligations[cite: 4]."
        }
    },
    {
        id: 170,
        ref: "ISO/IEC 27001:2022 - Annex A 5.24 & 8.1",
        ar: {
            q: "فقد مسؤول تنفيذي حقيبته في المطار وبها لابتوب وفلاشة وموبايل. أظهر التحقيق أن اللابتوب والفلاشة مشفران، بينما الهاتف ذكي غير مشفر ولا يحوي كلمة سر. تم مسح الهاتف عن بعد لاحقاً وإغلاق البلاغ دون التحقق من المحتويات المطبوعة بالحقيبة. ما هو قرار المراجع؟",
            opts: [
                "مطابقة، لأن المسح عن بعد للهاتف ألغى الخطر الأمني كلياً",
                "حالة عدم مطابقة للضابطين Annex A 5.24 و 8.1، لأن التحقيق في الحوادث يجب أن يشمل جميع الأصول والمعلومات المحتمل تسريبها (بما فيها المستندات الورقية)",
                "ملاحظة تحسين (OFI) بشركة حقائب آمنة للمسافرين",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "إدارة الحوادث (A.5.24) وحماية الأجهزة الطرفية (A.8.1) تتطلبان إجراء تحقيق كامل يغطي كافة الأصول الرقمية والورقية المفقودة لتقييم الأثر بدقة[cite: 4]."
        },
        en: {
            q: "An executive lost luggage containing an encrypted laptop, encrypted USB, an unencrypted smartphone, and printed notes. IT wiped the phone remotely and closed the incident without investigating the physical documents. Assessment?",
            opts: [
                "Conformity, as remote wiping fully neutralizes the loss",
                "Nonconformity against Controls Annex A 5.24 and 8.1, for failing to execute a comprehensive incident assessment covering all lost media and physical documents",
                "Opportunity for Improvement (OFI) to issue lockable travel bags",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Controls A.5.24 and A.8.1 require thorough incident management evaluating all compromised assets, including physical paperwork[cite: 4]."
        }
    },
    {
        id: 171,
        ref: "ISO/IEC 27001:2022 - Annex A 5.14 & Clause 10.2",
        ar: {
            q: "شركة طباعة وبريد ترسل خطابات لمرضى المستشفيات. السجلات أظهرت ارتجاع أعداد كبيرة من الخطابات وأخطاء بوضع مراسلات شخصين مختلفين في ظرف واحد (15% من الحالات). الشركة رفضت الفحص الوقائي بدعوى ضآلة هامش الربح. ما هو التصنيف؟",
            opts: [
                "مطابقة، لأن التكلفة الاقتصادية تبرر إلغاء الفحص الميداني",
                "حالة عدم مطابقة للضابط Annex A 5.14 والبند 10.2، لعدم حماية نقل المعلومات وإفشاء بيانات حساسة بصورة مكررة دون اتخاذ إجراء تصحيحي لإزالة السبب الجذر",
                "ملاحظة تحسين (OFI) بإعادة الطباعة مجاناً للعملاء",
                "مطابقة، طالما يتم إعادة إرسال الخطابات المرتجعة"
            ],
            ans: 1,
            exp: "تكرار إفشاء البيانات الحساسة عبر البريد واختيار عدم اتخاذ إجراء تصحيحي يمثل خرقاً صريحاً لضوابط نقل المعلومات (A.5.14) والإجراءات التصحيحية (10.2)[cite: 4]."
        },
        en: {
            q: "A bulk mailing firm repeatedly mis-enveloped medical records for years (15% defect rate). Management refused to implement inspection processes, claiming small profit margins make fixes uneconomic. Verdict?",
            opts: [
                "Conformity, as low contract value justifies skipping formal quality controls",
                "Nonconformity against Control Annex A 5.14 and Clause 10.2, for failing to protect information transfer and failing to execute corrective actions for recurring data breaches",
                "Opportunity for Improvement (OFI) to offer free re-prints to affected clients",
                "Conformity, provided returned items are eventually re-mailed"
            ],
            ans: 1,
            exp: "Control A.5.14 & Clause 10.2 mandate protecting sensitive information transfer and acting on root causes of nonconformities regardless of profit margins[cite: 4]."
        }
    },
    {
        id: 172,
        ref: "ISO/IEC 27001:2022 - Clause 7.2 & 10.2",
        ar: {
            q: "شكاوى عملاء كشفت خلط بيانات حسابات بسبب تكليف موظفين جديدين تحت التدريب بالعمل دون إشراف لقلة الموظفين. التحقيق أثبت السبب، وأغلق الملف بمجرد انتهاء تدريبهم دون وضع إجراءات لمنع تكرار تكليف المتدربين بلا إشراف مستقبلاً. ما القرار؟",
            opts: [
                "مطابقة، لأن الموظفين أصبحا كفؤين الآن بالتدريب",
                "حالة عدم مطابقة للبندين 7.2 و 10.2، لعدم ضمان الإشراف الكافي على الكفاءات ولعدم اتخاذ إجراء تصحيحي يزيل سبب المشكلة المنظومي لمنع تكراره",
                "ملاحظة تحسين (OFI) بدفع تعويض مالي إضافي للعملاء",
                "مطابقة، طالما تم حل المشكلة مع العملاء المشتكين"
            ],
            ans: 1,
            exp: "إغلاق التحقيق دون اتخاذ إجراء تصحيحي ينظم إشراف المتدربين لمنع التكرار يخالف البند 10.2 والبند 7.2 الخاصة بالكفاءة والإشراف[cite: 4]."
        },
        en: {
            q: "Customer data was disclosed when two unsupervised trainees mishandled accounts due to staff shortages. Investigation closed post-training with zero corrective action implemented to prevent future unsupervised trainee assignments. Finding?",
            opts: [
                "Conformity, as trainees successfully completed their training modules afterwards",
                "Nonconformity against Clauses 7.2 and 10.2, for failing to ensure proper competency/supervision and failing to execute systemic corrective actions",
                "Opportunity for Improvement (OFI) to pay goodwill compensation",
                "Conformity, provided aggrieved clients were reimbursed"
            ],
            ans: 1,
            exp: "Clause 7.2 and Clause 10.2 require proper supervision for developing staff and effective corrective actions that eliminate root causes[cite: 4]."
        }
    },
    {
        id: 173,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "شركة تصميم حلول تخزين إلكترونية منفذة لمشروع Q456 لا تملك عملية موثقة لتقييم مخاطر أمن المعلومات، وتعتمد فقط على أداة إلكترونية واجتهادات شفاهية لتقدير المعالجة. كيف يقيّم المراجع الموقف؟",
            opts: [
                "مطابقة، طالما أن البرنامج الإلكتروني يعطي نتائج تقريبية للمخاطر",
                "حالة عدم مطابقة للبند 6.1.2، لأن المنظمة يجب أن تحتفظ بمعلومات موثقة عن عملية تقييم مخاطر أمن المعلومات لضمان نتائج متسقة وقابلة للمقارنة",
                "ملاحظة تحسين (OFI) بشراء نسخة أحدث من البرنامج الإلكتروني",
                "مطابقة، طالما تم مراعاة خفض المخاطر في خطة السعة"
            ],
            ans: 1,
            exp: "البند 6.1.2 يشترط صراحة الاحتفاظ بمعلومات موثقة عن عملية تقييم المخاطر (Documented information of the risk assessment process)[cite: 4]."
        },
        en: {
            q: "A design team has no documented information security risk assessment process, relying on an uncalibrated software tool and ad-hoc personal care. Finding?",
            opts: [
                "Conformity, as utilizing automated risk software fulfills procedural expectations",
                "Nonconformity against Clause 6.1.2, because the organization shall retain documented information about the information security risk assessment process",
                "Opportunity for Improvement (OFI) to upgrade the risk software license",
                "Conformity, provided final capacity plans account for risk treatments"
            ],
            ans: 1,
            exp: "Clause 6.1.2 explicitly mandates retaining documented information describing the risk assessment process to guarantee consistent results[cite: 4]."
        }
    },
    {
        id: 174,
        ref: "ISO/IEC 27001:2022 - Clause 10.2",
        ar: {
            q: "أثناء المراجعة، لم يستطع مدير الجودة تقديم أي دليل موثق يثبت أن الإجراءات التصحيحية المتخذة لحالات عدم المطابقة السابقة قد أدت بالفعل لإزالة السبب الجذر. ما تصنيف الخلل؟",
            opts: [
                "مطابقة، طالما أن المشكلة لم تتكرر ظاهرياً حتى الآن",
                "حالة عدم مطابقة للبند 10.2 (e)، لعدم الاحتفاظ بمعلومات موثقة تثبت نتائج أي إجراء تصحيحي ومدى فاعليته",
                "ملاحظة تحسين (OFI) بتدوين ملاحظة شفاهية في تقرير المراجعة القادم",
                "مطابقة، طالما تم إغلاق تذكرة النظام"
            ],
            ans: 1,
            exp: "البند 10.2 (e) يوجب الاحتفاظ بمعلومات موثقة كدليل على نتائج أي إجراء تصحيحي اتُخذ وعلى فاعليته[cite: 4]."
        },
        en: {
            q: "An auditor was presented with zero documented proof showing that implemented corrective actions successfully eliminated root causes. Ruling?",
            opts: [
                "Conformity, provided the bug has not reappeared recently",
                "Nonconformity against Clause 10.2 (e), for failing to retain documented information as evidence of the results of corrective actions",
                "Opportunity for Improvement (OFI) to verbally confirm status in the next review",
                "Conformity, provided the internal issue ticket was closed"
            ],
            ans: 1,
            exp: "Clause 10.2 (e) explicitly forces retaining documented information as evidence of corrective action results and effectiveness[cite: 4]."
        }
    },
    {
        id: 175,
        ref: "ISO/IEC 27001:2022 - Annex A 7.8 & Clause 6.3",
        ar: {
            q: "تم إجراء تعديلات وتغييرات جوهرية على شبكة التوصيلات والكابلات في مبنى الشركة دون تسجيل أو توثيق هذه التغييرات في مخططات البنية التحتية. ما هو الخلل؟",
            opts: [
                "مطابقة، طالما الشبكة تعمل وسرعة الاتصال لم تتأثر",
                "حالة عدم مطابقة للضابط Annex A 7.8 والبند 6.3، لعدم حماية وضبط تغييرات تمديدات الاتصالات والطاقة وتحديث وثائق البنية التحتية بطريقة مخططة",
                "ملاحظة تحسين (OFI) بوضع علامات لاصقة على السلوك",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "التعديل على تمديدات الكابلات الحساسة دون توثيق وإدارة تغيير يخل بضوابط تمديدات الاتصالات (A.7.8) والتخطيط للتغيير (6.3)[cite: 4]."
        },
        en: {
            q: "Substantial physical cabling modifications were made across a corporate facility without updating topology records or logging change activities. Assessment?",
            opts: [
                "Conformity, provided connectivity uptime remains unaffected",
                "Nonconformity against Control Annex A 7.8 and Clause 6.3, for failing to control telecommunications cabling infrastructure changes in a planned, documented manner",
                "Opportunity for Improvement (OFI) to attach color tags to patch cords",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.7.8 & Clause 6.3 mandate protecting utility cabling and managing operational changes via documented control protocols[cite: 4]."
        }
    },
    {
        id: 176,
        ref: "ISO/IEC 27001:2022 - Annex A 7.7 & 5.13",
        ar: {
            q: "في غرفة مخصصة لمعالجة وتداول البيانات العامة للجمهور، وجد المراجع أن محطتي عمل تُستخدمان لمعالجة بيانات سرية خاصة بعقود المقاولين. ما تقييم المراجع؟",
            opts: [
                "مطابقة، طالما أن الموظفين المعتمدين هم من يجلسون على الأجهزة",
                "حالة عدم مطابقة للضابطين Annex A 7.7 و 5.13، لعدم مراعاة قواعد الأماكن الآمنة وتداول المعلومات السرية في بيئات مفتوحة عامة",
                "ملاحظة تحسين (OFI) بإغلاق ستائر الغرفة",
                "مطابقة، طالما الأجهزة محمية بكلمة سر"
            ],
            ans: 1,
            exp: "معالجة المعلومات السرية داخل غرف مخصصة للجمهور يخالف قواعد حماية الشاشات وتصنيف البيانات وتأمين البيئة الفيزيائية[cite: 4]."
        },
        en: {
            q: "Auditor noticed two terminals inside a public access processing room actively handling highly confidential vendor contract ledgers. Finding?",
            opts: [
                "Conformity, provided logged-in operators are authorized staff",
                "Nonconformity against Controls Annex A 7.7 and 5.13, for processing classified information in an unsecured public physical environment",
                "Opportunity for Improvement (OFI) to draw window blinds",
                "Conformity, provided workstations feature screensaver passwords"
            ],
            ans: 1,
            exp: "Controls A.7.7 and A.5.13 restrict handling confidential assets in areas accessible by unauthorized public entities[cite: 4]."
        }
    },
    {
        id: 177,
        ref: "ISO/IEC 27001:2022 - Annex A 8.7",
        ar: {
            q: "يمتلك كل موظف بالشركة الصلاحية الكاملة لتنزيل وتثبيت أي نوع من البرمجيات على جهازه المكتبي دون تحكم أو موافقة مركزية من قسم IT. ما القرار؟",
            opts: [
                "مطابقة، لأن ذلك يزيد مرونة العمل وسرعة إنجاز المهام",
                "حالة عدم مطابقة للضابط Annex A 8.7، لعدم وضع وتطبيق قواعد لتقييد وإدارة تثبيت البرمجيات بواسطة المستخدمين على الأنظمة",
                "ملاحظة تحسين (OFI) بتثبيت مضاد فيروسات مجاني",
                "عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 1,
            exp: "الضابط Annex A 8.7 يوجب وضع قواعد وحظر تثبيت البرمجيات دون تصريح وإدارة على أجهزة الأنظمة التشغيلية[cite: 4]."
        },
        en: {
            q: "Every employee can install any software application onto corporate PCs without central approval or technical restrictions. Finding?",
            opts: [
                "Conformity, as software freedom enhances staff productivity",
                "Nonconformity against Control Annex A 8.7, for failing to establish and enforce rules governing software installation on operational systems",
                "Opportunity for Improvement (OFI) to install free antivirus tools",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 1,
            exp: "Control A.8.7 mandates establishing rules to control and restrict software installation by users on operational devices[cite: 4]."
        }
    },
    {
        id: 178,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "أظهر تقرير تقييم المخاطر أن جميع المخاطر المحددة تمتلك نفس درجة الاحتمالية بشكل موحد، مع غياب تام لأي منهجية لتصنيف وترتيب أولويات المخاطر. ما التصنيف؟",
            opts: [
                "مطابقة، لأن توحيد الاحتمالية يبسط عملية التقييم",
                "حالة عدم مطابقة للبند 6.1.2 (c)، لعدم وجود منهجية صالحة ومحددة لتقييم احتمالية وآثار المخاطر وتصنيف مستوياتها",
                "ملاحظة تحسين (OFI) بإعادة توزيع الأرقام عشوائياً",
                "مطابقة، طالما تم حصر جميع الأصول"
            ],
            ans: 1,
            exp: "البند 6.1.2 (c) يتطلب تقييم احتمالية وقوع المخاطر والآثار الناجمة عنها لتحديد مستويات المخاطر بدقة متسقة[cite: 4]."
        },
        en: {
            q: "Risk assessment logs assign identical probability scores to all identified risks, lacking any method for risk categorization or prioritization. Ruling?",
            opts: [
                "Conformity, as uniform probability values simplify analysis",
                "Nonconformity against Clause 6.1.2 (c), for failing to establish a valid methodology to assess likelihood, impacts, and risk levels",
                "Opportunity for Improvement (OFI) to randomize risk scores",
                "Conformity, provided asset lists are complete"
            ],
            ans: 1,
            exp: "Clause 6.1.2 (c) dictates assessing the likelihood and consequences of risks to systematically prioritize risk treatment[cite: 4]."
        }
    },
    {
        id: 179,
        ref: "ISO/IEC 27001:2022 - Certification Process",
        ar: {
            q: "ما هو الغرض الأساسي من مراجعة المرحلة الأولى (Stage 1 Audit) في عملية منح شهادة ISO 27001؟",
            opts: [
                "التحقق الميداني الشامل من تطبيق كافة الضوابط التقنية",
                "مراجعة جاهزية وثائق النظام ونطاق الـ ISMS وفهم استعداد المنظمة للمرحلة الثانية",
                "إصدار شهادة المطابقة النهائية فوراً",
                "إجراء اختبارات اختراق للبنية التحتية"
            ],
            ans: 1,
            exp: "مراجعة المرحلة الأولى (Stage 1) تهدف إلى فحص التوثيق والنطاق واستعداد المنظمة لمراجعة المرحلة الثانية الميدانية (Stage 2)[cite: 4]."
        },
        en: {
            q: "What is the primary purpose of a Stage 1 Certification Audit?",
            opts: [
                "In-depth field verification of all technical Annex A controls",
                "Reviewing ISMS documentation, scope, and evaluating the readiness for Stage 2",
                "Issuing the official ISO 27001 certificate immediately",
                "Executing penetration tests on live infrastructure"
            ],
            ans: 1,
            exp: "Stage 1 evaluates documentation adequacy, scope, site locations, and readiness for Stage 2 on-site audit[cite: 4]."
        }
    },
    {
        id: 180,
        ref: "ISO/IEC 27001:2022 - Certification Governance",
        ar: {
            q: "متى تقوم جهة منح الشهادات (Certification Body) بتعليق (Suspend) صلاحية الشهادة الصادرة للمنظمة؟",
            opts: [
                "عند اكتشاف حالة عدم مطابقة كبرى (Major NC) عدم معالجتها في المهل المحددة أو الفشل الجسيم في صيانة الـ ISMS",
                "عند تغيير اسم مدير أمن المعلومات بالشركة",
                "عند تأخر الشركة في كتابة التقرير السنوي لمدة أسبوع",
                "عند طلب منافس تجاري إيقاف الشهادة"
            ],
            ans: 0,
            exp: "تعليق الشهادة يحدث عند الفشل الجسيم أو المستمر في استيفاء متطلبات النظام أو عدم معالجة حالات عدم المطابقة الكبرى[cite: 4]."
        },
        en: {
            q: "When will a Certification Body suspend an organization's ISO 27001 certificate?",
            opts: [
                "When major nonconformities remain uncorrected within allowed timelines or serious ISMS failure occurs",
                "Whenever the organization updates its CISO job title",
                "If an annual internal report is delayed by one week",
                "Upon request from a commercial competitor"
            ],
            ans: 0,
            exp: "Suspension occurs when certified clients persistently or seriously fail to meet certification requirements[cite: 4]."
        }
    },
    {
        id: 181,
        ref: "ISO/IEC 27001:2022 - Audit Governance",
        ar: {
            q: "متى تقرر جهات منح الشهادات إجراء 'مراجعة خاصة' (Special Audit) للمؤسسة الحاصلة على الشهادة؟",
            opts: [
                "عند حدوث تغييرات جوهرية في هيكل/نطاق المنظمة أو للتحقيق في حوادث أمنية جسيمة وتغييرات طارئة",
                "في المواعيد السنوية الثابتة للمراجعة الميدانية فقط",
                "عند رغبة الموظفين الجدد في التعلم",
                "مرة كل شهر بشكل مفاجئ دون أسباب"
            ],
            ans: 0,
            exp: "المراجعات الخاصة (Special audits) تفرض للتحقيق في التغيرات الجوهرية أو الشكاوى الخطيرة أو الشكوك في سلامة النظام[cite: 4]."
        },
        en: {
            q: "Under what circumstances do Certification Bodies mandate Special Audits?",
            opts: [
                "To investigate major organizational scope changes, critical security incidents, or serious formal complaints",
                "Strictly on pre-scheduled annual surveillance calendar dates",
                "Whenever new hires request auditing exposure",
                "Unannounced once every month without specific triggers"
            ],
            ans: 0,
            exp: "Special audits are announced or unannounced visits to investigate significant changes, complaints, or major security breaches[cite: 4]."
        }
    },
    {
        id: 182,
        ref: "ISO 19011 - Audit Tools",
        ar: {
            q: "ما هي الوثيقة العمل الرئيسية التي يجهزها المراجع قبل المراجعة، وما استخداماتها أثناء المراجعة؟",
            opts: [
                "قائمة التحقق (Audit Checklist) لاستخدامها كدليل توجيهي، وضبط الوقت، وضمان تغطية المعايير، وتدوين الملاحظات",
                "عقد التوظيف للتأكد من الراتب",
                "سجل الحضور والانصراف اليومي للموظفين",
                "تقرير تقييم الأثر المالي"
            ],
            ans: 0,
            exp: "قائمة التحقق (Checklist) تعتبر وثيقة عمل رئيسية توجه المراجع، تضمن تغطية المعايير، وتساعد في التدوين والتحكم بالوقت[cite: 4]."
        },
        en: {
            q: "Which working document is prepared prior to an audit, and how is it used during execution?",
            opts: [
                "Audit Checklist: used as a guiding framework, time management tool, criteria coverage guarantee, and note-taking reference",
                "Employment contracts to review salary tiers",
                "Daily employee attendance sheets",
                "Financial profit and loss statements"
            ],
            ans: 0,
            exp: "Checklists serve as essential audit working documents for structure, time management, sampling control, and evidence logging[cite: 4]."
        }
    },
    {
        id: 183,
        ref: "ISO 19011 - Auditor Competence",
        ar: {
            q: "ماذا يعني أن يكون المراجع 'دبلوماسياً' (Diplomatic) و'مفتوح الذهن' (Open-minded) أثناء المراجعة؟",
            opts: [
                "التعامل بلياقة ولباقت ومراعاة مشاعر الآخرين، وتقبل وجهات النظر والأدلة المختلفة دون تعصب مسبق",
                "الموافقة على جميع أخطاء المنظمة وإخفاء عدم المطابقة",
                "الشدة والعنف اللفظي مع الموظفين لإجبارهم على الاعتراف",
                "تجاهل المعيار والتركيز على العلاقات الشخصية"
            ],
            ans: 0,
            exp: "الدبلوماسية وتفتح الذهن من الصفات الشخصية للمراجع بالمعيار ISO 19011 للتعامل بلباقة وتقبل الحقائق والأدلة بعقلانية[cite: 4]."
        },
        en: {
            q: "What does it mean for an auditor to be 'diplomatic' and 'open-minded'?",
            opts: [
                "Tactful in dealing with people, and willing to consider alternative ideas or evidence objectively",
                "Concealing nonconformities to maintain friendly relationships",
                "Aggressive in questioning to force admissions of fault",
                "Disregarding ISO standard criteria in favor of personal preferences"
            ],
            ans: 0,
            exp: "ISO 19011 requires auditors to be tactful (diplomatic) and open-minded to reach objective, evidence-based findings[cite: 4]."
        }
    },
    {
        id: 184,
        ref: "ISO/IEC 27001:2022 - Clause 8.1",
        ar: {
            q: "أي مما يلي يُعد مثالاً على 'الضبط التشغيلي' (Operational Control) وفقاً للبند 8.1؟",
            opts: [
                "إجراءات معتمدة لإدارة التغيير، ومعايير فحص الكود البرمجي، وصيانة التكوين الآمن للسيرفرات",
                "الاستقالة الجماعية للموظفين",
                "زيادة أسعار المنتجات في السوق",
                "طباعة شعار الشركة على الحافلات"
            ],
            ans: 0,
            exp: "الضبط التشغيلي (8.1) يشمل وضع معايير للعمليات وإجراءات موثقة وضوابط تشغيلية لضمان تنفيذ خطط معالجة المخاطر[cite: 4]."
        },
        en: {
            q: "Which of the following serves as an example of 'Operational Control' under Clause 8.1?",
            opts: [
                "Documented change management procedures, code review criteria, and server baseline hardening rules",
                "Unplanned employee resignations",
                "Increasing product retail prices",
                "Printing corporate logos on delivery trucks"
            ],
            ans: 0,
            exp: "Clause 8.1 operational controls include criteria for processes, documented procedures, and controls to manage operational risks[cite: 4]."
        }
    },
    {
        id: 185,
        ref: "ISO/IEC 27001:2022 - Annex A 6.3",
        ar: {
            q: "ما هي الأدوات الفعالة التي تستخدمها المنظمات لرفع مستوى 'الوعي بأمن المعلومات' (Security Awareness)؟",
            opts: [
                "حملات المحاكاة للتصيد (Phishing simulations)، ورش العمل التفاعلية، والنشرات البريدية التوعوية",
                "زيادة الميزانية المالية للإدارة",
                "تغيير الأثاث المكتبي",
                "إغلاق الهواتف أثناء العمل"
            ],
            ans: 0,
            exp: "تتضمن أدوات التوعية الأمنية (A.6.3) اختبارات التصيد المحاكية والورش التفاعلية والنشرات الدورية لرفع حساسية الموظفين للمخاطر[cite: 4]."
        },
        en: {
            q: "Which tools are effective for driving Information Security Awareness under Annex A 6.3?",
            opts: [
                "Simulated phishing campaigns, interactive workshops, and periodic security newsletters",
                "Increasing corporate bank balances",
                "Replacing office furniture",
                "Prohibiting mobile phones entirely"
            ],
            ans: 0,
            exp: "Control A.6.3 awareness programs utilize simulated phishing, newsletters, and workshops to train personnel on security risks[cite: 4]."
        }
    },
    {
        id: 186,
        ref: "ISO/IEC 27001:2022 - Clause 9.2",
        ar: {
            q: "ما هو الشرط الحاسِم الواجب توفره في فريق المراجعة الداخلية لضمان 'نزاهة واستقلالية' التقرير النهائي؟",
            opts: [
                "ألا يراجع المراجعون أعمالهم المباشرة وأن يكونوا على قدر عالٍ من الاستقلالية والحياد",
                "أن يكون جميع المراجعين من إقليم جغرافي واحد",
                "أن يمتلك المراجعون صلاحية طرد الموظفين",
                "أن تكون المراجعة شفهية فقط دون توثيق"
            ],
            ans: 0,
            exp: "البند 9.2 يشترط اختيار المراجعين بما يضمن الحياد والموضوعية وعدم مراجعة المراجعين لأعمالهم وإداراتهم الشخصية[cite: 4]."
        },
        en: {
            q: "What critical requirement ensures the integrity and independence of an internal audit report?",
            opts: [
                "Auditors must be impartial, objective, and strictly independent from the processes being audited",
                "All auditors must belong to the same geographical region",
                "Auditors must hold executive authority to fire staff",
                "Audits must be conducted verbally with zero written records"
            ],
            ans: 0,
            exp: "Clause 9.2 requires selecting auditors to ensure objectivity and impartiality of the audit process[cite: 4]."
        }
    },
    {
        id: 187,
        ref: "ISO/IEC 27001:2022 - Clause 4.3",
        ar: {
            q: "عند تحديد نطاق الـ ISMS، أي من العوامل التالية يجب أخذها بالاعتماد لضمان عدم وجود ثغرات في الحدود؟",
            opts: [
                "القضايا الداخلية والخارجية، متطلبات الأطراف المهتمة، والواجهات والاعتماديات التشغيلية",
                "عدد الموظفين الجدد فقط",
                "مساحة المبنى بالسنتيمتر المربع",
                "أرباح الشركة في البورصة"
            ],
            ans: 0,
            exp: "البند 4.3 يفرض مراعاة القضايا (4.1)، المتطلبات (4.2)، والواجهات والاعتماديات بين الأنشطة (c) لتحديد النطاق بدقة[cite: 4]."
        },
        en: {
            q: "When establishing the ISMS scope, which factors must be incorporated to prevent boundary gaps?",
            opts: [
                "Internal/external issues, interested party requirements, and operational interfaces/dependencies",
                "New hire headcount exclusively",
                "Physical facility square footage",
                "Stock market quarterly performance"
            ],
            ans: 0,
            exp: "Clause 4.3 mandates evaluating context issues, requirements, and organizational interfaces when boundary scoping[cite: 4]."
        }
    },
    {
        id: 188,
        ref: "ISO/IEC 27001:2022 - Clause 9.1 & 4.2",
        ar: {
            q: "كيف تستطيع المنظمة قياس ومراقبة 'مدى رضا الأطراف المهتمة' (Interested Party Satisfaction) فيما يخص الـ ISMS؟",
            opts: [
                "عبر استبيانات التغذية الراجعة، ومراجعة شكاوى العملاء، واجتماعات التقييم التعاقدي الدورية",
                "عبر زيادة أسعار الخدمات المقدمة لهم",
                "عبر التخمين والافتراضات الشفهية",
                "عبر إلغاء العقود التجارية تلقائياً"
            ],
            ans: 0,
            exp: "قياس رضا الأطراف المهتمة يتم عبر قنوات رسمية مثل الاستبيانات ومتابعة الشكاوى ومراجعة الالتزامات التعاقدية (9.1 & 4.2)[cite: 4]."
        },
        en: {
            q: "How can an organization monitor and evaluate interested party satisfaction regarding the ISMS?",
            opts: [
                "Through feedback surveys, customer complaint analyses, and periodic contractual service reviews",
                "By unilaterally raising service subscription fees",
                "Via informal executive guesswork",
                "By terminating active commercial contracts"
            ],
            ans: 0,
            exp: "Monitoring interested party feedback (Clause 9.1 / 4.2) requires structured mechanisms like surveys, SLA tracking, and complaint reviews[cite: 4]."
        }
    },
    {
        id: 189,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.3 vs 6.2",
        ar: {
            q: "ما هو الفرق بين 'خطة معالجة المخاطر' (Risk Treatment Plan) و'خطة تحقيق أهداف أمن المعلومات' (Objectives Action Plan)؟",
            opts: [
                "خطة معالجة المخاطر تركز على خفض المخاطر المحددة للحد المقبول، بينما خطة الأهداف تركز على تحقيق غايات تطويرية محددة بجدول زمني وموارد",
                "الخطتان متطابقتان تماماً ولا يوجد أي فارق بينهما",
                "خطة معالجة المخاطر تخص المالية، وخطة الأهداف تخص الموارد البشرية",
                "خطة الأهداف إلزامية وخطة معالجة المخاطر اختيارية"
            ],
            ans: 0,
            exp: "خطة معالجة المخاطر (6.1.3) تهدف لمعالجة التهديدات وخفض المخاطر، بينما خطة الأهداف (6.2) تضع خطوات تنفيذية لتحقيق غايات تحسين النظام[cite: 4]."
        },
        en: {
            q: "What distinguishes a Risk Treatment Plan (RTP) from an Information Security Objectives Action Plan?",
            opts: [
                "RTP mitigates specific identified risks to acceptable levels, whereas the Objectives Plan details action steps to achieve strategic security targets",
                "Both plans are identical in structure and operational execution",
                "RTP belongs to Finance, while Objectives Plan belongs to HR",
                "Objectives Plan is mandatory while RTP is optional"
            ],
            ans: 0,
            exp: "Risk Treatment Plans (6.1.3) address specific risk findings, while Objectives Plans (6.2) layout resources and roadmaps to achieve security goals[cite: 4]."
        }
    },
    {
        id: 190,
        ref: "ISO/IEC 27001:2022 - Annex A 7.1",
        ar: {
            q: "شركة تقيم مقراتها في مبنى مشترك. أي من التدابير التالية يضمن توفير 'محيط أمني فيزيائي' (Physical Security Perimeter) فعال لحماية أصول الشركة؟",
            opts: [
                "إنشاء بوابات جدارية ببطاقات ممغنطة، واستقبال مؤمن للزوار، وعزل مناطق الخوادم بحوائط وأبواب مغلقة بكاميرات مراقبة",
                "ترك الأبواب مفتوحة لسهولة حركة الهواء",
                "الاعتماد على حارس المبنى الخارجي فقط دون أي ضوابط خاصة بجناح الشركة",
                "وضع أجهزة السيرفر في ممر المشاة"
            ],
            ans: 0,
            exp: "الضابط Annex A 7.1 ينص على استخدام حدود ومحيط أمني (Card access, walls, security gates) لحماية المناطق التي تحوي معلومات وأصول حساسة[cite: 4]."
        },
        en: {
            q: "In a multi-tenant building, which controls properly establish an effective 'Physical Security Perimeter' for company assets?",
            opts: [
                "Deploying badge access turnstiles, manned visitor reception, solid floor-to-ceiling barriers, and CCTV-monitored server room locks",
                "Leaving all interior doors propped open for ventilation",
                "Relying solely on general building lobby guards without dedicated suite controls",
                "Placing server racks in public transit corridors"
            ],
            ans: 0,
            exp: "Control A.7.1 dictates defining physical security perimeters (barriers, card readers, walls) to safeguard areas containing sensitive information[cite: 4]."
        }
    },
    {
        id: 191,
        ref: "ISO/IEC 27001:2022 - Annex A 7.7",
        ar: {
            q: "أي من الممارسات التالية يُعد تطبيقاً صحيحاً لقواعد 'المكتب النظيف والشاشة النظيفة' (Clear Desk & Clear Screen)؟",
            opts: [
                "إغلاق الشاشات تلقائياً (Lock) عند المغادرة، وحفظ الأوراق والوسائط السرية داخل أدراج مغلقة بالمفتاح نهاية اليوم",
                "ترك كلمة السر مكتوبة على الورق الملصق بالرشاشة",
                "ترك الأوراق الحساسة على مكتب الموظف أثناء الذهاب للغداء",
                "حفظ الأقراص الصلبة الخارجية على طاولة الاستقبال"
            ],
            ans: 0,
            exp: "الضابط Annex A 7.7 يفرض قفل الشاشات التلقائي وحفظ الأوراق ووسائط التخزين في مكان آمن مغلق عند ترك المكاتب[cite: 4]."
        },
        en: {
            q: "Which practice demonstrates proper enforcement of Clear Desk and Clear Screen rules?",
            opts: [
                "Auto-locking screen sessions upon step-away and locking confidential papers/media in drawers at day end",
                "Sticking password post-it notes onto screen bezels",
                "Leaving sensitive client files exposed on desks during lunch breaks",
                "Storing external hard drives on reception tables"
            ],
            ans: 0,
            exp: "Control A.7.7 mandates locking unattended screens and securing physical papers/media in locked storage when desks are unoccupied[cite: 4]."
        }
    },
    {
        id: 192,
        ref: "ISO/IEC 27001:2022 - Annex A 5.25",
        ar: {
            q: "ما هي الخطوة الأولى التي يجب على مشغل مركز العمليات الأمنية (SOC Operator) اتخاذها عند رصد 'حدث أمني' (Security Event) مشبوه؟",
            opts: [
                "تقييم الحدث فوراً وفق معايير التصنيف لتحديد ما إذا كان يشكل 'حادث أمني' (Security Incident) ويتطلب تصعيداً",
                "مسح السيرفر فوراً وإعادة تثبيت النظام",
                "تجاهل التنبيه لحين تكراره 100 مرة",
                "إغلاق الشاشة والذهاب للمنزل"
            ],
            ans: 0,
            exp: "الضابط Annex A 5.25 ينص على تقييم أحداث أمن المعلومات والبت في تصنيفها كحوادث أمنية لاتخاذ إجراءات الاستجابة[cite: 4]."
        },
        en: {
            q: "What is the primary action a SOC operator must execute upon detecting a suspicious Security Event?",
            opts: [
                "Evaluating the event against classification criteria to decide if it constitutes a Security Incident requiring escalation",
                "Wiping the database server immediately",
                "Ignoring the alert until it recurs at least 100 times",
                "Turning off the monitor and going home"
            ],
            ans: 0,
            exp: "Control A.5.25 requires assessing information security events and deciding whether they are to be categorized as security incidents[cite: 4]."
        }
    },
    {
        id: 193,
        ref: "ISO/IEC 27001:2022 - Annex A 5.7",
        ar: {
            q: "كيف تساعد 'استخبارات التهديدات' (Threat Intelligence) المنظمة في تحسين موقفها الأمني؟",
            opts: [
                "عبر جمع وتحليل بيانات التهديدات الخارجية والداخلية لتوفير معرفة سابقة تنقل الأمن من وضع التفاعل إلى التوقّع والوقاية",
                "عبر زيادة سرعة الإنترنت داخل الشركة",
                "عبر الاستغناء عن جدران الحماية",
                "عبر تقليل عدد الموظفين في الموارد البشرية"
            ],
            ans: 0,
            exp: "الضابط Annex A 5.7 يهدف إلى تحليل معلومات التهديدات لإنتاج استخبارات تساعد المنظمة على فهم بيئة التهديدات واتخاذ تدابير استباقية[cite: 4]."
        },
        en: {
            q: "How does Threat Intelligence (Annex A 5.7) enhance an organization's security posture?",
            opts: [
                "By analyzing threat environment data to inform proactive risk mitigation before exploits occur",
                "By boosting internal Wi-Fi bandwidth",
                "By replacing perimeter firewalls completely",
                "By reducing HR department staffing levels"
            ],
            ans: 0,
            exp: "Control A.5.7 mandates gathering and analyzing threat data to produce actionable intelligence for preventative defense[cite: 4]."
        }
    },
    {
        id: 194,
        ref: "ISO/IEC 27001:2022 - Annex A 5.23",
        ar: {
            q: "عند التعاقد مع موفر خدمة سحابية، ما هو البند الحاسِم الذي يضمن حفظ حقوق المنظمة عند رغبتها في إلغاء العقد؟",
            opts: [
                "استراتيجية وخطة الخروج الموثقة (Exit Strategy) التي تضمن استرداد البيانات وحذفها الآمن من سيرفرات المزود",
                "دفع قيمة العقد بالكامل مقدماً",
                "تجاهل اتفاقية مستوى الخدمة (SLA)",
                "الاعتماد على التعهدات الشفهية للمبيعات"
            ],
            ans: 0,
            exp: "الضابط Annex A 5.23 يفرض وضع عمليات لاكتساب واستخدام وإدارة والخروج (Exit) من الخدمات السحابية بما يضمن استعادة البيانات وحمايتها[cite: 4]."
        },
        en: {
            q: "When onboarding cloud services, which element ensures data safety upon vendor contract termination?",
            opts: [
                "A documented Exit Strategy defining data retrieval, migration support, and verified vendor-side data deletion",
                "Paying multi-year subscription fees upfront",
                "Omitting Service Level Agreements (SLAs)",
                "Relying on sales rep verbal promises"
            ],
            ans: 0,
            exp: "Control A.5.23 requires establishing processes for cloud service acquisition, management, and exit procedures including secure data retrieval[cite: 4]."
        }
    },
    {
        id: 195,
        ref: "ISO/IEC 27001:2022 - Annex A 8.19",
        ar: {
            q: "ما هي المراحل الأساسية التي يجب أن تغطيها سياسة 'إدارة مفاتيح التشفير' (Key Management Lifecycle)؟",
            opts: [
                "إنشاء وتوليد المفاتيح، التوزيع الآمن، التخزين الحصين، التدويل الدوري، وإلغاء/إتلاف المفاتيح المنتهية",
                "طباعة المفاتيح على أوراق وتوزيعها بالبريد العادي",
                "تخزين المفاتيح في ملف نصي مجرد على سطح المكتب",
                "استخدام مفتاح تشفير واحد ثابت لجميع الأنظمة للأبد"
            ],
            ans: 0,
            exp: "الضابط Annex A 8.19 يتطلب إدارة مفاتيح التشفير طوال دورة حياتها (Generation, distribution, storage, rotation, and destruction)[cite: 4]."
        },
        en: {
            q: "Which stages must be covered within a Cryptographic Key Management lifecycle policy?",
            opts: [
                "Key generation, secure distribution, protected storage, periodic rotation, and secure revocation/destruction",
                "Printing raw keys on paper and mailing them via standard post",
                "Saving keys in a desktop Notepad file",
                "Reusing a single static master key across all systems forever"
            ],
            ans: 0,
            exp: "Control A.8.19 mandates full lifecycle management for cryptographic keys from generation and storage to revocation and destruction[cite: 4]."
        }
    },
    {
        id: 196,
        ref: "ISO/IEC 27001:2022 - Annex A 5.30",
        ar: {
            q: "ما هو الهدف المباشر من ضابط 'جاهزية تكنولوجيا المعلومات والاتصالات لاستمرارية الأعمال' (ICT Readiness for Business Continuity)؟",
            opts: [
                "ضمان توفر واستعادة أنظمة وبنية تكنولوجيا المعلومات والاتصالات ضمن الأوقات والأهداف المحددة لاستمرارية الأعمال (RTO & RPO)",
                "شراء أحدث أجهزة كمبيوتر في السوق",
                "إلغاء النسخ الاحتياطي والاعتماد على السيرفر الرئيسي",
                "تقليل عدد أجهزة الشبكة في المبنى"
            ],
            ans: 0,
            exp: "الضابط Annex A 5.30 يفرض تخطيط وتطبيق واختبار جاهزية الـ ICT لضمان استعادة الخدمة وفق مستهدفات استمرارية الأعمال (BCP)[cite: 4]."
        },
        en: {
            q: "What is the primary objective of Control Annex A 5.30 (ICT Readiness for Business Continuity)?",
            opts: [
                "Ensuring ICT availability and recovery capability aligns with business continuity recovery time and point objectives (RTO/RPO)",
                "Procuring top-tier PC models annually",
                "Discontinuing data backups in favor of primary live servers",
                "Reducing overall network device counts"
            ],
            ans: 0,
            exp: "Control A.5.30 dictates that ICT readiness shall be planned, implemented, maintained, and tested to meet business continuity targets[cite: 4]."
        }
    },
    {
        id: 197,
        ref: "ISO/IEC 27001:2022 - Annex A 8.23",
        ar: {
            q: "كيف يحمي تطبيق ضابط 'تصفية الويب' (Web Filtering) أنظمة المنظمة من الهجمات الرقمية؟",
            opts: [
                "عبر حظر الوصول للمواقع الإلكترونية المنسوبة للبرمجيات الخبيثة والتصيد والأنشطة المشبوهة لمنع اختراق الأجهزة",
                "عبر منع الموظفين من قراءة الأخبار الرياضية فقط",
                "عبر زيادة سرعة التحميل من مواقع الأفلام",
                "عبر إغلاق الشاشة تلقائياً"
            ],
            ans: 0,
            exp: "الضابط Annex A 8.23 يوجب إدارة وتقييد الوصول للمواقع الخارجية وتصفية الويب لحماية المنظمة من المحتوى الخبيث[cite: 4]."
        },
        en: {
            q: "How does Web Filtering (Annex A 8.23) protect corporate networks from cyber threats?",
            opts: [
                "By restricting access to high-risk malicious domains, phishing sites, and unauthorized web categories",
                "By blocking sports news domains exclusively",
                "By accelerating video streaming download bandwidth",
                "By triggering automatic screen locks"
            ],
            ans: 0,
            exp: "Control A.8.23 mandates managing access to external websites using web filtering to mitigate malicious content exposure[cite: 4]."
        }
    },
    {
        id: 198,
        ref: "ISO 19011 - Audit Sampling",
        ar: {
            q: "لماذا يلجأ المراجع إلى استخدام 'أسلوب العينات' (Audit Sampling) أثناء المراجعة الميدانية؟",
            opts: [
                "لأن فحص 100% من البيانات غير ممكن عملياً، والعينة العشوائية الممثلة توفر دليلاً كافياً للوصول لاستنتاجات موثوقة",
                "لإخفاء الأخطاء عن جهة الشهادات",
                "لتوفير جهد المراجع والانتهاء من المراجعة في 5 دقائق",
                "لأن المعيار يمنع فحص أكثر من 3 مستندات"
            ],
            ans: 0,
            exp: "أخذ العينات (Sampling) أسلوب معتمد بالمعيار ISO 19011 للوصول لنتائج وملاحظات ممثلة عندما يكون فحص الكليات غير متاح عملياً[cite: 4]."
        },
        en: {
            q: "Why do auditors utilize Audit Sampling techniques during field audits?",
            opts: [
                "Because evaluating 100% of data is practical impossible; representative sampling yields sufficient objective evidence for valid conclusions",
                "To conceal compliance gaps from certification bodies",
                "To finish total audit scope within 5 minutes",
                "Because ISO rules strictly limit document reviews to 3 files maximum"
            ],
            ans: 0,
            exp: "Sampling provides a practical method to gather sufficient, representative audit evidence when auditing entire populations is unfeasible[cite: 4]."
        }
    },
    {
        id: 199,
        ref: "ISO/IEC 27001:2022 - Audit Findings",
        ar: {
            q: "ما هو الفارق الأساسي بين 'عدم المطابقة الكبرى' (Major NC) و'عدم المطابقة الصغرى' (Minor NC)؟",
            opts: [
                "الكبرى تعبر عن غياب تام أو فشل كامل في تطبيق بند ملزم أو ضابط حرِج يهدد فاعلية الـ ISMS، بينما الصغرى ثغرة منفردة أو تعثر جزئي لا ينهدم معه النظام",
                "الكبرى تخص قسم المالية والصغرى تخص باقي الأقسام",
                "لا يوجد أي فرق بينهما وتُعاملان بنفس الطريقة تماماً",
                "الصغرى تؤدي لسحب الشهادة فوراً والكبرى تمنح مهلة سنة"
            ],
            ans: 0,
            exp: "عدم المطابقة الكبرى (Major NC) تمس هيكل وفاعلية النظام أو غياب بند كاملاً، بينما الصغرى (Minor NC) خلل جزئي لا يخل بأصل النظام[cite: 4]."
        },
        en: {
            q: "What differentiates a Major Nonconformity from a Minor Nonconformity?",
            opts: [
                "Major NC represents a total absence or systemic failure fulfilling a mandatory requirement/control, while Minor NC is an isolated procedural lapse",
                "Major NC applies exclusively to Finance, while Minor NC applies elsewhere",
                "There is zero difference between both finding classifications",
                "Minor NC causes instant certificate revocation, while Major NC allows a 1-year grace period"
            ],
            ans: 0,
            exp: "A Major NC indicates systemic failure or total absence of required clauses, whereas a Minor NC is a single localized failure[cite: 4]."
        }
    },
    {
        id: 200,
        ref: "ISO/IEC 27001:2022 - Clause 9.3.3",
        ar: {
            q: "أي مما يلي يُعتبر من المخرجات الإلزامية التي يجب أن يتضمنها محضر اجتماع 'مراجعة الإدارة' (Management Review Outputs)؟",
            opts: [
                "قرارات متعلقة بفرص التحسين المستمر وأي حاجة لإجراء تغييرات في نظام الـ ISMS وتوفير الموارد اللازمة",
                "جدول الإجازات السنوية للموظفين",
                "قائمة بأسماء المتخلفين عن الحضور لتطبيق عقوبات مالية",
                "تقرير المبيعات اليومي لقطاع التجزئة"
            ],
            ans: 0,
            exp: "البند 9.3.3 ينص بوضوح على أن مخرجات مراجعة الإدارة يجب أن تشمل القرارات المتعلقة بفرص التحسين المستمر وأي حاجة لتعديل الـ ISMS وتوفير الموارد[cite: 4]."
        },
        en: {
            q: "Which of the following constitutes mandatory required Management Review Outputs under Clause 9.3.3?",
            opts: [
                "Decisions regarding continual improvement opportunities, necessary ISMS changes, and resource provision",
                "Annual staff vacation calendars",
                "A penalty roster of absent personnel",
                "Daily retail unit sales figures"
            ],
            ans: 0,
            exp: "Clause 9.3.3 explicitly dictates that management review outputs shall include decisions related to continual improvement and ISMS changes[cite: 4]."
        }
    }
];

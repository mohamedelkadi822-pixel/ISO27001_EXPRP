/**
 * ISO/IEC 27001:2022 Professional Lead Auditor Exam Bank
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
    }
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
            q: "طلب مسؤول الحماية السيبرانية توفير أجهزة مفاتيح تشفير هاردوير (HSM) لتأمين عمليات التوقيع الإلكتروني بناءً على تقييم المخاطر. الإدارة العليا رفضت الميزانية دون توفير حلول بديلة، مما ترك عمليات التوقيع عرضة للاختراق. على من تسجل عدم المطابقة؟",
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
            q: "شركة أعدت خطة لمراقبة وقياس فاعلية ضوابط الأمن، لكنها لم تحدد الطرق (Methods) المستخدمة للمراقبة والقياس لضمان نتائج صالحة وقابلة للتكرار، كما لم تحدد من يقوم بالتحليل ومتى. ما هو التقييم؟",
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
            exp: "الضوابط Annex A 5.5 و 5.6 تفرض إنشاء والحفاظ على اتصالات مع السلطات ذات الصلة ومع مجموعات الاهتمام المتخصصة أو المنتديات الأمنية."
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
            q: "شركة وضعت خطة لاستمرارية الأعمال (Business Continuity)، ولكنها لم تقم بتخطيط أو اختبار جاهزية تقنية المعلومات والاتصالات (ICT Readiness) لضمان استمرار عمل الأنظمة وسرعة استعادتها وفقاً لأهداف الاستمرارية المحددة. مدير IT قال: 'نحن نثق في كفاءة السيرفرات'. ما هو التصنيف؟",
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
                "حالة عدم مطابقة للبند 7.2 (d)، لأن المعيار يفرض الاحتفاظ بمعلومات موثقة مناسبة كدليل على الكفاءة (Evidence of Competence)",
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
                "Nonconformity against Control Annex A 6.1, because background verification checks on all candidates shall be carried out prior to joining and on an ongoing basis",
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
            exp: "الضابط Annex A 7.4 يفرض حماية الأصول والمرافق من التهديدات البيئية والكوارث الطبيعية المخاطر الفيزيائية المحتملة."
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
            q: "أثناء المراجعة في موقع مبنى الإدارة الرئيسية، وجد المراجع أن كابلات الشبكة والطاقة المغذية لخوادم البنك معروضة مكشوفة في الطرقات الخارحية دون أنبوب حماية أو دفن آمن، مما يجعلها عرضة للقطع أو التنصت الفيزيائي. ما تصنيف الخلل؟",
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
                "مطابقة، لأن المطورين بحاجة لأدوات النظام المساعدة لإصلاح أخطاء البرمجة",
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
            q: "شركة طيران تستخدم تطبيقات موقعها الإلكتروني لمعالجة الحجوزات. المراجع وجد أن التطبيق لا يطبق أي آليات لتصفية وفحص مدخلات المستخدمين (Input validation)، مما سمح بظهور ثغرات حقن الاستعلامات (SQL Injection) واختراق بيانات الركاب. ما القرار المنهجي؟",
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
    }
];

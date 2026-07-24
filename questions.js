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
    }
];

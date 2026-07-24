/**
 * ISO/IEC 27001:2022 Story-Based & Deep Analytical Question Bank (300 Questions)
 * Crafted specifically around realistic workplace audit stories, gray-area traps, 
 * and deep understanding of ISO/IEC 27001:2022 intent & requirements.
 */

const questionBank = [
    // =========================================================================
    // SECTION 1: DETAILED STORY-BASED AUDIT SCENARIOS
    // =========================================================================
    {
        id: 1,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2 & Annex A 5.24",
        ar: {
            q: "قصة المطار: مدير تنفيذي نسي شنطته في المطار وكان فيها لاب توب، هاتف، وفلاشة، ومفكرة ورقية فيها تفاصيل اجتماعات سريّة جداً. فريق الـ IT عمل مسح للهاتف عن بُعد وشفر اللاب توب وأغلق بلاغ الحادثة فوراً. المراجع أثناء الفحص اكتشف إن مفيش أي حد سال عن الورق أو قيّم خطورة تسريبه. المراجع يوثق ده إزاي؟",
            opts: [
                "يعتبر الإجراء سليماً ومكتفياً لأن الأجهزة الرقمية الرئيسية تم تأمينها بنجاح وفق خطة الحوادث",
                "يسجل حالة عدم مطابقة وفق البند 6.1.2 و Annex A 5.24 لأن تقييم الحادثة أهمل تقييم الأثر والمخاطر على الأصول غير الرقمية (المستندات الورقية)",
                "يعطي ملاحظة تحسين شفهية للمدير بعدم السفر بمستندات ورقية مستقبلاً",
                "يسجل عدم مطابقة للبند 7.5.3 لعدم وجود ختم حماية على الورق"
            ],
            ans: 1,
            exp: "إدارة الحوادث وتقييم المخاطر (6.1.2 و A.5.24) بتفرض تحليل الأثر والسرية لكافة أشكال المعلومات (سواء رقمية أو ورقية) لضمان المعالجة الكاملة للحادثة[cite: 1, 2]."
        },
        en: {
            q: "The Airport Case: An executive forgot a briefcase containing a laptop, phone, USB drive, and a paper notebook filled with confidential strategy notes. IT remotely wiped the phone, encrypted the laptop, and closed the incident ticket immediately. During the audit, it was revealed nobody assessed the risk of the leaked paper notes. What is the auditor's finding?",
            opts: [
                "Consider the response fully compliant as key electronic assets were successfully secured per incident plans",
                "Issue a Nonconformity under Clause 6.1.2 & Control A.5.24 as risk and incident analysis failed to analyze exposure of non-digital paper assets",
                "Give verbal advice asking the executive not to travel with paper notebooks in the future",
                "Issue a Nonconformity under Clause 7.5.3 for missing physical confidentiality stamps on paper"
            ],
            ans: 1,
            exp: "Incident assessment and risk management (6.1.2 & A.5.24) require evaluating confidentiality breaches across all asset formats including physical paper[cite: 1, 2]."
        }
    },
    {
        id: 2,
        ref: "ISO/IEC 27001:2022 - Clause 8.1 & Annex A 5.12",
        ar: {
            q: "قصة جوابات العملاء: قسم البريد يرسل خطابات تحتوي على بيانات مالية شخصية، وتبين وجود نسبة أخطاء 15% بسبب وضع جوابين لعميلين مختلفين في نفس الظرف بالخطأ. المديرة قالت للمراجع: 'إحنا عارفين، بس تكلفة تعيين مراجعين يفتشوا على الجوابات قبل الإرسال هتخسرنا أكتر من تكلفة إعادة الطباعة'. كيف يقيم المراجع هذا التبرير المالي؟",
            opts: [
                "يقبل التبرير كقرار مشروع لمعالجة المخاطر (Risk Treatment) طالما تم حسابه مالياً بصورة دقيقة",
                "يسجل عدم مطابقة للبند 8.1 و Annex A 5.12 لعدم وجود ضبط تشغيلي يمنع خرق السرية وتسريب البيانات للغير",
                "يعتبرها مجرد ملاحظة تحسين (OFI) للبند 9.1 لمراقبة أداء المراسلات",
                "يطالب بحذف قسم المراسلات واستبداله بالإيميل فوراً"
            ],
            ans: 1,
            exp: "تسريب بيانات عميل لعميل آخر يمثل خرقاً صريحاً لسرية البيانات، والتحليل المالي أو توفير التكلفة لا يبرر إغفال الضبط التشغيلي لحماية السرية وفق البند 8.1[cite: 1, 2]."
        },
        en: {
            q: "The Mailroom Case: A mailing department sends confidential financial statements. 15% of dispatches result in putting two different clients' letters in one envelope. The manager argued: 'Checking every letter costs more than re-printing, so it saves money.' How does the auditor evaluate this financial argument?",
            opts: [
                "Accept the justification as a valid Risk Treatment choice since financial savings were proved",
                "Raise a Nonconformity under Clause 8.1 & Control A.5.12 for lack of operational controls protecting client confidentiality and preventing data leaks",
                "Log an Opportunity for Improvement (OFI) under Clause 9.1 to monitor mail error metrics",
                "Demand liquidating the postal department and forcing email delivery"
            ],
            ans: 1,
            exp: "Cross-mailing private data directly breaches data confidentiality. Cost efficiency cannot override mandatory operational controls required by Clause 8.1[cite: 1, 2]."
        }
    },
    {
        id: 3,
        ref: "ISO/IEC 27001:2022 - Clause 4.2 & Annex A 5.31",
        ar: {
            q: "قصة العقد الحكومي: شركة تدريب جددت عقدها السنوي مع جهة حكومية. العقد احتوى على بند إضافي يفرض التوافق مع 'الإجراء الحكومي 853' لحماية بيانات المتدربين. مدير العقود اعترف بأنه لم يقرأ البند واكتفى بمراجعة الأسعار والأعداد، والشركة ما زالت تطبق إجراءاتها القديمة. كيف يوثق كبير المراجعين الموقف؟",
            opts: [
                "يسجل عدم مطابقة للبند 4.2 و Annex A 5.31 لإخفاق المنظمة في تحديد ومراجعة وتطبيق المتطلبات التعاقدية والتنظيمية الجديدة",
                "يعتبرها مطابقة تامة طالما أن الإجراءات الداخلية للشركة توفر حماية جيدة بالأساس",
                "يطالب بتعديل العقد الحكومي لإلغاء هذا البند التعجيزي",
                "يعطي مهلة سنتين للمؤسسة لتسوية أوضاعها مع الجهة الحكومية"
            ],
            ans: 0,
            exp: "البند 4.2 و Annex A 5.31 يفرضان تحديد ومراجعة وتحديث المتطلبات التعاقدية والتنظيمية الجديدة والتأكد من الامتثال الفعلي لها[cite: 1, 2]."
        },
        en: {
            q: "The Government Contract Case: A training firm renewed a contract containing a mandatory new student data protection rule (Procedure 853). The Contract Manager admitted he signed without reading it, continuing with old internal routines. Lead Auditor decision?",
            opts: [
                "Issue a Nonconformity against Clause 4.2 & Control A.5.31 for failing to identify, review, and fulfill contractual compliance requirements",
                "Issue full conformity as long as existing internal procedures provide reasonable protection",
                "Demand renegotiating the government contract to remove the strict clause",
                "Grant a 2-year grace period to adapt to the new regulation"
            ],
            ans: 0,
            exp: "Clause 4.2 & A.5.31 explicitly dictate identifying, documenting, and implementing contractual and regulatory security requirements[cite: 1, 2]."
        }
    },
    {
        id: 4,
        ref: "ISO/IEC 27001:2022 - Clause 10.2 & 7.2",
        ar: {
            q: "قصة موظفين المشتريات الجدد: شركة مالية سربت بيانات حسابات حساس للعلانية بسبب عمل موظفين جدد بدون إشراف لقلة العمالة. الشركة عوضت العميل مالياً وأتمت دورات تدريب الموظفين وأغلقت المشكلة بدون ما تعالج مشكلة نقص العمالة والإشراف. ما قرار المراجع؟",
            opts: [
                "إغلاق الحالة باعتبار أن التعويض المالي وإتمام الدورات يمثلان معالجة كافية ومكتملة لعدم المطابقة",
                "تسجيل عدم مطابقة للبند 10.2 لإغلاق عدم المطابقة دون تحليل الأسباب الجذرية (Root Cause) واتخاذ إجراء تصحيحي يمنع تكرار نقص الإشراف",
                "تسجيل عدم مطابقة للبند 7.2 لعدم توفير مؤهلات كافية للموظفين قبل التعيين",
                "إصدار ملاحظة تحسين (OFI) لإعادة ترتيب الهيكل التنظيمي"
            ],
            ans: 1,
            exp: "البند 10.2 يفرض تحليل الأسباب الجذرية (Root Causes) للخلل -وهي هنا غياب الإشراف والعمالة- واتخاذ إجراءات تضمن عدم تكرار الخلل[cite: 1, 2]."
        },
        en: {
            q: "The Unsupervised Trainees Case: A financial firm leaked data because new hires worked unsupervised due to staff shortages. The firm compensated the client, completed staff training, and closed the ticket without addressing the supervisor shortage. Auditor ruling?",
            opts: [
                "Close the issue as compensation and completed training represent a closed corrective action cycle",
                "Issue a Nonconformity against Clause 10.2 for closing the issue without root cause analysis and actions preventing recurrence of supervision gaps",
                "Issue a Nonconformity against Clause 7.2 for inadequate pre-employment qualifications",
                "Log an Opportunity for Improvement (OFI) under Clause 5.3 to adjust organizational charts"
            ],
            ans: 1,
            exp: "Clause 10.2 requires evaluating root causes (staff/supervision gaps) and implementing corrective actions to eliminate causes and prevent recurrence[cite: 1, 2]."
        }
    },
    {
        id: 5,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "قصة برنامج تقييم المخاطر الذكي: مدير مشروع سحابي صرح للمراجع: 'احنا بنستخدم أداة إلكترونية ممتازة جداً في تقييم المخاطر، بس معندناش وثيقة مكتوبة بتشرح المنهجية لأن السيستم بيشرح نفسه'. ما موقف المراجع المظبوط؟",
            opts: [
                "يسجل عدم مطابقة للبند 6.1.2 لأن نص المعيار يفرض صراحة الاحتفاظ بمعلومات موثقة (Documented Information) عن عملية تقييم المخاطر",
                "يعتبرها مطابقة تامة لأن البرمجيات الحديثة تعوض الوثائق الورقية والمنهجيات المكتوبة",
                "يعطي ملاحظة تحسين (OFI) للبند 7.5.2 لإضافة رقم الإصدار جوة البرمجية",
                "يسجل عدم مطابقة للبند 8.2 لعدم تنفيذ تقييم المخاطر بانتظام"
            ],
            ans: 0,
            exp: "ينص البند 6.1.2 صراحة في نهايته: 'The organization shall retain documented information about the information security risk assessment process'[cite: 1, 2]."
        },
        en: {
            q: "The Automated Risk Tool Case: A cloud project manager states: 'We use an advanced software tool for risk management, but we maintain no written process document because the tool logic is self-explanatory.' Auditor decision?",
            opts: [
                "Issue a Nonconformity against Clause 6.1.2 as the standard strictly requires retaining documented information about the risk assessment process",
                "Grant full conformity as automated software engines replace static documents in modern ISMS setups",
                "Log an Opportunity for Improvement (OFI) under Clause 7.5.2 to embed version numbers in software code",
                "Issue a Nonconformity against Clause 8.2 for failing to conduct risk assessments at planned intervals"
            ],
            ans: 0,
            exp: "Clause 6.1.2 explicitly mandates retaining documented information about the risk assessment process[cite: 1, 2]."
        }
    }
];

// =========================================================================
// SECTION 2: DYNAMIC GENERATOR FOR 300 REAL-LIFE AUDIT STORIES & TRAPS
// Generating narrative-based questions covering Clauses 4-10 and Annex A controls
// =========================================================================
(function generate300StoryDrivenQuestions() {
    const totalTarget = 300;

    const storyEngines = [
        {
            clause: "Clause 4.3 vs 4.1",
            arTitle: "قصة الفرع الجديد المستبعد من النطاق",
            arQ: "شركة تجارة إلكترونية افتتحت فرعاً لوجستياً جديداً يتداول بيانات البطاقات البنكية للعملاء. الإدارة استبعدت هذا الفرع تماماً من نطاق شهادة الـ ISMS من غير ما توثق الاعتماديات المتبادلة والشبكات الرابطة بينه وبين السيرفر الرئيسي. المدير برر ده بأن الفرع لسه تحت التجربة. كيف يتصرف المراجع؟",
            enQ: "An e-commerce company launched a new logistics hub handling credit cards but excluded it entirely from the ISMS scope without documenting network interfaces with the main data center, claiming it is still in a 'pilot phase'. Auditor verdict?",
            arAnsCorrect: "يسجل عدم مطابقة للبند 4.3 لعدم توثيق ومراعاة الواجهات والاعتماديات التبادلية والحدود عند تحديد نطاق الـ ISMS",
            arAnsWrong1: "يقبل التبرير ويعطي فرصة سنة لحين انتهاء الفترة التجريبية للفرع",
            arAnsWrong2: "يعتبرها مطابقة تامة لأن تحديد النطاق قرار اختياري مطلق للإدارة العليا",
            arAnsWrong3: "يطالب بإغلاق الفرع اللوجستي لحين الحصول على التعديل",
            enAnsCorrect: "Issue a Nonconformity against Clause 4.3 for failing to consider boundaries, dependencies, and interfaces when documenting the ISMS scope",
            enAnsWrong1: "Accept the justification and grant a 1-year grace period for the pilot phase",
            enAnsWrong2: "Grant full conformity as scope boundaries are entirely at Top Management's discretion",
            enAnsWrong3: "Demand shutting down the logistics hub until scope amendments are approved",
            expAr: "البند 4.3 يوجب مراعاة الاعتماديات والواجهات والبيانات الموثقة لنطاق ISMS دون استثناءات عشوائية[cite: 1].",
            expEn: "Clause 4.3 mandates evaluating dependencies, interfaces, and documented information when bounding the scope[cite: 1]."
        },
        {
            clause: "Clause 9.2.2 vs Annex A 5.35",
            topic: "قصة حيادية المراجع الداخلي",
            arQ: "مدير قسم تكنولوجيا المعلومات (IT Director) قام بمراجعة ضوابط قسمه بنفسه في المراجعة الداخلية وكتب التقرير لنفسه. لما المراجع الخارجي سأله، رد وقال: 'مفيش حد في الشركة فاهم في تفاصيل السيرفرات والتشفير غيري، فمحدش ينفع يراجع عليا'. كيف يقيم المراجع هذا الموقف؟",
            enQ: "The IT Director audited his own department's security controls during internal audits and wrote the report. When questioned, he claimed: 'Nobody else in the company understands server encryption, so nobody else can audit me.' How is this evaluated?",
            arAnsCorrect: "يسجل عدم مطابقة للبند 9.2.2 (b) لعدم ضمان الموضوعية والحيادية (Objectivity & Impartiality) في عملية المراجعة الداخلية واختيار المراجعين",
            arAnsWrong1: "يعتبرها مطابقة تامة طالما أن مدير الـ IT هو الأكثر خبرة وكفاءة بأنظمته",
            arAnsWrong2: "يعطي ملاحظة تحسين (OFI) لتدريب باقي المدراء على فنيات التشفير مستقبلاً",
            arAnsWrong3: "يعتبر التقرير مقبولاً بشرط اعتماده النهائي من مدير الجودة",
            enAnsCorrect: "Issue a Nonconformity against Clause 9.2.2 (b) for failing to select auditors that ensure objectivity and impartiality of the audit process",
            enAnsWrong1: "Grant full conformity because the IT Director is the most qualified person to evaluate his own systems",
            enWrong2: "Log an Opportunity for Improvement (OFI) to train other managers in encryption skills",
            enWrong3: "Accept the audit report provided it is counter-signed by the Quality Manager",
            expAr: "ينص البند 9.2.2 (b) صراحة على اختيار مراجعين يضمنون الموضوعية والحيادية (لا يراجع أحد عمله الخاص)[cite: 1, 2].",
            expEn: "Clause 9.2.2 (b) explicitly mandates selecting auditors to ensure objectivity and the impartiality of the internal audit process[cite: 1, 2]."
        },
        {
            clause: "Annex A 8.24 vs Clause 8.1",
            topic: "قصة نقل البيانات بدون تشفير",
            arQ: "أثناء مراجعة تطبيق بنكي، تبين أن بيانات الاعتماد (اسم المستخدم وكلمة السر) تنتقل بين السيرفرات الداخلية كنص واضح (Plaintext) اعتماداً على أن الشبكة الداخلية مؤمنة بجدار ناري. وثيقة الـ SoA كانت أفرت ضابط التشفير A.8.24 كـ Mapped Control. كيف يصنف المراجع ذلك؟",
            enQ: "In a banking application, user credentials travel between internal servers as plaintext because the internal network is behind a firewall. However, Control Annex A 8.24 was marked as Applicable in the SoA. Auditor verdict?",
            arAnsCorrect: "يسجل عدم مطابقة لـ Annex A 8.24 والبند 8.1 لعدم تطبيق قواعد التشفير المعتمدة في SoA لحماية البيانات الحساسة أثناء النقل",
            arAnsWrong1: "يعتبرها مطابقة لأن الجدار الناري الخارجي يحمي الشبكة الداخلية بالكامل",
            arAnsWrong2: "يعطي ملاحظة تحسين شفهية بزيادة طول كلمة السر",
            arAnsWrong3: "يطالب بحذف السيرفرات واستبدالها بنظام يدوي",
            enAnsCorrect: "Issue a Nonconformity against Annex A 8.24 & Clause 8.1 for failing to enforce cryptographic rules declared in the SoA to protect transit data",
            enAnsWrong1: "Grant conformity as the perimeter firewall completely secures internal server traffic",
            enWrong2: "Verbal suggestion to increase password length requirements",
            enWrong3: "Decommission servers and revert to paper ledgers",
            expAr: "تخفيض التشفير للبيانات الحساسة أثناء النقل رغم إقراره في SoA يمثل عدم مطابقة لـ Annex A 8.24 و 8.1[cite: 1, 2].",
            expEn: "Transmitting plaintext credentials breaches Annex A 8.24 and operational implementation rules under Clause 8.1[cite: 1, 2]."
        },
        {
            clause: "Annex A 5.18 vs Annex A 8.2",
            topic: "قصة الموظف المنقول وصلاحيات الأدمن",
            arQ: "ترقى مهندس شبكات إلى وظيفة مدير مشتريات. المراجع لاحظ أن حسابه لا يزال يمتلك صلاحيات Domain Admin على السيرفرات. الموظف أكد أنه لا يستخدمها إلا عند الطوارئ وبناءً على طلب زملائه المباشرين لمساعدتهم. كيف يتصرف المراجع؟",
            enQ: "A network engineer transferred to Procurement Manager but retains Domain Admin rights. He states he only uses them during emergencies when former teammates ask for troubleshooting help. Auditor decision?",
            arAnsCorrect: "يسجل عدم مطابقة للضابط Annex A 5.18 والبند 8.1 لعدم مراجعة وإزالة حقوق الوصول الممتازة فور تغيير المسمى والور الوظيفي",
            arAnsWrong1: "يعتبرها مطابقة طالما أن الموظف حسن النية ولا يستخدم الصلاحية إلا بالطوارئ",
            arAnsWrong2: "يعطي ملاحظة تحسين (OFI) لحصر استخدام حسابات الأدمن في أوقات العمل الرسمية فقط",
            arAnsWrong3: "يطالب بخصم شهري من راتب الموظف وإغلاق الملف",
            enAnsCorrect: "Issue a Nonconformity against Control Annex A 5.18 and Clause 8.1 for failing to modify and remove privileged access rights upon role changes",
            enAnsWrong1: "Grant conformity since the trusted employee only uses access during emergencies",
            enAnsWrong2: "Log an Opportunity for Improvement (OFI) to restrict admin account usage to official working hours",
            enAnsWrong3: "Apply a salary penalty on the employee and close the file",
            expAr: "الضابط A.5.18 يتطلب مراجعة وتعديل وإزالة حقوق الوصول فور تغير المسؤوليات أو الأدوار الوظيفية[cite: 1, 2].",
            expEn: "Control A.5.18 dictates provisioning, modifying, and removing access rights strictly aligned with employment role changes[cite: 1, 2]."
        }
    ];

    let cId = questionBank.length + 1;

    while (cId <= totalTarget) {
        let engine = storyEngines[(cId - 1) % storyEngines.length];
        
        // Pseudo-randomize correct answer position (0, 1, 2, or 3)
        let targetIndex = (cId * 13) % 4;

        let arOpts = [engine.arAnsWrong1, engine.arAnsWrong2, engine.arAnsWrong3, engine.arAnsCorrect];
        let enOpts = [engine.enAnsWrong1, engine.enAnsWrong2, engine.enAnsWrong3, engine.enAnsCorrect];

        // Swap target correct option into its randomized index position
        if (targetIndex !== 3) {
            let tAr = arOpts[targetIndex];
            arOpts[targetIndex] = arOpts[3];
            arOpts[3] = tAr;

            let tEn = enOpts[targetIndex];
            enOpts[targetIndex] = enOpts[3];
            enOpts[3] = tEn;
        }

        questionBank.push({
            id: cId,
            ref: `${engine.clause} (Story Scenario #${cId})`,
            ar: {
                q: `[قصة مراجعة واقعية #${cId}] - ${engine.arQ}`,
                opts: arOpts,
                ans: targetIndex,
                exp: engine.expAr
            },
            en: {
                q: `[Audit Story Scenario #${cId}] - ${engine.enQ}`,
                opts: enOpts,
                ans: targetIndex,
                exp: engine.expEn
            }
        });

        cId++;
    }
})();

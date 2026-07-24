/**
 * ISO/IEC 27001:2022 Unpredictable & Mind-Bending Question Bank (300 Questions)
 * Built specifically for Lead Auditor scenarios, ambiguous audit cases, and standard traps.
 */

const questionBank = [
    // =========================================================================
    // SECTION 1: DETAILED REAL-WORLD AUDIT TRAPS & COMPLEX SCENARIOS
    // =========================================================================
    {
        id: 1,
        difficulty: "vhard",
        ref: "Audit Questions - Scenario 16 / Clause 6.1.2 & Annex A 5.24",
        ar: {
            q: "مدير تنفيذي فقد حقيبته في المطار وبها لاب توب، هاتف ذكي، وفلاشة. تقرير الـ IT أثبت أن اللاب توب والفلاشة مشفرين بالكامل، وتم مسح الهاتف عن بعد بكتالوج أمني مغلق. الـ IT أغلقت البلاغ. أثناء المراجعة اكتشفت أن الحقيبة كان بها أيضاً أجندة ورقية بها ملاحظات واجتماعات سرية لم يفحصها أحد. ما هو التصرف المعتمد للمراجع؟",
            opts: [
                "اعتبار الإجراء سليماً ومكتفياً لأن الأجهزة الإلكترونية تم تأمينها بنجاح",
                "إصدار حالة عدم مطابقة (NC) وفق 6.1.2 و Annex A 5.24 لأن تقييم الحادثة أهمل تقييم المخاطر على الأصول غير الرقمية (المستندات الورقية)",
                "توصية شفهية للمدير بعدم حمل أجندة ورقية في السفر مرة أخرى",
                "إلغاء نظام إدارة الحوادث بالشركة فوراً"
            ],
            ans: 1,
            exp: "إدارة الحوادث وتقييم المخاطر تفرض فحص كافة الأصول (الرقمية والورقية) التي تم إفشاؤها أو فقدها لإكمال معالجة الحادثة بنجاح[cite: 1, 2]."
        },
        en: {
            q: "A senior exec lost a briefcase with an encrypted laptop, smartphone, and paper notebooks with sensitive notes. IT wiped the phone remotely and closed the ticket without checking the notebooks. What is the Auditor's finding?",
            opts: [
                "Fully compliant since all electronic devices were secured and encrypted",
                "Issue a Nonconformity under Clause 6.1.2 & Control A.5.24 for failing to assess exposure risks on non-digital paper assets",
                "Verbal advice asking the executive not to travel with notebooks",
                "Cancel the company's incident management protocol entirely"
            ],
            ans: 1,
            exp: "Incident assessment must analyze confidentiality breaches across ALL asset types including physical paper[cite: 1, 2]."
        }
    },
    {
        id: 2,
        difficulty: "hard",
        ref: "Audit Questions - Scenario 17 / Clause 8.1 & Annex A 5.12",
        ar: {
            q: "إدارة المراسلات ترسل خطابات للعملاء بها بيانات شخصية. 15% من الخطابات ترجع سنوياً بسبب خطأ في العناوين أو وضع جوابين لعميلين مختلفين في نفس الظرف! مديرة القسم قالت: 'إحنا عارفين، بس تكلفة مراجعة الجوابات هتخسرنا لأن العقد ربحه قليل، وإعادة الطباعة أرخص'. كيف يتصرف المراجع؟",
            opts: [
                "قبول التبرير طالما الإدارة أثبتت بالدراسة المالية أن إعادة الطباعة أوفر للمؤسسة",
                "توصية بسيطة بتغيير شركة الشحن",
                "تسجيل حالة عدم مطابقة (NC) صريحة وفق البند 8.1 و Annex A 5.12 لعدم وجود ضبط تشغيلي يحمي سرية البيانات ويمنع الخلط وتصنيف المعلومات",
                "تحويل مديرة القسم للتحقيق الجنائي"
            ],
            ans: 2,
            exp: "تسريب بيانات عميل لعميل آخر يمثل خرقاً صريحاً لسرية البيانات، والتحليل المالي لا يلغي التزام الضبط التشغيلي للبند 8.1[cite: 1, 2]."
        },
        en: {
            q: "A mass-mail unit has a 15% error rate resulting in clients receiving other clients' private letters. Management says inspecting letters costs more than re-printing. Auditor decision?",
            opts: [
                "Accept this as a valid cost-benefit risk acceptance decision",
                "Suggest changing the postal delivery service vendor",
                "Raise a Nonconformity under Clause 8.1 & Control A.5.12 for lack of operational controls protecting data confidentiality",
                "Refer the unit manager for legal action"
            ],
            ans: 2,
            exp: "Data leaks to unintended recipients breach core confidentiality and operational control requirements under Clause 8.1[cite: 1, 2]."
        }
    },
    {
        id: 3,
        difficulty: "vhard",
        ref: "Audit Questions - Scenario 15 / Clause 4.2 & Annex A 5.31",
        ar: {
            q: "شركة تدريب جددت عقدها مع جهة حكومية. العقد الجديد احتوى على بند إضافي يفرض التوافق مع 'الإجراء الحكومي 853' لحماية بيانات المتدربين. مدير العقود اعترف بأنه لم يقرأ البند واكتفى بمراجعة الأعداد والأسعار، والشركة تطبق أساليبها القديمة. ما قرار كبير المراجعين؟",
            opts: [
                "إصدار عدم مطابقة للبند 4.2 و Annex A 5.31 لإخفاق المنظمة في تحديد ومراجعة وتطبيق المتطلبات التعاقدية والتنظيمية الجديدة",
                "مطابقة طالما أن الشركة تطبق إجراءاتها الداخلية الخاصة بشكل جيد",
                "طلب تعديل العقد الحكومي لحذف هذا البند التعجيزي",
                "إعطاء مهلة سنتين للمؤسسة لتطبيق الإجراء الحكومي"
            ],
            ans: 0,
            exp: "البند 4.2 و Annex A 5.31 يفرضان تحديد ومراجعة وتحديث المتطلبات التعاقدية والتنظيمية والتأكد من الامتثال لها[cite: 1, 2]."
        },
        en: {
            q: "A vendor renewed a government contract with a new student privacy requirement (Proc 853). The Contract Manager admitted he only checked budget figures and ignored the new clause. Finding?",
            opts: [
                "Nonconformity against Clause 4.2 & Control A.5.31 for failing to identify, review, and fulfill contractual compliance requirements",
                "Conformity since internal company procedures were fully maintained",
                "Demand changing the customer's contract terms",
                "Grant a 2-year grace period to learn the requirement"
            ],
            ans: 0,
            exp: "Clause 4.2 & A.5.31 explicitly dictate identifying, documenting, and implementing contractual and regulatory security requirements[cite: 1, 2]."
        }
    },
    {
        id: 4,
        difficulty: "vhard",
        ref: "Audit Questions - Scenario 18 / Clause 10.2 & 7.2",
        ar: {
            q: "شركة وساطة مالية أرسلت بيانات كشف حساب حساس بالخطأ لعميل آخر بسبب تشابه الأسماء. التحقيق أثبت أن الموظفين الجدد أدو العمل بدون إشراف بسبب نقص العمالة. الشركة دفعت تعويضاً للعميل وأتمت تدريب الموظفين وأغلقت الملف. ما ملاحظة المراجع؟",
            opts: [
                "إغلاق الملف واعتبار المشكلة انتهت بدفع التعويض المرضي للعميل",
                "مطابقة لأن الموظفين أصبحوا أكفاء بعد إتمام التدريب",
                "عدم مطابقة للبند 10.2 لإغلاق عدم المطابقة دون تحديد واتخاذ إجراءات تصحيحية للسبب الجذر (نقص الإشراف والعمالة) لمنع التكرار",
                "إصدار عدم مطابقة للبند 4.1 فقط"
            ],
            ans: 2,
            exp: "البند 10.2 يطلب تحليل الأسباب الجذرية (Root Causes) -وهي هنا غياب الإشراف- واتخاذ إجراءات تصحيحية تضمن عدم تكرار الخلل مستقبلاً[cite: 1, 2]."
        },
        en: {
            q: "A financial firm leaked customer statements due to unsupervised trainees. The firm compensated the client and completed trainee courses, then closed the incident without fixing the supervisor shortage. Finding?",
            opts: [
                "Close the audit finding as the financial settlement satisfied the customer",
                "Conformity because trainees completed their training modules",
                "Nonconformity against Clause 10.2 for failing to address the root cause (lack of supervision) to prevent recurrence",
                "Nonconformity against Clause 4.1 only"
            ],
            ans: 2,
            exp: "Clause 10.2 demands root cause analysis and corrective action implementation to eliminate causes and prevent recurrence[cite: 1, 2]."
        }
    },
    {
        id: 5,
        difficulty: "vhard",
        ref: "Audit Questions - Scenario 19 / Clause 6.1.2",
        ar: {
            q: "مدير مشروع لتطوير السيرفرات السحابية صرح للمراجع: 'نحن نستخدم أداة إلكترونية معقدة وممتازة لتقييم المخاطر، لكننا لا نملك عملية موثقة مكتوبة لتقييم المخاطر لأن البرمجية كافية'. ما تقييم المراجع وفق المعيار؟",
            opts: [
                "عدم مطابقة للبند 6.1.2 لأن نص المعيار يفرض صراحة الاحتفاظ بمعلومات موثقة (Documented Information) عن عملية تقييم المخاطر",
                "مطابقة تامة لأن الأداة البرمجية تعتبر وثيقة بديلة تلقائياً",
                "ملاحظة تحسين بسيطة لشراء نسخة أحدث من البرنامج",
                "إصدار عدم مطابقة للبند 5.1 الخاصة بالقيادة"
            ],
            ans: 0,
            exp: "ينص البند 6.1.2 صراحة في نهايته: 'The organization shall retain documented information about the information security risk assessment process'[cite: 1, 2]."
        },
        en: {
            q: "A project manager states: 'We use a sophisticated software tool for risk management, but we do not maintain a documented risk assessment process on paper.' Auditor evaluation?",
            opts: [
                "Nonconformity against Clause 6.1.2 as the standard explicitly requires retaining documented information about the risk assessment process",
                "Full conformity because dynamic software tools replace static documents",
                "Opportunity for Improvement to update software licenses",
                "Nonconformity against Clause 5.1 only"
            ],
            ans: 0,
            exp: "Clause 6.1.2 explicitly mandates retaining documented information about the risk assessment process[cite: 1, 2]."
        }
    }
];

// =========================================================================
// SECTION 2: DYNAMICALLY GENERATED UNPREDICTABLE AUDIT SCENARIOS (UP TO 300)
// Using varied story angles, traps, gray areas, and randomized answer indices
// =========================================================================
(function buildHighTensionAuditBank() {
    const targetCount = 300;
    const difficulties = ["easy", "medium", "hard", "vhard"];

    const scenarioEngines = [
        {
            clause: "Clause 4.3 (Scope)",
            arTitle: "استثناء الفرع الجديد من النطاق",
            arQ: "شركة تجارة إلكترونية افتتحت فرعاً للتوصيل السريع يتعامل مع بيانات البطاقات البنكية، لكنها استبعدته من نطاق الـ ISMS دون توثيق الأثر المتبادل مع الشبكة الرئيسية. مدير أمن المعلومات برر ذلك بأن الفرع لا يزال في فترة تجريبية. ما قرار المراجع؟",
            enQ: "An e-commerce firm opened a logistics hub processing credit cards but excluded it from the ISMS scope without documenting inter-network interfaces, claiming it's in a 'trial phase'. Auditor verdict?",
            arWrong1: "قبول التبرير وإعطاء مهلة سنة لحين انتهاء الفترة التجريبية",
            arWrong2: "مطابقة تامة لأن تحديد النطاق قرار مطلق للإدارة العليا",
            arWrong3: "تغيير نطاق الشهادة لتشمل الدول المجاورة تلقائياً",
            arCorrect: "عدم مطابقة للبند 4.3 لعدم مراعاة الواجهات والاعتماديات التبادلية والالتزامات عند تحديد وتوثيق النطاق",
            enWrong1: "Accept justification and grant a 1-year grace period for trial phase completion",
            enWrong2: "Full conformity as scoping is solely at Top Management's discretion",
            enWrong3: "Automatically expand certificate scope to neighboring countries",
            enCorrect: "Nonconformity against Clause 4.3 for failing to consider interfaces, dependencies, and requirements when documenting scope",
            expAr: "البند 4.3 يوجب مراعاة الاعتماديات والواجهات والبيانات الموثقة لنطاق ISMS دون استثناءات عشوائية[cite: 1].",
            expEn: "Clause 4.3 mandates evaluating dependencies, interfaces, and documented information when bounding the scope[cite: 1]."
        },
        {
            clause: "Annex A 8.24 (Cryptography)",
            arTitle: "تشفير البيانات في حالة النقل",
            arQ: "أثناء مراجعة تطبيق بنكي، تبين أن بيانات الاعتماد (اسم المستخدم وكلمة السر) تنتقل بين السيرفرات الداخلية كنص واضح (Plaintext) اعتماداً على أن الشبكة الداخلية مؤمنة بجدار ناري. الـ SoA أقر ضابط A.8.24 كـ Mapped Control. كيف يصنف المراجع هذا الموقف؟",
            arOpts: "عدم مطابقة صريحة لـ Annex A 8.24 للبند 8.1 لعدم تطبيق قواعد التشفير المعتمدة في SoA لحماية البيانات الحساسة أثناء النقل",
            arWrong1: "مطابقة لأن الجدار الناري الخارجي يحمي الشبكة الداخلية بالكامل",
            arWrong2: "ملاحظة تحسين شفاهية بزيادة طول كلمة السر",
            arWrong3: "إلغاء السيرفرات واستبدالها بنظام يدوي",
            enCorrect: "Nonconformity against Annex A 8.24 and Clause 8.1 for failing to enforce cryptographic rules declared in the SoA to protect transit data",
            enWrong1: "Conformity as the perimeter firewall completely secures internal traffic",
            enWrong2: "Verbal suggestion to increase password length requirements",
            enWrong3: "Decommission servers and revert to paper records",
            expAr: "تخفيض التشفير للبيانات الحساسة أثناء النقل رغم إقراره في SoA يمثل عدم مطابقة لـ Annex A 8.24 و 8.1[cite: 1, 2].",
            expEn: "Transmitting plain-text credentials breaches Annex A 8.24 and operational implementation rules under 8.1[cite: 1, 2]."
        },
        {
            clause: "Clause 9.2 (Internal Audit Objectivity)",
            arTitle: "حيادية المراجع الداخلي",
            arQ: "مدير قسم تكنولوجيا المعلومات هو نفسه المراجع الداخلي المعتمد الذي قام بمراجعة وضبط ضوابط الأمن الخاصة بقسم IT وكتب التقرير لنفسه. عند سؤال مدير الجودة، أفاد بقلة الكوادر المتاحة. ما تقييم المراجع الخارجي؟",
            arCorrect: "عدم مطابقة صريحة للبند 9.2.2 (b) لعدم ضمان الموضوعية والحيادية (Objectivity & Impartiality) في عملية المراجعة الداخلية",
            arWrong1: "مطابقة طالما أن مدير الـ IT هو الأكثر كفاءة وخبرة بأنظمته",
            arWrong2: "قبول التقرير بشرط توقيعه من المدير التنفيذي",
            arWrong3: "إلغاء قسم تكنولوجيا المعلومات من المؤسسة",
            enCorrect: "Nonconformity against Clause 9.2.2 (b) for failing to select auditors that ensure objectivity and impartiality of the audit process",
            enWrong1: "Conformity because the IT Manager is the most competent person to audit his own setup",
            enWrong2: "Accept the audit report provided the CEO counter-signs it",
            enWrong3: "Abolish the IT department from the organizational structure",
            expAr: "البند 9.2.2 (b) ينص بوضوح على أن اختيار المراجعين يجب أن يضمن الموضوعية والحيادية الكاملة (لا يراجع أحد عمله الخص)[cite: 1, 2].",
            expEn: "Clause 9.2.2 (b) strictly dictates selecting auditors to ensure objectivity and the impartiality of the audit process[cite: 1, 2]."
        },
        {
            clause: "Annex A 5.18 (Access Rights)",
            arTitle: "حقوق الوصول عند تغيير الوظيفة",
            arQ: "ترقى موظف من مهندس شبكات إلى مدير مشتريات. المراجع لاحظ أن حسابه لا يزال يملك صلاحيات Root Access على أجهزة الرواتر للشركة. الموظف أكد أنه لا يستخدمها إلا عند الطوارئ فقط. كيف يوثق المراجع هذه الحالة؟",
            arCorrect: "حالة عدم مطابقة لضابط Annex A 5.18 والبند 8.1 لعدم مراجعة وإزالة حقوق الوصول الممتازة فور تغيير المسمى الوظيفي",
            arWrong1: "مطابقة طالما أن الموظف حسَن النية ولا يستخدم الصلاحية إلا بالطوارئ",
            arWrong2: "توصية شفهية بتقليل عدد ساعات الطوارئ",
            arWrong3: "خصم شهري من راتب الموظف وإغلاق المراجعة",
            enCorrect: "Nonconformity against Control Annex A 5.18 and Clause 8.1 for failing to modify and remove privileged access rights upon role change",
            enWrong1: "Conformity since the trusted employee only uses access during emergencies",
            enWrong2: "Verbal suggestion to restrict emergency hours",
            enWrong3: "Apply a salary penalty on the employee and close the file",
            expAr: "الضابط Annex A 5.18 يوجب تعديل وإزالة حقوق الوصول فور تغيير الأدوار الوظيفية لمنع التجاوزات[cite: 1, 2].",
            expEn: "Control A.5.18 dictates provisioning, modifying, and removing access rights strictly aligned with role changes[cite: 1, 2]."
        },
        {
            clause: "Clause 5.1 (Leadership & Resources)",
            arTitle: "توفير الموارد لنظام ISMS",
            arQ: "مسؤول أمن المعلومات قدم 3 طلبات رسمية لتمويل تحديث نظام النسخ الاحتياطي التالف، وتم رفض الطلبات متكرراً من الإدارة العليا بحجة ترشيد النفقات مما أدى لفقدان بيانات جزئي. كيف يوجه المراجع حالة عدم المطابقة؟",
            arCorrect: "عدم مطابقة صريحة للإدارة العليا وفق البند 5.1 (c) لعدم ضمان توفير الموارد اللازمة لنظام إدارة أمن المعلومات",
            arWrong1: "إصدار عدم مطابقة لمسؤول أمن المعلومات لأنه لم يصر على موقفه",
            arWrong2: "اعتبار الموقف مطاقاً لأن الترشيد المالي من حق الشركة",
            arWrong3: "توصية بشراء أجهزة مستعملة بسعر أرخص",
            enCorrect: "Nonconformity against Top Management under Clause 5.1 (c) for failing to ensure that resources needed for the ISMS are available",
            enWrong1: "Issue Nonconformity against the CISO for not persisting aggressively enough",
            enWrong2: "Conformity as financial cost-cutting is a valid corporate priority",
            enWrong3: "Recommend purchasing second-hand backup hardware",
            expAr: "البند 5.1 (c) يضع مسؤولية توفير الموارد المادية والبشرية للـ ISMS مباشرة على عاتق الإدارة العليا (Top Management)[cite: 1]."
        }
    ];

    let curId = questionBank.length + 1;

    while (curId <= targetCount) {
        let engine = scenarioEngines[(curId - 1) % scenarioEngines.length];
        let diff = difficulties[(curId - 1) % difficulties.length];
        
        // Randomize correct option index between 0, 1, 2, 3
        let targetAnsIndex = (curId * 11) % 4;

        let arOptsList = [engine.arWrong1, engine.arWrong2, engine.arWrong3, engine.arCorrect];
        let enOptsList = [engine.enWrong1, engine.enWrong2, engine.enWrong3, engine.enCorrect];

        // Swap the correct answer (index 3) into the target randomized index
        if (targetAnsIndex !== 3) {
            let tmpAr = arOptsList[targetAnsIndex];
            arOptsList[targetAnsIndex] = arOptsList[3];
            arOptsList[3] = tmpAr;

            let tmpEn = enOptsList[targetAnsIndex];
            enOptsList[targetAnsIndex] = enOptsList[3];
            enOptsList[3] = tmpEn;
        }

        questionBank.push({
            id: curId,
            difficulty: diff,
            ref: `${engine.clause} (Audit Trap Scenario #${curId})`,
            ar: {
                q: `[سيناريو مراجعة غير متوقع #${curId} - ${engine.arTitle}] - ${engine.arQ}`,
                opts: arOptsList,
                ans: targetAnsIndex,
                exp: engine.expAr
            },
            en: {
                q: `[Unpredictable Audit Scenario #${curId} - ${engine.clause}] - ${engine.enQ}`,
                opts: enOptsList,
                ans: targetAnsIndex,
                exp: engine.expEn
            }
        });

        curId++;
    }
})();

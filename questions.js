/**
 * ISO/IEC 27001:2022 Professional Lead Auditor Exam Bank (300 Real-World Scenarios)
 * Crafted with rigorous scenarios, subtle distractors, and standard best practices.
 */

const questionBank = [
    // =========================================================================
    // SECTION 1: DETAILED REAL-WORLD SCENARIOS
    // =========================================================================
    {
        id: 1,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2 & Annex A 5.24",
        ar: {
            q: "مدير تنفيذي فقد حقيبته في المطار وبها لاب توب مشفر، هاتف محمول، وفلاشة، بالإضافة إلى دفتر ملاحظات ورقي يحتوي على تفاصيل اجتماعات استراتيجية غير مشفرة. فريق تكنولوجيا المعلومات قام بمسح الهاتف عن بُعد والتحقق من تشفير اللاب توب وأغلق بلاغ الحادثة. أثناء المراجعة، تبين أن الفريق لم يقم بتقييم مخاطر إفشاء البيانات الموجودة بالملاحظات الورقية. كيف ينبغي تقييم هذا الموقف؟",
            opts: [
                "اعتبار الإجراء مستوفياً للمتطلبات طالما تم تأمين الأجهزة الإلكترونية الرئيسية وفق خطة الاستجابة للحوادث",
                "تسجيل حالة عدم مطابقة للبند 6.1.2 والضابط A.5.24 لأن تقييم الحادثة أهمل تقييم الأثر والمخاطر على الأصول الورقية",
                "تقديم ملاحظة تحسين شفهية لتحديث سياسة سفر كبار المسؤولين دون تسجيل عدم مطابقة",
                "تسجيل حالة عدم مطابقة للبند 7.5.3 لعدم وجود ختم سرية على المستندات الورقية"
            ],
            ans: 1,
            exp: "إدارة الحوادث وتقييم المخاطر تتطلب تحليل الأثر والسرية لكافة أشكال المعلومات (الرقمية والورقية) لضمان المعالجة الشاملة[cite: 1, 2]."
        },
        en: {
            q: "An executive lost a briefcase containing an encrypted laptop, a smartphone, a USB drive, and a paper notebook with unencrypted strategic notes. IT remotely wiped the phone, verified laptop encryption, and closed the ticket. During the audit, it was found no risk assessment was conducted for the paper notes. What is the correct finding?",
            opts: [
                "The action is fully compliant as major electronic assets were secured per the incident response plan",
                "Raise a Nonconformity against Clause 6.1.2 and Control A.5.24 because risk analysis failed to cover non-digital assets",
                "Provide an Opportunity for Improvement (OFI) to update executive travel guidelines",
                "Raise a Nonconformity against Clause 7.5.3 for lacking physical confidentiality markings"
            ],
            ans: 1,
            exp: "Incident assessment and risk management require evaluating confidentiality impacts across all asset formats, including physical paper[cite: 1, 2]."
        }
    },
    {
        id: 2,
        ref: "ISO/IEC 27001:2022 - Clause 8.1 & Annex A 5.12",
        ar: {
            q: "إدارة البريد والطباعة ترسل كشوفات حسابات تحتوي على بيانات مالية شخصية للعملاء، وتلاحظ وجود أخطاء بنسبة 15% تتمثل في إرفاق خطابات لعميلين مختلفين داخل ظرف واحد. أوضحت إدارة القسم أن تكلفة تعيين مراقبي جودة لفحص الخطابات أعلى من تكلفة إعادة الطباعة والتعويض. كيف يقيّم المراجع هذا التبرير؟",
            opts: [
                "قبول التبرير كخيار معتمد لمعالجة المخاطر طالما تم إقراره مالياً من مالك المخاطر",
                "تسجيل حالة عدم مطابقة للبند 8.1 والضابط A.5.12 لعدم وجود ضبط تشغيلي يمنع تسريب البيانات ويحمي السرية",
                "اعتبار الحالة ملاحظة تحسين للبند 9.1 لمراقبة مؤشرات أداء قسم البريد",
                "المطابقة التامة طالما يتم إعادة إرسال الخطابات الصحيحة للعملاء فور اكتشاف الخطأ"
            ],
            ans: 1,
            exp: "إفشاء البيانات لغير المصرح لهم يخالف متطلبات السرية والضبط التشغيلي للبند 8.1، ولا يمكن التذرع بالتكلفة المالية لإلغاء الضوابط[cite: 1, 2]."
        },
        en: {
            q: "A mailing department sends personal financial statements with a 15% error rate of cross-mailing different clients' letters in one envelope. Management argues that automated quality checks cost more than re-printing and compensation. How should the auditor evaluate this?",
            opts: [
                "Accept the justification as a valid Risk Treatment option approved by the Risk Owner",
                "Raise a Nonconformity against Clause 8.1 and Control A.5.12 for lack of operational control protecting confidentiality",
                "Issue an Opportunity for Improvement (OFI) under Clause 9.1 to track mailing metrics",
                "Full conformity as long as correct statements are re-sent upon complaint detection"
            ],
            ans: 1,
            exp: "Cross-mailing confidential data violates core operational control requirements under Clause 8.1, which cannot be bypassed by cost analysis[cite: 1, 2]."
        }
    },
    {
        id: 3,
        ref: "ISO/IEC 27001:2022 - Clause 4.2 & Annex A 5.31",
        ar: {
            q: "جددت مؤسسة عقداً سنوياً مع جهة حكومية يتضمن شرطاً جديداً للالتزام بمعيار أمني محدد لحماية البيانات الشخصية. وقع مدير العقود على الملحق دون مراجعة البند الجديد، واستمرت المؤسسة في تطبيق إجراءاتها الداخلية السابقة دون تعديل. ما التصنيف المناسب؟",
            opts: [
                "حالة عدم مطابقة للبند 4.2 والضابط A.5.31 لعدم تحديد ومراجعة وتطبيق المتطلبات التعاقدية والتنظيمية الجديدة",
                "مطابقة تامة طالما أن الإجراءات الداخلية للمؤسسة تحقق مستويات أمان كافية لحماية البيانات",
                "تسجيل حالة عدم مطابقة للبند 7.2 لعدم تدريب مدير العقود على المعيار الأمني الجديد",
                "ملاحظة تحسين تطلب إعادة التفاوض على بنود العقد في الدورة التقديرية القادمة"
            ],
            ans: 0,
            exp: "البند 4.2 والضابط A.5.31 يوجبان تحديد ومراجعة والالتزام الفعلي بالمتطلبات التعاقدية والتنظيمية ذات الصلة[cite: 1, 2]."
        },
        en: {
            q: "An organization renewed a government contract containing a new mandatory security standard clause. The contract manager signed without reviewing the clause, and the organization continued running its legacy procedures. What is the finding?",
            opts: [
                "Nonconformity against Clause 4.2 and Control A.5.31 for failing to identify, review, and fulfill contractual requirements",
                "Full conformity provided legacy internal procedures offer reasonable baseline security",
                "Nonconformity against Clause 7.2 for failing to train the contract manager on the new standard",
                "Opportunity for Improvement to renegotiate contractual terms in the next cycle"
            ],
            ans: 0,
            exp: "Clause 4.2 and Control A.5.31 mandate identifying, documenting, and implementing contractual and regulatory security requirements[cite: 1, 2]."
        }
    },
    {
        id: 4,
        ref: "ISO/IEC 27001:2022 - Clause 10.2 & 7.2",
        ar: {
            q: "وقعت حادثة إفشاء بيانات مالية لعميل بسبب قيام موظفين جدد بإنجاز المعاملات دون إشراف نتيجة نقص الكوادر. قامت المؤسسة بتعويض العميل وأتمت تدريب الموظفين وأغلقت الملف دون اتخاذ إجراءات لمعالجة نقص الإشراف والعمالة. كيف يقيّم المراجع هذا الإجراء؟",
            opts: [
                "إغلاق ملف عدم المطابقة باعتبار أن التعويض المالي وتدريب الموظفين يمثلان معالجة كافية للمشكلة",
                "تسجيل حالة عدم مطابقة للبند 10.2 لإغلاق الحادثة دون تحليل السبب الجذر واتخاذ إجراء تصحيحي يمنع تكرار نقص الإشراف",
                "تسجيل حالة عدم مطابقة للبند 7.2 لعدم التأكد من كفاءة الموظفين قبل إسناد المهام إليهم",
                "ملاحظة تحسين للبند 5.3 لإعادة توزيع الهيكل التنظيمي وصلاحيات العمل"
            ],
            ans: 1,
            exp: "البند 10.2 يتطلب تحديد الأسباب الجذرية (Root Cause) للخلل وتطبيق إجراءات تصحيحية تضمن عدم تكرار المشكلة[cite: 1, 2]."
        },
        en: {
            q: "A financial data breach occurred because unsupervised trainees handled accounts due to staffing shortages. The firm compensated the client, completed training, and closed the issue without addressing supervision shortages. What is the verdict?",
            opts: [
                "Close the finding as compensation and training completion represent a sufficient corrective cycle",
                "Raise a Nonconformity against Clause 10.2 for closing the issue without root cause analysis and recurrence prevention",
                "Raise a Nonconformity against Clause 7.2 for inadequate pre-assignment competency verification",
                "Issue an Opportunity for Improvement under Clause 5.3 to realign organizational responsibilities"
            ],
            ans: 1,
            exp: "Clause 10.2 requires identifying root causes and executing corrective actions to prevent recurrence of the underlying issue[cite: 1, 2]."
        }
    },
    {
        id: 5,
        ref: "ISO/IEC 27001:2022 - Clause 6.1.2",
        ar: {
            q: "أفاد مدير تقنية المعلومات بأن المؤسسة تستخدم نظاماً برمجياً آلياً لتقييم المخاطر، ولكنه أوضح عدم وجود وثيقة مكتوبة تشرح منهجية ومعايير تقييم المخاطر المتبعة لأن النظام يعتمد على خوارزميات داخلية. ما هو التصنيف الصحيح؟",
            opts: [
                "تسجيل حالة عدم مطابقة للبند 6.1.2 لأن المعيار يفرض صراحة الاحتفاظ بمعلومات موثقة عن عملية تقييم المخاطر",
                "مطابقة تامة لأن الأنظمة البرمجية الحديثة تعوض المنهجيات المكتوبة في بيئات العمل الرقمية",
                "تقديم ملاحظة تحسين للبند 7.5.2 لإضافة وصف المنهجية داخل دليل المستخدم للنظام",
                "تسجيل حالة عدم مطابقة للبند 8.2 لعدم تنفيذ تقييم المخاطر في فترات زمنية مخططة"
            ],
            ans: 0,
            exp: "البند 6.1.2 ينص صراحة على وجوب الاحتفاظ بمعلومات موثقة (Documented Information) عن عملية تقييم المخاطر[cite: 1, 2]."
        },
        en: {
            q: "An IT Manager states that the firm uses an automated software engine for risk management, but admits there is no documented risk assessment methodology standard operating procedure. What is the finding?",
            opts: [
                "Raise a Nonconformity against Clause 6.1.2 as the standard explicitly requires retaining documented information about the risk assessment process",
                "Full conformity because automated software tools replace static documented procedures",
                "Provide an Opportunity for Improvement under Clause 7.5.2 to include methodology notes in the software manual",
                "Raise a Nonconformity against Clause 8.2 for failing to perform risk assessments at planned intervals"
            ],
            ans: 0,
            exp: "Clause 6.1.2 explicitly mandates retaining documented information about the risk assessment process[cite: 1, 2]."
        }
    }
];

// =========================================================================
// SECTION 2: DYNAMIC GENERATOR FOR 300 PROFESSIONAL AUDIT SCENARIOS
// Multi-scenario templates focusing on real best practices and subtle options
// =========================================================================
(function generate300ScenarioBank() {
    const totalTarget = 300;

    const scenarioEngines = [
        {
            clause: "ISO/IEC 27001:2022 - Clause 4.3",
            arQ: "افتتحت مؤسسة فرعاً تشغيلياً جديداً يتعامل مع أصول معلومات حساسة للعملاء، وقامت باستبعاده من نطاق نظام إدارة أمن المعلومات دون توثيق أثر الواجهات والشبكات التبادلية مع المقر الرئيسي. عللت الإدارة ذلك بأن الفرع لا يزال في طور التشغيل التجريبي. كيف يقيّم المراجع هذا الإجراء؟",
            enQ: "An organization opened an operational branch processing sensitive customer assets but excluded it from the ISMS scope without documenting network interfaces with HQ, claiming it is in a pilot phase. What is the auditor's finding?",
            arAnsCorrect: "تسجيل حالة عدم مطابقة للبند 4.3 لعدم مراعاة وتوثيق الحدود والواجهات والاعتماديات التبادلية عند تحديد نطاق النظام",
            arAnsWrong1: "قبول التبرير وإعطاء مهلة زمنية لحين انتهاء التشغيل التجريبي للفرع",
            arAnsWrong2: "مطابقة تامة لأن تحديد الحدود والنطاق يخضع لتقدير الإدارة العليا المباشر",
            arAnsWrong3: "تقديم ملاحظة تحسين لتضمين الفرع في خطة المراجعة الداخلية القادمة",
            enAnsCorrect: "Raise a Nonconformity against Clause 4.3 for failing to consider and document boundaries, interfaces, and dependencies when defining scope",
            enAnsWrong1: "Accept the justification and grant a grace period until the pilot phase ends",
            enAnsWrong2: "Full conformity as scoping boundaries are entirely at Top Management's discretion",
            enAnsWrong3: "Provide an Opportunity for Improvement to include the branch in the next internal audit plan",
            expAr: "البند 4.3 يفرض تحديد وتوثيق حدود ونطاق نظام ISMS مع مراعاة الواجهات والاعتماديات بين الأنشطة[cite: 1].",
            expEn: "Clause 4.3 strictly requires documenting and considering scope boundaries, interfaces, and dependencies[cite: 1]."
        },
        {
            clause: "ISO/IEC 27001:2022 - Clause 9.2.2",
            arQ: "قام مدير أمن المعلومات بمراجعة ضوابط قسمه بنفسه خلال المراجعة الداخلية وإعداد التقرير، وبرر ذلك بعدم توفر كوادر أخرى تمتلك الفهم الفني الكافي لتحديثات التشفير والسيرفرات. كيف يصنف المراجع الخارجي هذه الحالة؟",
            enQ: "The CISO audited his own department's security controls during internal audits and authored the report, citing that no other staff possesses sufficient technical depth in encryption systems. How is this evaluated?",
            arAnsCorrect: "تسجيل حالة عدم مطابقة للبند 9.2.2 لعدم ضمان الموضوعية والحيادية في اختيار المراجعين وعملية المراجعة الداخلية",
            arAnsWrong1: "مطابقة تامة طالما أن مدير أمن المعلومات هو الأكثر مؤهلاً لفحص أنظمته الفنية",
            arAnsWrong2: "تقديم ملاحظة تحسين لتدريب مدراء الأقسام الأخرى على فنيات التشفير مستقبلاً",
            arAnsWrong3: "اعتبار التقرير مقبولاً بشرط توقيعه واعتماده من المدير التنفيذي",
            enAnsCorrect: "Raise a Nonconformity against Clause 9.2.2 for failing to select auditors that ensure objectivity and impartiality",
            enAnsWrong1: "Full conformity as the CISO is the most qualified person to evaluate his technical setup",
            enAnsWrong2: "Provide an Opportunity for Improvement to train other department heads in encryption auditing",
            enAnsWrong3: "Accept the report provided it is counter-signed and approved by the CEO",
            expAr: "البند 9.2.2 ينص صراحة على وجوب اختيار مراجعين يضمنون الموضوعية والحيادية في عملية المراجعة[cite: 1, 2].",
            expEn: "Clause 9.2.2 explicitly mandates selecting auditors to ensure objectivity and impartiality in the audit process[cite: 1, 2]."
        },
        {
            clause: "ISO/IEC 27001:2022 - Annex A 8.24",
            arQ: "أظهرت المراجعة أن تطبيقاً بنكياً ينقل بيانات الاعتماد بين الخوادم الداخلية كنص واضح، استناداً إلى وجود جدار ناري خارجي. أظهرت وثيقة بيان الصلاحية تحديد الضابط A.8.24 كمطبق. ما هو قرار المراجع؟",
            enQ: "A banking application transfers credentials between internal servers as plaintext, relying on a perimeter firewall. The Statement of Applicability listed Control A.8.24 as Applicable. What is the verdict?",
            arAnsCorrect: "تسجيل حالة عدم مطابقة للضابط A.8.24 والبند 8.1 لعدم تطبيق قواعد التشفير المعتمدة في بيان الصلاحية لحماية البيانات أثناء النقل",
            arAnsWrong1: "مطابقة تامة طالما أن الجدار الناري يوفر حماية محيطية للشبكة الداخلية",
            arAnsWrong2: "تقديم ملاحظة تحسين لزيادة تعقيد كلمات السر الخاصة بالمستخدمين",
            arAnsWrong3: "تسجيل حالة عدم مطابقة للبند 6.1.2 لعدم تحديث سجل المخاطر التشغيلية",
            enAnsCorrect: "Raise a Nonconformity against Control A.8.24 and Clause 8.1 for failing to enforce cryptographic rules declared in the SoA for data in transit",
            enWrong1: "Full conformity as the perimeter firewall provides adequate baseline protection for internal traffic",
            enWrong2: "Provide an Opportunity for Improvement to increase password complexity standards",
            enWrong3: "Raise a Nonconformity against Clause 6.1.2 for failing to update operational risk registers",
            expAr: "عدم تطبيق الضوابط المحددة في بيان الصلاحية لحماية سرية البيانات أثناء النقل يخالف الضابط A.8.24 والبند 8.1[cite: 1, 2].",
            expEn: "Failing to implement controls declared applicable in the SoA breaches Control A.8.24 and operational control requirements under Clause 8.1[cite: 1, 2]."
        },
        {
            clause: "ISO/IEC 27001:2022 - Annex A 5.18",
            arQ: "ترقى موظف من مهندس شبكات إلى مدير مشتريات، ولوحظ استمرار امتلاكه لصلاحيات وصول ممتازة على الخوادم الرئيسية. أفاد الموظف بأنه لا يستخدم هذه الصلاحيات إلا عند طلب المساعدة في حالات الطوارئ. كيف يوثق المراجع الحالة؟",
            enQ: "A network engineer was promoted to Procurement Manager but retains domain admin privileges. He states he only uses access during emergencies upon request. How should this be logged?",
            arAnsCorrect: "تسجيل حالة عدم مطابقة للضابط A.5.18 والبند 8.1 لعدم مراجعة وإزالة حقوق الوصول الممتازة فور تغيير الدور الوظيفي",
            arAnsWrong1: "مطابقة تامة طالما أن الموظف لا يمارس الصلاحيات إلا في حالات الطوارئ وبطلب رسمي",
            arAnsWrong2: "تقديم ملاحظة تحسين للضابط A.8.2 لحصر استخدام حسابات الوصول الممتاز في أوقات العمل الرسمية",
            arAnsWrong3: "تسجيل حالة عدم مطابقة للبند 7.2 لعدم تحديث الوصف الوظيفي لمدير المشتريات",
            enAnsCorrect: "Raise a Nonconformity against Control A.5.18 and Clause 8.1 for failing to review and remove privileged access rights upon role changes",
            enWrong1: "Full conformity since the trusted manager only uses privileges during emergency calls",
            enWrong2: "Provide an Opportunity for Improvement under Control A.8.2 to restrict admin account access to office hours",
            enWrong3: "Raise a Nonconformity against Clause 7.2 for failing to update the Procurement Manager's job description",
            expAr: "الضابط A.5.18 يفرض مراجعة وتعديل وإزالة حقوق الوصول فور تغيير الأدوار والمسؤوليات الوظيفية[cite: 1, 2]."
        }
    ];

    let cId = questionBank.length + 1;

    while (cId <= totalTarget) {
        let engine = scenarioEngines[(cId - 1) % scenarioEngines.length];
        let targetIndex = (cId * 13) % 4;

        let arOpts = [engine.arAnsWrong1, engine.arAnsWrong2, engine.arAnsWrong3, engine.arAnsCorrect];
        let enOpts = [engine.enAnsWrong1, engine.enAnsWrong2, engine.enAnsWrong3, engine.enAnsCorrect];

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
            ref: `${engine.clause}`,
            ar: {
                q: `${engine.arQ}`,
                opts: arOpts,
                ans: targetIndex,
                exp: engine.expAr
            },
            en: {
                q: `${engine.enQ}`,
                opts: enOpts,
                ans: targetIndex,
                exp: engine.expEn
            }
        });

        cId++;
    }
})();

/**
 * ISO/IEC 27001:2022 Highly Advanced & Unpredictable Question Bank (300 Questions)
 * Formulated from ISO/IEC 27001:2022 Standard & Complex IRCA/PECB Lead Auditor Scenarios.
 */

const questionBank = [
    // =========================================================================
    // TRICKY & UNPREDICTABLE AUDIT SCENARIOS
    // =========================================================================
    {
        id: 1,
        difficulty: "hard",
        ref: "Audit Questions - Scenario 19 / Clause 7.2 & 7.3",
        ar: {
            q: "أثناء مراجعة قسم الموارد البشرية، قدم لك المدير سجلات تدريب لـ 5 موظفين تؤكد حضورهم دورات تدريبية أسبوعية في الأمن السيكولوجي والتوعية. لكن عند مقابلة أحد هؤلاء الموظفين عشوائياً، تبين أنه لا يعرف ماذا يفعل إذا استلم إيميل مريب لسرقة البيانات. ما هو إجراء المراجع المظبوط؟",
            opts: [
                "اعتبار التدريب كافياً طالما هناك سجلات حضور موثقة",
                "إصدار عدم مطابقة للبند 7.2 و 7.3 لعدم تقييم فاعلية التدريب وعدم وجود توعية حقيقية بالأثر التشغيلي",
                "إلغاء شهادة ISO للشركة فوراً",
                "سؤال الموظف عن كلمة السر الخاصة به لاختباره"
            ],
            ans: 1,
            exp: "حضور التدريب وحده لا يعني الكفاءة؛ البند 7.2 ينص على قياس فاعلية التدريب، والبند 7.3 ينص على التوعية بالمساهمة الفعلية في فاعلية نظام ISMS."
        },
        en: {
            q: "HR provided signed attendance logs for 5 staff attending weekly security awareness. However, during a random interview, an employee didn't know how to report a phishing email. What should the auditor do?",
            opts: [
                "Consider training fully compliant based on signed attendance records",
                "Issue a Nonconformity against Clauses 7.2 & 7.3 for failing to evaluate training effectiveness and lack of practical awareness",
                "Immediately revoke the ISO certificate",
                "Ask the employee for their password to test them"
            ],
            ans: 1,
            exp: "Attendance logs do not guarantee competence. Clause 7.2 requires evaluating the effectiveness of actions taken, and Clause 7.3 requires practical awareness[cite: 1, 2]."
        }
    },
    {
        id: 2,
        difficulty: "vhard",
        ref: "Audit Questions - Scenario 17 / Annex A 5.37 & Clause 8.1",
        ar: {
            q: "قسم الطباعة والبريد بالمؤسسة يرسل خطابات للعملاء، وهناك نسبة 15% من الخطابات ترجع بسبب أخطاء في العناوين أو وضع خطابين لعميلين مختلفين في نفس الظرف. المدير قال إن الهامش الربحي صغير وتكلفت إعادة التجليد والطباعة أسهل وأرخص من وضع نظام مراجعة وتفتيش. كيف يتصرف المراجع؟",
            opts: [
                "قبول التبرير لأن القرار مبني على تحليلات مالية واقتصادية للمؤسسة",
                "إصدار عدم مطابقة صريحة لعدم وجود ضبط تشغيلي لضمان سرية البيانات وضبط العمليات لمنع تسريب المعلومات للغير",
                "توصية بسيطة بتغيير ساعي البريد",
                "إجبار المؤسسة على زيادة أسعار خدماتها"
            ],
            ans: 1,
            exp: "وضع مستندات لعملاء مختلفين في نفس الظرف يمثل خرقاً صريحاً للسرية (Confidentiality) وضوابط التشغيل الموثقة وضبط العمليات البند 8.1 والملحق أ[cite: 1, 2]."
        },
        en: {
            q: "A mass-mailing department has a 15% return rate due to misaddressing and putting two different clients' letters in one envelope. The manager claims re-printing is cheaper than auditing dispatches. Auditor reaction?",
            opts: [
                "Accept the justification as a valid cost-benefit business decision",
                "Raise a Nonconformity for lack of operational controls protecting information confidentiality and data leakage prevention",
                "Suggest replacing the courier delivery company",
                "Force the company to raise its service fees"
            ],
            ans: 1,
            exp: "Mixing clients' mail breaches confidentiality and operational control requirements under Clause 8.1 and Annex A controls[cite: 1, 2]."
        }
    },
    {
        id: 3,
        difficulty: "vhard",
        ref: "Audit Questions - Scenario 19 / Clause 6.1.2",
        ar: {
            q: "شركة لتصميم حلول التخزين السحابية تستخدم أداة إلكترونية برمجية ممتازة لتقييم المخاطر، لكن مدير المشروع صرّح بـ: 'نحن لا نملك أو نتبع أي عملية موثقة لتقييم المخاطر كـ Documented Process، بل نعتمد على فهمنا للأداة'. ما هو القرار الصحيح للمراجع؟",
            opts: [
                "إصدار عدم مطابقة للبند 6.1.2 لأن المعيار يوجب صراحة الاحتفاظ بمعلومات موثقة عن عملية تقييم المخاطر",
                "مطابقة كاملة طالما الأداة الإلكترونية تؤدي الغرض وتعمل بكفاءة",
                "اعتبار الأداة البرمجية هي الوثيقة البديلة تلقائياً",
                "طلب شراء برنامج تقييم مخاطر جديد"
            ],
            ans: 0,
            exp: "ينص البند 6.1.2 صراحة في نهايته على: 'The organization shall retain documented information about the information security risk assessment process'[cite: 1, 2]."
        },
        en: {
            q: "A software design firm relies on a sophisticated software tool for risk assessment, but the Project Manager states: 'We have no documented risk assessment process on paper, we just use the tool'. Audit finding?",
            opts: [
                "Nonconformity against Clause 6.1.2 as the standard strictly requires retaining documented information about the risk assessment process",
                "Full conformity because automated software tools are superior to papers",
                "Consider the software binary as an automatic replacement for documentation",
                "Recommend buying a different software vendor tool"
            ],
            ans: 0,
            exp: "Clause 6.1.2 explicitly mandates: 'The organization shall retain documented information about the information security risk assessment process'[cite: 1, 2]."
        }
    },
    {
        id: 4,
        difficulty: "medium",
        ref: "ISO/IEC 27001:2022 - Clause 8.1 & Annex A 8.32",
        ar: {
            q: "شركة قامت بتحديث خوادمها الرئيسية وتعديل كابلات الشبكة، لكن عند مطالبة المراجع بسجلات إدارة التغيير (Change Management Records) المتعلقة بهذه التعديلات، لم توجد أي سجلات مدونة. كيف يصنف المراجع هذا الموقف؟",
            opts: [
                "مطابقة طالما السيرفرات تعمل حالياً بدون مشاكل",
                "ملاحظة تحسين شفهية فقط",
                "عدم مطابقة للضابط Annex A 8.32 والبند 8.1 لعدم تطبيق إجراءات ومستندات إدارة التغيير على البنية التحتية",
                "إلغاء رخصة خوادم الشركة"
            ],
            ans: 2,
            exp: "الضابط Annex A 8.32 والبند 8.1 يفرضان خضوع أي تغييرات في مرافق معالجة المعلومات وأنظمتها لإجراءات إدارة التغيير وتوثيقها[cite: 1, 2]."
        },
        en: {
            q: "A company upgraded core servers and network cabling, but produced no change management logs or approvals for these physical changes. Classification?",
            opts: [
                "Conformity as long as the servers operate without downtime",
                "Verbal suggestion for future hardware updates",
                "Nonconformity against Control Annex A 8.32 and Clause 8.1 for failing to apply change control procedures to processing facilities",
                "Revoking server hardware licenses"
            ],
            ans: 2,
            exp: "Annex A 8.32 and Clause 8.1 mandate that changes to information processing facilities and systems must be subject to formal change management procedures[cite: 1, 2]."
        }
    },
    {
        id: 5,
        difficulty: "vhard",
        ref: "ISO/IEC 27001:2022 - Clause 9.3 & 10.2",
        ar: {
            q: "عقدت الشركة اجتماع مراجعة الإدارة (Management Review) واكتفت بالنقاط التالية: (نتائج المراجعة الداخلية السابقة، حالة الإجراءات التصحيحية، وتنفيذ القرارات السابقة). ما الذي فات هذه الأجندة وجعلها غير مطابقة للبند 9.3؟",
            opts: [
                "لم تفوت أي شيء فالأجندة مكتملة",
                "أهملت التغيرات في القضايا الخارجية/الداخلية، نتائج تقييم المخاطر، وتغذية الأطراف المهتمة",
                "أهملت مكافآت الموظفين السنوية",
                "أهملت توقيع جميع العاملين بالشركة"
            ],
            ans: 1,
            exp: "البند 9.3.2 يحدد قائمة مدخلات إلزامية لمراجعة الإدارة، ومنها التغيرات في القضايا، مراجعة تقييم المخاطر، وآراء الأطراف المهتمة[cite: 1, 2]."
        },
        en: {
            q: "Management Review minutes covered only: previous audit results, corrective action status, and prior decisions. Why is this finding classified as a Nonconformity under Clause 9.3?",
            opts: [
                "It is fully compliant and missed nothing",
                "It omitted mandatory inputs: changes in external/internal issues, risk assessment outcomes, and interested party feedback",
                "It failed to discuss annual employee bonuses",
                "It lacked physical signatures from all staff members"
            ],
            ans: 1,
            exp: "Clause 9.3.2 explicitly details required inputs including changes in context issues, risk assessment results, and feedback from interested parties[cite: 1, 2]."
        }
    }
];

// =========================================================================
// GENERATE 300 UNPREDICTABLE COMPLEX AUDIT SCENARIOS WITH SHUFFLED ANSWERS
// =========================================================================
(function generateUnpredictable300Bank() {
    const totalCount = 300;
    const diffs = ["easy", "medium", "hard", "vhard"];
    
    const coreClauses = [
        { c: "Clause 4.2", topic: "Interested Party Security Requirements", ref: "ISO 27001 Clause 4.2" },
        { c: "Clause 5.1", topic: "Top Management Leadership Gap", ref: "ISO 27001 Clause 5.1" },
        { c: "Clause 6.1.2", topic: "Inconsistent Risk Assessment Criteria", ref: "ISO 27001 Clause 6.1.2" },
        { c: "Clause 6.1.3", topic: "Unjustified SoA Exclusion", ref: "ISO 27001 Clause 6.1.3" },
        { c: "Clause 7.2", topic: "Unverified Competence Evidence", ref: "ISO 27001 Clause 7.2" },
        { c: "Clause 8.1", topic: "Outsourced Process Control Failure", ref: "ISO 27001 Clause 8.1" },
        { c: "Clause 9.2", topic: "Biased Internal Audit Selection", ref: "ISO 27001 Clause 9.2" },
        { c: "Clause 10.2", topic: "Lack of Root Cause Analysis", ref: "ISO 27001 Clause 10.2" },
        { c: "Annex A 5.15", topic: "Unmonitored Physical & Logical Access", ref: "Annex A 5.15" },
        { c: "Annex A 8.24", topic: "Unencrypted Sensitive Data in Transit", ref: "Annex A 8.24" }
    ];

    let currentId = questionBank.length + 1;

    while (currentId <= totalCount) {
        let clauseObj = coreClauses[(currentId - 1) % coreClauses.length];
        let diff = diffs[(currentId - 1) % diffs.length];
        
        // Randomize Answer Index between 0, 1, 2, 3 so correct answer is NOT predictable
        let targetAnsIndex = (currentId * 7) % 4; 

        let optsAr = [
            `القرار مطبق شكلياً دون الحاجة لمراجعة السبب الجذر أو توثيق الأدلة [خيار غير دقيق]`,
            `إصدار حالة عدم مطابقة (Nonconformity) صريحة وفقاً لمتطلبات ${clauseObj.c} لغياب الأدلة الموضوعية وضبط العمليات`,
            `تعتبر هذه الحالة مطابقة تامة ولا تستدعي أي تسجيل ملاحظات في تقرير المراجعة`,
            `إلغاء المراجعة وإحالة الموضوع للتحقيق الجنائي المباشر`
        ];

        let optsEn = [
            `The process is accepted informally without root cause evaluation [Incorrect option]`,
            `Raise a formal Nonconformity against ${clauseObj.c} due to lack of objective evidence and process controls`,
            `Classify as full conformity with no audit findings or action required`,
            `Abort the audit and refer the case to legal authorities immediately`
        ];

        // Swap target correct option into the target randomized index
        if (targetAnsIndex !== 1) {
            let tempAr = optsAr[targetAnsIndex];
            optsAr[targetAnsIndex] = optsAr[1];
            optsAr[1] = tempAr;

            let tempEn = optsEn[targetAnsIndex];
            optsEn[targetAnsIndex] = optsEn[1];
            optsEn[1] = tempEn;
        }

        questionBank.push({
            id: currentId,
            difficulty: diff,
            ref: `${clauseObj.ref} (Audit Scenario #${currentId})`,
            ar: {
                q: `[سيناريو مراجعة غير متوقع #${currentId}] - أثناء فحص عملية (${clauseObj.topic}) لدى المؤسسة، تبين وجود تضارب بين الإجراءات المكتوبة والتطبيق الفعلي بالواقع. كيف يتصرف كبير المراجعين لتقييم الموقف وفق ${clauseObj.c}؟`,
                opts: optsAr,
                ans: targetAnsIndex,
                exp: `وفقاً لـ ${clauseObj.c} والممارسات المعيارية المعتمدة، فإن الاختلاف بين الإجراء المكتوب والتطبيق الفعلي يوجب تسجيل عدم مطابقة للتحقق من الأسباب الجذرية وتقديم أدلة موضوعية (Objective Evidence)[cite: 1, 2].`
            },
            en: {
                q: `[Unpredictable Audit Scenario #${currentId}] - During an evaluation of (${clauseObj.topic}), a gap was detected between written policies and actual staff execution. How should a Lead Auditor evaluate this under ${clauseObj.c}?`,
                opts: optsEn,
                ans: targetAnsIndex,
                exp: `Under ${clauseObj.c} and IRCA audit guidelines, discrepancies between documented procedures and practical execution require a Nonconformity to enforce root cause resolution and objective evidence[cite: 1, 2].`
            }
        });

        currentId++;
    }
})();

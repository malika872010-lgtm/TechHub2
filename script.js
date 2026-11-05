document.addEventListener("DOMContentLoaded", function () {

    let currentLanguage = localStorage.getItem("techhub-language") || "en";

    let sections = document.querySelectorAll(".page-section");

    let translations = {
        "Home": "الرئيسية",
        "About": "من نحن",
        "Sign In": "تسجيل الدخول",
        "Create Account": "إنشاء حساب",
        "Welcome to TechHub": "مرحبًا بك في TechHub",
        "Your smart platform for learning and technical support.": "منصتك الذكية للتعلم والدعم التقني.",
        "How can we help you today?": "كيف يمكننا مساعدتك اليوم؟",
        "Smart Technical Support": "الدعم التقني الذكي",
        "Smart Educational Portal": "البوابة التعليمية الذكية",
        "Diagnose device problems, discover possible causes, and find suitable solutions with AI assistance.": "شخّص مشكلات أجهزتك، واكتشف أسبابها المحتملة، وتعرّف على الحلول المناسبة بمساعدة الذكاء الاصطناعي.",
        "Organize your studies, manage educational tasks, and track your academic progress.": "نظّم دراستك، وأدر مهامك التعليمية، وتابع مستوى تقدمك الدراسي.",
        "AI Powered": "مدعوم بالذكاء الاصطناعي",
        "Explore TechFix": "استكشف الدعم التقني",
        "Explore Student Hub": "استكشف البوابة التعليمية",
        "About TechHub": "من نحن",
        "Our Vision": "رؤيتنا",
        "Our Mission": "رسالتنا",
        "Welcome Back": "مرحبًا بعودتك",
        "Sign in to continue using TechHub.": "سجّل الدخول لمتابعة استخدام TechHub.",
        "Email Address": "البريد الإلكتروني",
        "Password": "كلمة المرور",
        "Remember Me": "تذكرني",
        "Forgot Password?": "هل نسيت كلمة المرور؟",
        "Don't have an account?": "ليس لديك حساب؟",
        "Already have an account?": "لديك حساب بالفعل؟",
        "Confirm Password": "تأكيد كلمة المرور",
        "Full Name": "الاسم الكامل",
        "Create Your Account": "أنشئ حسابك",
        "Join TechHub and explore our services.": "انضم إلى TechHub واستكشف خدماتنا.",
        "Account Type": "نوع الحساب",
        "Student": "طالب",
        "Other": "أخرى",
        "I agree to the Terms and Conditions.": "أوافق على الشروط والأحكام.",
        "Reset Password": "إعادة تعيين كلمة المرور",
        "Enter your email address to request a password reset.": "أدخل بريدك الإلكتروني لطلب إعادة تعيين كلمة المرور.",
        "Send Reset Request": "إرسال طلب إعادة التعيين",
        "Back to Sign In": "العودة إلى تسجيل الدخول",
        "My Profile": "ملفي الشخصي",
        "Personal Information": "المعلومات الشخصية",
        "Edit Profile": "تعديل الملف الشخصي",
        "Account Settings": "إعدادات الحساب",
        "General Settings": "الإعدادات العامة",
        "Preferred Language": "اللغة المفضلة",
        "Account Security": "أمان الحساب",
        "Change Password": "تغيير كلمة المرور",
        "Save Changes": "حفظ التغييرات",
        "Intelligent Technical Support System": "نظام الدعم التقني الذكي",
        "Find and diagnose technical problems with AI assistance.": "اكتشف المشكلات التقنية وشخّصها بمساعدة الذكاء الاصطناعي.",
        "Device Diagnosis": "تشخيص الأجهزة",
        "Start diagnosing your device problems.": "ابدأ تشخيص مشكلات جهازك.",
        "Start Diagnosis": "بدء التشخيص",
        "AI Technical Assistant": "المساعد التقني الذكي",
        "Get help from our intelligent assistant.": "احصل على المساعدة من مساعدنا الذكي.",
        "Open AI Assistant": "فتح المساعد الذكي",
        "Support History": "سجل الدعم الفني",
        "Review your previous technical issues.": "راجع مشكلاتك التقنية السابقة.",
        "View History": "عرض السجل",
        "Knowledge Base": "قاعدة المعرفة",
        "Explore technical guides and common solutions.": "استكشف الأدلة التقنية والحلول الشائعة.",
        "Explore Guides": "استكشاف الأدلة",
        "Select Your Device": "اختر جهازك",
        "Choose the type of device you need help with.": "اختر نوع الجهاز الذي تحتاج إلى المساعدة بشأنه.",
        "Computer": "كمبيوتر",
        "Laptop": "حاسوب محمول",
        "Tablet": "تابلت",
        "Smartphone": "هاتف ذكي",
        "Continue": "متابعة",
        "Select Operating System": "اختر نظام التشغيل",
        "Choose the operating system installed on your device.": "اختر نظام التشغيل المثبت على جهازك.",
        "Device Diagnosis": "تشخيص الجهاز",
        "Problem Category": "نوع المشكلة",
        "Performance Issues": "مشكلات الأداء",
        "Internet Connection": "الاتصال بالإنترنت",
        "Software Problems": "مشكلات البرامج",
        "Battery Problems": "مشكلات البطارية",
        "Display Problems": "مشكلات الشاشة",
        "Problem Description": "وصف المشكلة",
        "TechFix AI Assistant": "مساعد TechFix الذكي",
        "Your intelligent technical support assistant.": "مساعدك الذكي للدعم التقني.",
        "Diagnosis Results": "نتائج التشخيص",
        "Possible Causes": "الأسباب المحتملة",
        "Confidence Level": "مستوى الثقة",
        "Suggested Solutions": "الحلول المقترحة",
        "Create Support Ticket": "إنشاء طلب دعم",
        "Issue Title": "عنوان المشكلة",
        "Issue Details": "تفاصيل المشكلة",
        "Priority": "الأولوية",
        "Low": "منخفضة",
        "Medium": "متوسطة",
        "High": "مرتفعة",
        "Submit Ticket": "إرسال الطلب",
        "Previous Support Requests": "طلبات الدعم السابقة",
        "Technical Knowledge Base": "قاعدة المعرفة التقنية",
        "Internet Problems": "مشكلات الإنترنت",
        "Device Performance": "أداء الجهاز",
        "Software Issues": "مشكلات البرامج",
        "Student Hub": "البوابة التعليمية",
        "Your intelligent educational companion.": "رفيقك التعليمي الذكي.",
        "Study Schedule": "جدول المذاكرة",
        "Organize your study timetable.": "نظّم جدول مذاكرتك.",
        "Open Schedule": "فتح الجدول",
        "Tasks": "المهام",
        "Manage homework and assignments.": "أدر واجباتك وتكليفاتك.",
        "Manage Tasks": "إدارة المهام",
        "Study Planner": "مخطط الدراسة",
        "Create an organized study plan.": "أنشئ خطة دراسية منظمة.",
        "Open Planner": "فتح المخطط",
        "Academic Progress": "التقدم الدراسي",
        "Track your educational progress.": "تابع تقدمك التعليمي.",
        "View Progress": "عرض التقدم",
        "Learning Library": "المكتبة التعليمية",
        "Access educational resources.": "استكشف المصادر التعليمية.",
        "Open Library": "فتح المكتبة",
        "AI Learning Assistant": "مساعد التعلم الذكي",
        "Learn with personalized AI explanations.": "تعلّم من خلال شروحات ذكية تناسب احتياجاتك.",
        "Ask AI": "اسأل الذكاء الاصطناعي",
        "Student Dashboard": "لوحة الطالب",
        "Welcome to your learning dashboard.": "مرحبًا بك في لوحة التعلم الخاصة بك.",
        "My Tasks": "مهامي",
        "Completed Tasks": "المهام المكتملة",
        "Study Progress": "التقدم الدراسي",
        "Subject": "المادة الدراسية",
        "Date": "التاريخ",
        "Time": "الوقت",
        "Add to Schedule": "إضافة إلى الجدول",
        "Task Management": "إدارة المهام",
        "Task Title": "عنوان المهمة",
        "Deadline": "الموعد النهائي",
        "Add Task": "إضافة مهمة",
        "Smart Study Planner": "مخطط الدراسة الذكي",
        "Study Goal": "الهدف الدراسي",
        "Create Study Plan": "إنشاء خطة دراسية",
        "Overall Progress": "التقدم الإجمالي",
        "Subject Performance": "مستوى المواد الدراسية",
        "Completed Activities": "الأنشطة المكتملة",
        "Programming": "البرمجة",
        "Mathematics": "الرياضيات",
        "Science": "العلوم",
        "Languages": "اللغات",
        "Student AI Assistant": "مساعد الطالب الذكي",
        "Your personal AI learning assistant.": "مساعدك الشخصي للتعلم بالذكاء الاصطناعي.",
        "Learning Analysis": "تحليل التعلم",
        "Strength Areas": "نقاط القوة",
        "Areas for Improvement": "الجوانب التي تحتاج إلى تحسين",
        "AI Recommendations": "توصيات الذكاء الاصطناعي",
        "Academic Profile": "الملف الأكاديمي",
        "Grade Level": "الصف الدراسي",
        "Academic Track": "المسار الدراسي",
        "Academic Goals": "الأهداف الدراسية",
        "Save Academic Profile": "حفظ الملف الأكاديمي",
        "Admin Dashboard": "لوحة الإدارة",
        "Platform Management and Administration.": "إدارة المنصة والتحكم فيها.",
        "Total Users": "إجمالي المستخدمين",
        "Support Requests": "طلبات الدعم",
        "Platform Activities": "أنشطة المنصة",
        "User Management": "إدارة المستخدمين",
        "Content Management": "إدارة المحتوى",
        "Platform Statistics": "إحصائيات المنصة",
        "Registered Users": "المستخدمون المسجلون",
        "Technical Diagnoses": "عمليات التشخيص التقني",
        "AI Conversations": "محادثات الذكاء الاصطناعي",
        "Educational Activities": "الأنشطة التعليمية",
        "Add Content": "إضافة محتوى",
        "Back to Home": "العودة للرئيسية",
        "All Rights Reserved.": "جميع الحقوق محفوظة."
    };}

    function translatePage(language) {

        let textNodes = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

        let nodes = [];

        while (textNodes.nextNode()) {
            nodes.push(textNodes.currentNode);
        }

        nodes.forEach(function (node) {

            let original = node.textContent.trim();

            if (translations[original]) {
                node.textContent = language === "ar"
                    ? translations[original]
                    : original;
            }

        });

        document.querySelectorAll("[placeholder]").forEach(function (element) {

            let original = element.getAttribute("data-original-placeholder");

            if (!original) {
                original = element.placeholder;
                element.setAttribute("data-original-placeholder", original);
            }

            element.placeholder = language === "ar"
                ? (translations[original] || original)
                : original;

        });

        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

        localStorage.setItem("techhub-language", language);

        currentLanguage = language;

        let languageSelect = document.getElementById("language");
        let settingsSelect = document.getElementById("settings-language");

        if (languageSelect) {
            languageSelect.value = language;
        }

        if (settingsSelect) {
            settingsSelect.value = language;
        }
    }

    let languageSelect = document.getElementById("language");
    let settingsLanguage = document.getElementById("settings-language");

    if (languageSelect) {
        languageSelect.addEventListener("change", function () {
            translatePage(this.value);
        });
    }

    if (settingsLanguage) {
        settingsLanguage.addEventListener("change", function () {
            translatePage(this.value);
        });
    }

    translatePage(currentLanguage);

    /* PAGE NAVIGATION */

    function showPage(pageId) {

        let target = document.getElementById(pageId);

        if (!target || !target.classList.contains("page-section")) {
            return;
        }

        sections.forEach(function (section) {
            section.classList.remove("active");
            section.setAttribute("aria-hidden", "true");
        });

        target.classList.add("active");
        target.setAttribute("aria-hidden", "false");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    document.addEventListener("click", function (event) {

        let link = event.target.closest('a[href^="#"]');

        if (!link) {
            return;
        }

        let pageId = link.getAttribute("href").substring(1);

        if (!pageId) {
            return;
        }

        let target = document.getElementById(pageId);

        if (target && target.classList.contains("page-section")) {

            event.preventDefault();

            history.pushState(null, "", "#" + pageId);

            showPage(pageId);

        }

    });

    window.addEventListener("popstate", function () {

        let pageId = location.hash.substring(1) || "home";

        showPage(pageId);

    });

    let initialPage = location.hash.substring(1) || "home";

    showPage(initialPage);

    /* LOCAL STORAGE HELPERS */

    function getData(key) {

        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch (error) {
            return [];
        }

    }

    function saveData(key, data) {

        localStorage.setItem(key, JSON.stringify(data));

    }

    function createElement(tag, text, className) {

        let element = document.createElement(tag);

        element.textContent = text;

        if (className) {
            element.className = className;
        }

        return element;

    }

    function showMessage(form, message) {

        let oldMessage = form.querySelector(".form-status");

        if (oldMessage) {
            oldMessage.remove();
        }

        let status = createElement("p", message, "form-status");

        status.style.color = "#39dfbd";
        status.style.marginTop = "12px";
        status.setAttribute("role", "status");

        form.appendChild(status);

    }

    /* LOGIN FORM */

    let loginForm = document.getElementById("login-form");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            showMessage(
                loginForm,
                currentLanguage === "ar"
                    ? "واجهة تسجيل الدخول جاهزة. يلزم ربط نظام الحسابات بالـBackend."
                    : "The login interface is ready. Connect the account system to the backend to enable sign-in."
            );

        });

    }

    /* REGISTER FORM */

    let registerForm = document.getElementById("register-form");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let password = document.getElementById("register-password").value;

            let confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {

                showMessage(
                    registerForm,
                    currentLanguage === "ar"
                        ? "كلمتا المرور غير متطابقتين."
                        : "Passwords do not match."
                );

                return;
            }

            showMessage(
                registerForm,
                currentLanguage === "ar"
                    ? "النموذج جاهز. يلزم ربط إنشاء الحساب بالـBackend."
                    : "The form is ready. Connect account registration to the backend."
            );

        });

    }

    /* RESET PASSWORD */

    let resetForm = document.getElementById("reset-form");

    if (resetForm) {

        resetForm.addEventListener("submit", function (event) {

            event.preventDefault();

            showMessage(
                resetForm,
                currentLanguage === "ar"
                    ? "يلزم ربط خدمة إعادة تعيين كلمة المرور بالـBackend."
                    : "Connect the password reset service to the backend."
            );

        });

    }

    /* STUDY TASKS */

    let taskForm = document.getElementById("task-form");

    let taskList = document.getElementById("task-list");

    function renderTasks() {

        if (!taskList) return;

        taskList.innerHTML = "";

        let tasks = getData("techhub-tasks");

        let heading = createElement(
            "h2",
            currentLanguage === "ar" ? "مهامي" : "My Tasks"
        );

        taskList.appendChild(heading);

        if (tasks.length === 0) {

            taskList.appendChild(
                createElement(
                    "p",
                    currentLanguage === "ar"
                        ? "لا توجد مهام حتى الآن."
                        : "No tasks available yet."
                )
            );

        }

        tasks.forEach(function (task, index) {

            let item = document.createElement("div");

            item.className = "task-item";

            item.style.padding = "15px";
            item.style.margin = "12px 0";
            item.style.background = "#182541";
            item.style.borderRadius = "12px";

            let title = createElement("h3", task.title);

            if (task.completed) {
                title.style.textDecoration = "line-through";
                title.style.opacity = "0.6";
            }

            let details = createElement(
                "p",
                task.subject + " | " + (task.deadline || "No deadline")
            );

            let completeButton = createElement(
                "button",
                task.completed
                    ? (currentLanguage === "ar" ? "إلغاء الإنجاز" : "Undo")
                    : (currentLanguage === "ar" ? "تم الإنجاز" : "Complete")
            );

            completeButton.type = "button";

            completeButton.addEventListener("click", function () {

                tasks[index].completed = !tasks[index].completed;

                saveData("techhub-tasks", tasks);

                renderTasks();

                updateDashboard();

            });

            let deleteButton = createElement(
                "button",
                currentLanguage === "ar" ? "حذف" : "Delete"
            );

            deleteButton.type = "button";

            deleteButton.style.marginInlineStart = "10px";

            deleteButton.addEventListener("click", function () {

                tasks.splice(index, 1);

                saveData("techhub-tasks", tasks);

                renderTasks();

                updateDashboard();

            });

            item.appendChild(title);
            item.appendChild(details);
            item.appendChild(completeButton);
            item.appendChild(deleteButton);

            taskList.appendChild(item);

        });

    }

    if (taskForm) {

        taskForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let tasks = getData("techhub-tasks");

            tasks.push({

                title: document.getElementById("task-title").value.trim(),

                subject: document.getElementById("task-subject").value.trim(),

                deadline: document.getElementById("task-deadline").value,

                completed: false

            });

            saveData("techhub-tasks", tasks);

            taskForm.reset();

            renderTasks();

            updateDashboard();

        });

    }

    /* STUDY SCHEDULE */

    let scheduleForm = document.getElementById("schedule-form");

    let scheduleList = document.getElementById("schedule-list");

    function renderSchedule() {

        if (!scheduleList) return;

        scheduleList.innerHTML = "";

        let schedule = getData("techhub-schedule");

        scheduleList.appendChild(
            createElement(
                "h2",
                currentLanguage === "ar" ? "جدولي الدراسي" : "My Schedule"
            )
        );

        schedule.forEach(function (item, index) {

            let card = createElement("div", "");

            card.style.padding = "15px";
            card.style.margin = "10px 0";
            card.style.background = "#182541";
            card.style.borderRadius = "12px";

            card.appendChild(createElement("h3", item.subject));

            card.appendChild(
                createElement("p", item.date + " | " + item.time)
            );

            let deleteButton = createElement(
                "button",
                currentLanguage === "ar" ? "حذف" : "Delete"
            );

            deleteButton.type = "button";

            deleteButton.addEventListener("click", function () {

                schedule.splice(index, 1);

                saveData("techhub-schedule", schedule);

                renderSchedule();

            });

            card.appendChild(deleteButton);

            scheduleList.appendChild(card);

        });

    }

    if (scheduleForm) {

        scheduleForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let schedule = getData("techhub-schedule");

            schedule.push({

                subject: document.getElementById("subject").value.trim(),

                date: document.getElementById("study-date").value,

                time: document.getElementById("study-time").value

            });

            saveData("techhub-schedule", schedule);

            scheduleForm.reset();

            renderSchedule();

        });

    }

    function updateDashboard() {

        let tasks = getData("techhub-tasks");

        let completed = tasks.filter(function (task) {
            return task.completed;
        }).length;

        let total = tasks.length;

        let progress = total > 0
            ? Math.round((completed / total) * 100)
            : 0;

        let taskCounter = document.getElementById("dashboard-tasks");

        let completedCounter = document.getElementById("dashboard-completed");

        let progressCounter = document.getElementById("dashboard-progress");

        if (taskCounter) taskCounter.textContent = total;

        if (completedCounter) completedCounter.textContent = completed;

        if (progressCounter) progressCounter.textContent = progress + "%";

        let overallProgress = document.getElementById("overall-progress");

        if (overallProgress) {
            overallProgress.textContent = progress + "%";
        }

        let activityCounter = document.getElementById("completed-activities");

        if (activityCounter) {
            activityCounter.textContent = completed;
        }

    }

    let plannerForm = document.getElementById("planner-form");

    if (plannerForm) {

        plannerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let subject = document.getElementById("planner-subject").value;

            let hours = document.getElementById("available-time").value;

            let goal = document.getElementById("study-goal").value;

            let results = document.getElementById("study-plan-results");

            results.innerHTML = "";

            results.appendChild(
                createElement(
                    "h2",
                    currentLanguage === "ar"
                        ? "ملخص خطتك الدراسية"
                        : "Your Study Plan Summary"
                )
            );

            results.appendChild(
                createElement("p", subject)
            );

            results.appendChild(
                createElement(
                    "p",
                    currentLanguage === "ar"
                        ? "الوقت المتاح يوميًا: " + hours + " ساعة"
                        : "Available daily time: " + hours + " hours"
                )
            );

            results.appendChild(
                createElement("p", goal)
            );

            results.appendChild(
                createElement(
                    "p",
                    currentLanguage === "ar"
                        ? "هذا ملخص مبدئي، وسيتم تطوير إنشاء الخطط الذكية لاحقًا."
                        : "This is a basic summary. Intelligent study planning will be developed later."
                )
            );

        });

    }


    document.querySelectorAll("[data-device]").forEach(function (button) {

        button.addEventListener("click", function () {

            document.querySelectorAll("[data-device]").forEach(function (item) {
                item.style.borderColor = "rgba(255,255,255,0.1)";
            });

            button.style.borderColor = "#16c8e8";

            localStorage.setItem("techhub-device", button.dataset.device);

        });

    });

    

    let operatingSystemButtons = document.querySelectorAll(
        "#operating-system .selection-grid button"
    );

    operatingSystemButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            operatingSystemButtons.forEach(function (item) {
                item.style.borderColor = "rgba(255,255,255,0.1)";
            });

            button.style.borderColor = "#16c8e8";

            localStorage.setItem(
                "techhub-operating-system",
                button.textContent.trim()
            );

        });
    }

    let diagnosisForm = document.getElementById("diagnosis-form");

    if (diagnosisForm) {

        diagnosisForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let category = document.getElementById("problem-category").value;

            let description = document.getElementById("problem-description").value;

            localStorage.setItem(
                "techhub-current-problem",
                JSON.stringify({
                    category: category,
                    description: description
                })
            );

            showMessage(
                diagnosisForm,
                currentLanguage === "ar"
                    ? "تم تسجيل وصف المشكلة محليًا. يلزم توصيل محرك التشخيص بالـBackend."
                    : "Your problem description was saved locally. Connect the diagnosis engine to the backend."
            );

        });

    }


    function setupAIChat(formId, inputId, messagesId) {

        let form = document.getElementById(formId);

        let input = document.getElementById(inputId);

        let messages = document.getElementById(messagesId);

        if (!form || !input || !messages) return;

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            let message = input.value.trim();

            if (!message) return;

            let userMessage = createElement("div", message);

            userMessage.style.padding = "14px";
            userMessage.style.margin = "10px 0";
            userMessage.style.background = "rgba(22,200,232,0.12)";
            userMessage.style.borderRadius = "12px";
            userMessage.style.alignSelf = "flex-end";
            userMessage.style.maxWidth = "85%";

            messages.appendChild(userMessage);

            let notice = createElement(
                "div",
                currentLanguage === "ar"
                    ? "المساعد الذكي غير متصل بالخادم حاليًا. سيتم تفعيل الردود بعد ربط واجهة AI بالـBackend."
                    : "The AI assistant is not connected to the server yet. Responses will be enabled after connecting the AI backend.",
                "ai-message"
            );

            messages.appendChild(notice);

            input.value = "";

            messages.scrollTop = messages.scrollHeight;

        });

    }

    setupAIChat(
        "techfix-chat-form",
        "techfix-message",
        "techfix-messages"
    );

    setupAIChat(
        "student-chat-form",
        "student-message",
        "student-messages"
    );


    let ticketForm = document.getElementById("support-ticket-form");

    if (ticketForm) {

        ticketForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let tickets = getData("techhub-tickets");

            tickets.push({

                title: document.getElementById("ticket-title").value.trim(),

                description: document.getElementById("ticket-description").value.trim(),

                priority: document.getElementById("ticket-priority").value,

                date: new Date().toLocaleDateString()

            });

            saveData("techhub-tickets", tickets);

            ticketForm.reset();

            showMessage(
                ticketForm,
                currentLanguage === "ar"
                    ? "تم حفظ طلب الدعم على هذا الجهاز."
                    : "Your support request was saved on this device."
            );

            renderTickets();

        });

    }

    function renderTickets() {

        let historyList = document.getElementById("support-history-list");

        if (!historyList) return;

        historyList.innerHTML = "";

        let tickets = getData("techhub-tickets");

        if (tickets.length === 0) {

            historyList.appendChild(
                createElement(
                    "p",
                    currentLanguage === "ar"
                        ? "لا توجد طلبات دعم سابقة."
                        : "No previous support requests."
                )
            );

            return;

        }

        tickets.forEach(function (ticket) {

            let card = createElement("article", "");

            card.style.padding = "20px";
            card.style.margin = "15px 0";
            card.style.background = "#182541";
            card.style.borderRadius = "12px";

            card.appendChild(createElement("h3", ticket.title));

            card.appendChild(createElement("p", ticket.description));

            card.appendChild(
                createElement("p", ticket.priority + " | " + ticket.date)
            );

            historyList.appendChild(card);

        });

    }



    let contentForm = document.getElementById("content-form");

    if (contentForm) {

        contentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let content = getData("techhub-content");

            content.push({

                title: document.getElementById("content-title").value.trim(),

                category: document.getElementById("content-category").value,

                description: document.getElementById("content-description").value.trim()

            });

            saveData("techhub-content", content);

            contentForm.reset();

            renderContent();

        });

    }

    function renderContent() {

        let container = document.getElementById("managed-content");

        if (!container) return;

        container.innerHTML = "";

        let content = getData("techhub-content");

        content.forEach(function (item) {

            let card = createElement("article", "");

            card.style.padding = "18px";
            card.style.margin = "12px 0";
            card.style.background = "#182541";
            card.style.borderRadius = "12px";

            card.appendChild(createElement("h3", item.title));

            card.appendChild(createElement("p", item.category));

            card.appendChild(createElement("p", item.description));

            container.appendChild(card);

        });

    }


    function setupSearch(inputId, containerSelector) {

        let input = document.getElementById(inputId);

        let container = document.querySelector(containerSelector);

        if (!input || !container) return;

        input.addEventListener("input", function () {

            let query = input.value.toLowerCase();

            let items = container.querySelectorAll("article");

            items.forEach(function (item) {

                let text = item.textContent.toLowerCase();

                item.style.display = text.includes(query) ? "" : "none";

            });

        });

    }

    setupSearch(
        "knowledge-search",
        "#knowledge-base .knowledge-grid"
    );

    setupSearch(
        "library-search",
        "#library .library-grid"
    );


    let profileName = document.getElementById("profile-name");

    let profileEmail = document.getElementById("profile-email");

    let profileType = document.getElementById("profile-type");

    if (profileName) {
        profileName.textContent =
            localStorage.getItem("techhub-profile-name") || "User Name";
    }

    if (profileEmail) {
        profileEmail.textContent =
            localStorage.getItem("techhub-profile-email") || "user@example.com";
    }

    if (profileType) {
        profileType.textContent =
            localStorage.getItem("techhub-profile-type") || "Student";
    }

    
    function updateAdminStatistics() {

        let tickets = getData("techhub-tickets");

        let tasks = getData("techhub-tasks");

        let users = getData("techhub-users");

        let totalUsers = document.getElementById("total-users");

        let totalRequests = document.getElementById("total-requests");

        let totalActivities = document.getElementById("total-activities");

        let statisticsUsers = document.getElementById("statistics-users");

        let statisticsDiagnoses = document.getElementById("statistics-diagnoses");

        let statisticsAI = document.getElementById("statistics-ai");

        let statisticsLearning = document.getElementById("statistics-learning");

        if (totalUsers) totalUsers.textContent = users.length;

        if (totalRequests) totalRequests.textContent = tickets.length;

        if (totalActivities) totalActivities.textContent = tasks.length;

        if (statisticsUsers) statisticsUsers.textContent = users.length;

        if (statisticsDiagnoses) {
            statisticsDiagnoses.textContent =
                localStorage.getItem("techhub-diagnosis-count") || 0;
        }

        if (statisticsAI) {
            statisticsAI.textContent = 0;
        }

        if (statisticsLearning) {
            statisticsLearning.textContent = tasks.length;
        }


    renderTasks();

    renderSchedule();

    renderTickets();

    renderContent();

    updateDashboard();

    updateAdminStatistics();

});
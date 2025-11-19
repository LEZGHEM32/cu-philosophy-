
import { Course, SlideType, DiagramType } from './types';

export const COURSES: Course[] = [
  // =================================================================
  // COURSE 1: PHILOSOPHY OF LANGUAGE
  // =================================================================
  {
    id: 'lang_phil',
    iconName: 'MessageCircle',
    colorTheme: 'blue',
    info: {
      university: "المركز الجامعي نور البشير - البيض",
      institute: "معهد العلوم الإنسانية والاجتماعية - قسم الفلسفة",
      course: "مقياس: فلسفة اللغة",
      target: "السنة الثالثة ليسانس - فلسفة عامة",
      professor: "الأستاذ: لزغم عبد الحق",
      year: "2025 - 2026",
      description: "سلسلة محاضرات موجهة لطلبة السنة الثالثة تتناول نظريات المعنى، المنعطف اللغوي، والمدارس الفلسفية الكبرى."
    },
    lectures: [
      {
        id: 1,
        title: "1. مدخل إلى فلسفة اللغة",
        slides: [
          {
            id: 101,
            lectureId: 1,
            type: SlideType.TITLE,
            title: "المحاضرة الأولى: مدخل إلى فلسفة اللغة",
            subtitle: "ما هي فلسفة اللغة؟ وما الفرق بينها وبين اللسانيات؟",
            content: [
              "فلسفة اللغة ليست دراسة للغات بحد ذاتها (اللسانيات).",
              "ليست مجرد تأمل في جماليات التعبير (النقد الأدبي).",
              "هي فرع فلسفي ينظر إلى اللغة نظرة إشكالية.",
              "تطرح أسئلة تأسيسية حول المعنى، وعلاقة اللغة بالعالم والفكر."
            ]
          },
          {
            id: 102,
            lectureId: 1,
            type: SlideType.DIAGRAM,
            title: "خريطة ذهنية: مجالات فلسفة اللغة",
            diagramData: {
              type: DiagramType.MIND_MAP,
              root: {
                id: "root",
                label: "فلسفة اللغة",
                icon: "Brain",
                color: "blue",
                children: [
                  { 
                    id: "c1", 
                    label: "المعنى", 
                    subLabel: "كيف نفهم؟", 
                    color: "indigo", 
                    icon: "MessageCircle",
                    description: "يدرس طبيعة المعنى: هل هو فكرة في الذهن؟ أم هو استخدام الكلمات في السياق؟ أم هو الإشارة إلى الأشياء؟" 
                  },
                  { 
                    id: "c2", 
                    label: "المرجع", 
                    subLabel: "اللغة والواقع", 
                    color: "emerald", 
                    icon: "Globe",
                    description: "يبحث في العلاقة بين الكلمات والأشياء في العالم الخارجي. كيف تشير كلمة 'شجرة' إلى الشجرة الحقيقية؟"
                  },
                  { 
                    id: "c3", 
                    label: "الحقيقة", 
                    subLabel: "الصدق والكذب", 
                    color: "amber", 
                    icon: "Scale",
                    description: "متى تكون الجملة صادقة؟ هل الصدق هو مطابقة الواقع أم الاتساق المنطقي؟"
                  },
                  { 
                    id: "c4", 
                    label: "الاستعمال", 
                    subLabel: "أفعال الكلام", 
                    color: "rose", 
                    icon: "Users",
                    description: "اللغة كأداة اجتماعية. كيف ننجز أفعالاً (مثل الوعد، الأمر، التحذير) بمجرد نطق الكلمات؟"
                  }
                ]
              }
            }
          },
          {
            id: 103,
            lectureId: 1,
            type: SlideType.CONCEPT_CARD,
            title: "الأسئلة التأسيسية",
            conceptData: [
              {
                term: "اكتساب المعنى",
                definition: "كيف تكتسب الكلمات معانيها؟",
                details: ["هل المعنى فطري أم مكتسب؟", "ما دور العرف الاجتماعي؟"]
              },
              {
                term: "طبيعة المعنى",
                definition: "ما هو 'المعنى' في حد ذاته؟",
                details: ["هل هو صورة ذهنية؟", "هل هو الشيء في الواقع؟", "هل هو الاستعمال؟"]
              },
              {
                term: "اللغة والواقع",
                definition: "هل تشير اللغة إلى واقع خارج عنها أم تبنيه؟",
                details: ["جدلية الإشارة والبناء.", "هل يمكن للفكر أن يوجد بمعزل عن اللغة؟"]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "2. المنعطف اللغوي",
        slides: [
          {
            id: 201,
            lectureId: 2,
            type: SlideType.CONTENT,
            title: "المنعطف اللغوي (The Linguistic Turn)",
            content: [
              "تحول جذري في الممارسة الفلسفية في القرن العشرين.",
              "أصبحت اللغة (لا الفكر أو الوعي) هي المدخل الأساسي لمعالجة المشكلات الفلسفية.",
              "الاعتقاد بأن الألغاز الفلسفية ناتجة عن سوء استخدام اللغة.",
              "بدل السؤال 'ما هو الوجود؟'، أصبحنا نسأل 'كيف نستخدم كلمة يوجد؟'."
            ]
          },
          {
            id: 202,
            lectureId: 2,
            type: SlideType.COMPARISON,
            title: "إشكالية النشأة: نظرتان",
            comparisonData: {
              leftTitle: "النظرة الحداثية",
              leftPoints: [
                "وليدة القرن العشرين بامتياز.",
                "مرتبطة بفريجه، راسل، فتغنشتاين.",
                "تخصص منهجي له أدواته الخاصة."
              ],
              rightTitle: "النظرة التأصيلية",
              rightPoints: [
                "الاهتمام باللغة قديم قدم الفلسفة.",
                "بدأ مع أفلاطون (محاورة كراتيلوس).",
                "بحث اليونان في طبيعة الأسماء."
              ]
            }
          }
        ]
      },
      {
        id: 3,
        title: "3. فلسفة اللغة عند اليونان",
        slides: [
          {
            id: 301,
            lectureId: 3,
            type: SlideType.CONTENT,
            title: "من السفسطائيين إلى الرواقيين",
            content: [
              "السفسطائيون: اللغة أداة للإقناع وصناعة الحقيقة (نسبية الحقيقة).",
              "أفلاطون (كراتيلوس): جدلية العلاقة الطبيعية vs العلاقة الاصطلاحية بين الاسم والمسمى.",
              "أرسطو: المثلث الدلالي (الكلمة ↔ التصور الذهني ↔ الشيء الخارجي)."
            ],
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/800px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
            imageCaption: "أفلاطون: صاحب محاورة كراتيلوس"
          },
          {
            id: 302,
            lectureId: 3,
            type: SlideType.DIAGRAM,
            title: "المثلث الدلالي (أرسطو)",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg",
            imageCaption: "أرسطو",
            diagramData: {
              type: DiagramType.TRIANGLE,
              labels: {
                top: "التصور الذهني (الفكرة)",
                left: "الرمز (الكلمة)",
                right: "المرجع (الشيء الخارجي)",
                bottomLabel: "علاقة اعتباطية / غير مباشرة"
              }
            }
          },
          {
            id: 303,
            lectureId: 3,
            type: SlideType.QUIZ,
            title: "اختبر فهمك - اليونان",
            quizData: {
              question: "ما هو جوهر موقف السفسطائيين من اللغة؟",
              options: [
                { id: "a", text: "اللغة مرآة صادقة للواقع الموضوعي", isCorrect: false },
                { id: "b", text: "اللغة أداة للإقناع وصناعة الحقيقة النسبية", isCorrect: true },
                { id: "c", text: "اللغة هبة إلهية مقدسة", isCorrect: false }
              ],
              explanation: "السفسطائيون (مثل بروتاغوراس) اعتبروا الإنسان مقياس كل شيء، وبالتالي اللغة أداة لخدمة المتكلم وإقناع الآخرين، وليست وسيلة لكشف حقيقة ثابتة."
            }
          }
        ]
      },
      {
        id: 4,
        title: "4. العصور الوسطى",
        slides: [
          {
            id: 401,
            lectureId: 4,
            type: SlideType.CONTENT,
            title: "اللغة بين المنطق واللاهوت",
            content: [
              "ارتبط البحث بمشروعين: تطوير المنطق الأرسطي، وتفسير النصوص المقدسة.",
              "الفارابي: سعى للتكامل بين المنطق (نحو كلي) والنحو (خاص بكل لغة).",
              "ابن سينا: ميز بين الدلالة المطابقية والتضمنية والالتزامية.",
              "أوروبا (السكولائية): مشكلة الكليات (الواقعية vs الاسمية)."
            ],
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Avicenna_Portrait_on_Silver_Vase_-_Museum_at_BuAli_Sina_Mausoleum.jpg/800px-Avicenna_Portrait_on_Silver_Vase_-_Museum_at_BuAli_Sina_Mausoleum.jpg",
            imageCaption: "ابن سينا (الشيخ الرئيس)"
          }
        ]
      },
      {
        id: 5,
        title: "5. عصر النهضة والحديث",
        slides: [
          {
            id: 501,
            lectureId: 5,
            type: SlideType.COMPARISON,
            title: "العقلانية vs التجريبية",
            comparisonData: {
              leftTitle: "المدرسة التجريبية (جون لوك)",
              leftPoints: [
                "الكلمات علامات للأفكار المكتسبة من التجربة.",
                "اللغة أداة تواصل لكنها عرضة للغموض.",
                "العقل صفحة بيضاء."
              ],
              leftImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/John_Locke.jpg/800px-John_Locke.jpg",
              rightTitle: "المدرسة الديكارتية (ديكارت)",
              rightPoints: [
                "اللغة دليل على العقل الجوهري.",
                "الإبداع اللغوي يميز الإنسان عن الآلة.",
                "اللغة تعبير عن أفكار فطرية."
              ],
              rightImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_René_Descartes.jpg/800px-Frans_Hals_-_Portret_van_René_Descartes.jpg"
            }
          },
          {
            id: 502,
            lectureId: 5,
            type: SlideType.CONTENT,
            title: "مشاريع أخرى",
            content: [
              "لايبنتز: حلم بـ 'لغة الخصائص الكلية' (لغة رياضية دقيقة لحل الخلافات).",
              "روسو: أصل اللغة يكمن في العواطف والأهواء، بدأت شعرية ثم أصبحت عقلانية."
            ]
          }
        ]
      },
      {
        id: 6,
        title: "6. اللسانيات الحديثة",
        slides: [
          {
            id: 601,
            lectureId: 6,
            type: SlideType.DIAGRAM,
            title: "ثورة سوسير: العلامة اللغوية",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ferdinand_de_Saussure_by_Jullien.png/800px-Ferdinand_de_Saussure_by_Jullien.png",
            imageCaption: "فردينان دي سوسير (أب اللسانيات الحديثة)",
            diagramData: {
              type: DiagramType.BINARY_SIGN,
              labels: {
                top: "المدلول (المفهوم/التصور)",
                bottom: "الدال (الصورة السمعية)"
              }
            }
          },
          {
            id: 602,
            lectureId: 6,
            type: SlideType.CONTENT,
            title: "مفاهيم سوسير الأساسية",
            content: [
              "اللغة والكلام (Langue/Parole): التمييز بين النظام الاجتماعي المجرد والاستعمال الفردي.",
              "الاعتباطية: العلاقة بين الدال والمدلول ليست طبيعية بل اصطلاحية.",
              "القيمة: المعنى يتحدد بالاختلاف (الكلمة هي ما ليست إياه الكلمات الأخرى)."
            ]
          }
        ]
      },
      {
        id: 7,
        title: "7. نظريات المعنى (1)",
        slides: [
          {
            id: 701,
            lectureId: 7,
            type: SlideType.CONTENT,
            title: "النظريات الكلاسيكية",
            content: [
              "النظرية الإشارية: المعنى هو المرجع في الواقع. عيوبها: كيف نفهم 'العدم' أو 'التنين'؟",
              "النظرية التصورية (جون لوك): المعنى هو الفكرة في ذهن المتكلم. عيوبها: ذاتية المعنى وصعوبة التواصل."
            ]
          }
        ]
      },
      {
        id: 8,
        title: "8. نظريات المعنى (2)",
        slides: [
          {
            id: 801,
            lectureId: 8,
            type: SlideType.CONCEPT_CARD,
            title: "التداوليات وأفعال الكلام",
            conceptData: [
              {
                term: "نظرية أفعال الكلام",
                definition: "اللغة ليست مجرد وصف للعالم، بل هي فعل وتغيير له (أوستن).",
                details: ["مثال: 'أعدك' هو فعل وعد وليس وصفاً."]
              },
              {
                term: "المقاصد الضمنية",
                definition: "ما يقصده المتكلم يتجاوز المعنى الحرفي للجملة (جرايس).",
                details: ["الاستلزام الحواري (Implicature)."]
              }
            ]
          }
        ]
      },
      {
        id: 9,
        title: "9. إشكالية الكليات",
        slides: [
          {
            id: 901,
            lectureId: 9,
            type: SlideType.COMPARISON,
            title: "الواقعية vs الاسمية",
            comparisonData: {
              leftTitle: "الاسمية (Nominalism)",
              leftPoints: [
                "الكليات مجرد أسماء وأصوات.",
                "لا وجود إلا للأفراد (هذا الإنسان، تلك الشجرة).",
                "وليم الأوكامي: لا يجب تكثير الكيانات دون ضرورة."
              ],
              rightTitle: "الواقعية (Realism)",
              rightPoints: [
                "الكليات (مثل الإنسانية) لها وجود حقيقي.",
                "توجد إما في عالم المثل (أفلاطون) أو في الأشياء (أرسطو).",
                "المعرفة العلمية تتطلب الكليات."
              ]
            }
          }
        ]
      },
      {
        id: 10,
        title: "10. الفلسفة التحليلية",
        slides: [
          {
            id: 1001,
            lectureId: 10,
            type: SlideType.CONTENT,
            title: "المنطق واللغة",
            content: [
              "فريجه: التمييز بين المعنى (Sinn) والمرجع (Bedeutung). عبارة 'نجمة الصباح' و'نجمة المساء' لهما نفس المرجع ومعنى مختلف.",
              "راسل: التحليل المنطقي يزيل غموض اللغة الطبيعية (نظرية الأنماط والأوصاف)."
            ],
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gottlob_Frege.jpg/800px-Gottlob_Frege.jpg",
            imageCaption: "جوتلوب فريجه"
          }
        ]
      },
      {
        id: 11,
        title: "11. فتغنشتاين",
        slides: [
          {
            id: 1101,
            lectureId: 11,
            type: SlideType.COMPARISON,
            title: "فتغنشتاين الأول والثاني",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ludwig_Wittgenstein_by_Moritz_N%C3%A4hr_1930.jpg/800px-Ludwig_Wittgenstein_by_Moritz_N%C3%A4hr_1930.jpg",
            imageCaption: "لودفيغ فتغنشتاين",
            comparisonData: {
              leftTitle: "المتأخر (التحقيقات)",
              leftPoints: [
                "المعنى هو الاستعمال.",
                "اللغة مجموعة من 'الألعاب اللغوية'.",
                "لا توجد ماهية مشتركة للغة بل 'تشابهات عائلية'."
              ],
              rightTitle: "المبكر (الرسالة)",
              rightPoints: [
                "اللغة صورة منطقية للعالم.",
                "ما لا يمكن قوله يجب السكوت عنه.",
                "حدود لغتي هي حدود عالمي."
              ]
            }
          }
        ]
      },
      {
        id: 12,
        title: "تقييم شامل",
        slides: [
          {
            id: 1201,
            lectureId: 12,
            type: SlideType.FINAL_ASSESSMENT,
            title: "الامتحان النهائي: فلسفة اللغة",
            subtitle: "اختبار شامل لجميع المحاضرات (التنقيط من 20)",
            assessmentData: {
              passingScore: 10,
              questions: [
                {
                  id: 1,
                  question: "من هو صاحب مقولة 'حدود لغتي هي حدود عالمي'؟",
                  options: ["سوسير", "فتغنشتاين المبكر", "أرسطو", "جون لوك"],
                  correctAnswerIndex: 1
                },
                {
                  id: 2,
                  question: "ما المقصود بـ 'المنعطف اللغوي'؟",
                  options: [
                    "تطور اللغات عبر التاريخ",
                    "اعتبار اللغة المدخل الأساسي لحل المشكلات الفلسفية",
                    "ظهور اللسانيات الحاسوبية",
                    "دراسة قواعد النحو العربي"
                  ],
                  correctAnswerIndex: 1
                },
                {
                  id: 3,
                  question: "في المثلث الدلالي لأرسطو، العلاقة بين الكلمة والشيء الخارجي هي:",
                  options: ["مباشرة وطبيعية", "غير مباشرة (عبر التصور الذهني)", "غير موجودة أصلاً", "علاقة مقدسة"],
                  correctAnswerIndex: 1
                },
                {
                  id: 4,
                  question: "من هو مؤسس اللسانيات البنيوية الحديثة؟",
                  options: ["نعوم تشومسكي", "فردينان دي سوسير", "إيمانويل كانط", "ابن خلدون"],
                  correctAnswerIndex: 1
                },
                {
                  id: 5,
                  question: "ماذا يعني 'المعنى هو الاستعمال' عند فتغنشتاين المتأخر؟",
                  options: [
                    "أن المعنى موجود في القاموس فقط",
                    "أن المعنى يتحدد بكيفية استخدام الكلمة في لعبة لغوية معينة",
                    "أن المعنى ثابت لا يتغير",
                    "أن اللغة ليس لها معنى"
                  ],
                  correctAnswerIndex: 1
                },
                {
                  id: 6,
                  question: "وفقاً للمذهب التجريبي (جون لوك)، العقل هو:",
                  options: ["صفحة بيضاء تخطها التجربة", "مزود بأفكار فطرية", "جوهر مفارق للمادة", "صورة منطقية للعالم"],
                  correctAnswerIndex: 0
                },
                {
                  id: 7,
                  question: "ميز فريجه بين:",
                  options: ["الدال والمدلول", "المعنى والمرجع", "اللغة والكلام", "النحو والصرف"],
                  correctAnswerIndex: 1
                },
                {
                  id: 8,
                  question: "النظرية التي ترى أن 'الإنسان مقياس كل شيء' تعود إلى:",
                  options: ["الرواقيين", "السفسطائيين", "الأفلاطونيين", "المشائين"],
                  correctAnswerIndex: 1
                },
                {
                  id: 9,
                  question: "ما هي 'اعتباطية العلامة اللغوية' عند سوسير؟",
                  options: [
                    "أن اللغة فوضوية",
                    "أنه لا توجد علاقة منطقية أو طبيعية ضرورية بين الدال والمدلول",
                    "أن اللغة تتغير بسرعة",
                    "أن الأصوات اللغوية متشابهة"
                  ],
                  correctAnswerIndex: 1
                },
                {
                  id: 10,
                  question: "نظرية أفعال الكلام (Speech Acts) تركز على:",
                  options: [
                    "الجانب الجمالي للغة",
                    "الجانب الوظيفي والتأثيري للغة (اللغة كفعل)",
                    "تاريخ تطور الكلمات",
                    "بنية الجملة النحوية"
                  ],
                  correctAnswerIndex: 1
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // =================================================================
  // COURSE 2: PHILOSOPHY OF ETHICS (EXPANDED & DEEP DIVE)
  // =================================================================
  {
    id: 'ethics_phil',
    iconName: 'Scale',
    colorTheme: 'emerald',
    info: {
      university: "المركز الجامعي نور البشير - البيض",
      institute: "معهد العلوم الإنسانية والاجتماعية - قسم الفلسفة",
      course: "مقياس: فلسفة الأخلاق",
      target: "السنة الثانية فلسفة",
      professor: "الأستاذ: لزغم عبد الحق",
      year: "2024 - 2025",
      description: "دراسة معمقة في الأسس النظرية للأخلاق، من الفضيلة الأرسطية إلى الواجب الكانطي، وصولاً إلى إشكاليات الأخلاق التطبيقية المعاصرة."
    },
    lectures: [
      {
        id: 1,
        title: "المحور الأول: مفاهيم تأسيسية",
        slides: [
          {
            id: 101,
            lectureId: 1,
            type: SlideType.TITLE,
            title: "مدخل إلى فلسفة الأخلاق",
            subtitle: "بين المعيارية والوصفية",
            content: [
              "الأخلاق (Ethics) مشتقة من اليونانية (Ethos) وتعني العادة أو الطبع.",
              "هي الدراسة الفلسفية للأحكام القيمية المتعلقة بالسلوك الإنساني.",
              "تختلف عن علم الاجتماع الذي يدرس الأخلاق كظاهرة وصفية، بينما الفلسفة تدرس 'ما يجب أن يكون'."
            ]
          },
          {
            id: 102,
            lectureId: 1,
            type: SlideType.DIAGRAM,
            title: "أقسام الفلسفة الأخلاقية",
            diagramData: {
              type: DiagramType.MIND_MAP,
              root: {
                id: "ethics_types",
                label: "فروع الأخلاق",
                icon: "Scale",
                color: "emerald",
                children: [
                  { 
                    id: "meta", 
                    label: "ما وراء الأخلاق", 
                    subLabel: "طبيعة الخير/الشر", 
                    color: "indigo", 
                    icon: "Brain",
                    description: "Meta-ethics: لا تدرس ما هو الفعل الأخلاقي، بل تدرس معنى المصطلحات الأخلاقية. ماذا نعني عندما نقول 'السرقة خطأ'؟ هل هي حقيقة موضوعية أم تعبير عن شعور؟"
                  },
                  { 
                    id: "normative", 
                    label: "الأخلاق المعيارية", 
                    subLabel: "نظريات السلوك", 
                    color: "blue", 
                    icon: "Book",
                    description: "Normative Ethics: تقدم قواعد ومعايير للحكم على الأفعال (مثل النفعية، أخلاق الواجب، أخلاق الفضيلة)."
                  },
                  { 
                    id: "applied", 
                    label: "الأخلاق التطبيقية", 
                    subLabel: "قضايا الواقع", 
                    color: "rose", 
                    icon: "Users",
                    description: "Applied Ethics: تطبيق النظريات الأخلاقية على قضايا واقعية شائكة مثل الإجهاض، الاستنساخ، وحقوق الحيوان."
                  }
                ]
              }
            }
          },
          {
            id: 103,
            lectureId: 1,
            type: SlideType.CONCEPT_CARD,
            title: "مصطلحات مفتاحية",
            conceptData: [
              {
                term: "الإلزام (Obligation)",
                definition: "القوة الآمرة في الفعل الأخلاقي.",
                details: ["هل الإلزام داخلي (الضمير/العقل) أم خارجي (المجتمع/الدين)؟"]
              },
              {
                term: "المسؤولية",
                definition: "تحمل تبعات الأفعال الصادرة عن حرية وإرادة.",
                details: ["لا أخلاق بدون حرية."]
              },
              {
                term: "الجزاء",
                definition: "النتيجة المترتبة على الفعل (ثواب أو عقاب).",
                details: ["شرط لتحقيق العدالة."]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "المحور الثاني: الحكمة الشرقية",
        slides: [
          {
            id: 201,
            lectureId: 2,
            type: SlideType.COMPARISON,
            title: "الشرق الأقصى: الهند والصين",
            comparisonData: {
              leftTitle: "الفكر الصيني (كونفوشيوس)",
              leftPoints: [
                "أخلاق اجتماعية عملية.",
                "الفضيلة العليا (الرين): حب الإنسانية.",
                "الرجل النبيل هو من يطبق (اللي): الطقوس والآداب."
              ],
              rightTitle: "الفكر الهندي (الهندوسية/البوذية)",
              rightPoints: [
                "أخلاق روحية ميتافيزيقية.",
                "الكارما: قانون الفعل والجزاء الكوني.",
                "التحرر من 'الأنا' والرغبات هو طريق الخلاص."
              ]
            }
          }
        ]
      },
      {
        id: 3,
        title: "المحور الثالث: أرسطو والأخلاق النيقوماخية (دراسة معمقة)",
        slides: [
          {
            id: 301,
            lectureId: 3,
            type: SlideType.TITLE,
            title: "أرسطو: الأخلاق غائية",
            subtitle: "كتاب الأخلاق إلى نيقوماخوس",
            content: [
              "يعتبر كتاب 'الأخلاق النيقوماخية' أهم عمل أخلاقي في العصور القديمة.",
              "ينطلق أرسطو من مبدأ الغائية (Teleology): كل فعل إنساني يهدف إلى 'خير' ما.",
              "الخير الأسمى الذي يطلب لذاته ولا يطلب لغيره هو 'السعادة' (Eudaimonia)."
            ],
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg",
            imageCaption: "المعلم الأول: أرسطو"
          },
          {
            id: 302,
            lectureId: 3,
            type: SlideType.CONTENT,
            title: "ما هي السعادة عند أرسطو؟",
            content: [
              "ليست اللذة الحسية (حياة البهائم).",
              "ليست الثروة (هي وسيلة وليست غاية).",
              "ليست المجد والشهرة (لأنها تعتمد على الآخرين).",
              "السعادة هي: 'نشاط النفس وفقاً للفضيلة' في حياة كاملة.",
              "تتطلب السعادة شروطاً خارجية (صحة، مال قليل، أصدقاء) لكن جوهرها عقلي."
            ]
          },
          {
            id: 303,
            lectureId: 3,
            type: SlideType.DIAGRAM,
            title: "نظرية الوسط الذهبي (The Golden Mean)",
            diagramData: {
              type: DiagramType.MIND_MAP,
              root: {
                id: "virtue_theory",
                label: "الفضيلة (الوسط)",
                subLabel: "لا إفراط ولا تفريط",
                icon: "Scale",
                color: "emerald",
                children: [
                  { id: "rash", label: "التهور", subLabel: "إفراط (رذيلة)", color: "rose", icon: "AlertCircle" },
                  { id: "courage", label: "الشجاعة", subLabel: "فضيلة", color: "blue", icon: "CheckCircle2" },
                  { id: "coward", label: "الجبن", subLabel: "تفريط (رذيلة)", color: "rose", icon: "XCircle" },
                  { id: "generosity", label: "الكرم", subLabel: "وسط بين التبذير والبخل", color: "indigo", icon: "Star" }
                ]
              }
            }
          },
          {
            id: 304,
            lectureId: 3,
            type: SlideType.COMPARISON,
            title: "أنواع الفضائل عند أرسطو",
            comparisonData: {
              leftTitle: "الفضائل الخلقية (Ethical)",
              leftPoints: [
                "تتعلق بالجزء الشهواني من النفس.",
                "تكتسب بالتعود والتكرار والممارسة.",
                "أمثلة: الشجاعة، العفة، العدالة، الكرم.",
                "هدفها: السيطرة على الانفعالات."
              ],
              rightTitle: "الفضائل العقلية (Intellectual)",
              rightPoints: [
                "تتعلق بالجزء الناطق من النفس.",
                "تكتسب بالتعليم والتأمل.",
                "أمثلة: الحكمة النظرية (Sophia)، الفطنة العملية (Phronesis).",
                "هي أرقى أنواع الفضائل."
              ]
            }
          },
          {
            id: 305,
            lectureId: 3,
            type: SlideType.CONTENT,
            title: "العدالة والمسؤولية",
            content: [
              "العدالة هي الفضيلة الكاملة لأنها تتعلق بالآخرين.",
              "المسؤولية الأخلاقية ترتبط بـ 'الاختيار' (Prohairesis).",
              "الفعل القسري أو الناتج عن جهل لا يُحاسب عليه الإنسان أخلاقياً بنفس الدرجة.",
              "الإنسان أب لأفعاله كما هو أب لأبنائه."
            ]
          },
          {
            id: 306,
            lectureId: 3,
            type: SlideType.QUIZ,
            title: "اختبر فهمك لأرسطو",
            quizData: {
              question: "وفقاً لأرسطو، كيف يكتسب الإنسان الفضيلة الخلقية؟",
              options: [
                { id: "a", text: "تولد معنا بالفطرة", isCorrect: false },
                { id: "b", text: "من خلال قراءة الكتب وتعلم النظريات", isCorrect: false },
                { id: "c", text: "من خلال التعود والممارسة المستمرة (العادة)", isCorrect: true }
              ],
              explanation: "يؤكد أرسطو أننا لا نصبح خيّرين بمجرد المعرفة، بل بممارسة أفعال الخير حتى تصبح 'طبعاً' راسخاً فينا (Habit)."
            }
          }
        ]
      },
      {
        id: 4,
        title: "المحور الرابع: الأخلاق في الفكر الإسلامي",
        slides: [
          {
            id: 401,
            lectureId: 4,
            type: SlideType.TITLE,
            title: "جدلية العقل والنقل",
            subtitle: "إشكالية التحسين والتقبيح",
            content: "هل الفعل حسن لأن العقل يحكم بذلك، أم لأن الشرع أمر به؟"
          },
          {
            id: 402,
            lectureId: 4,
            type: SlideType.COMPARISON,
            title: "المعتزلة والأشاعرة",
            comparisonData: {
              leftTitle: "الأشاعرة (النقل)",
              leftPoints: [
                "الحسن ما حسنه الشرع، والقبيح ما قبحه الشرع.",
                "العقل لا يوجب ولا يحرم.",
                "أفعال الله مطلقة ولا تخضع لعلل أو غايات ملزمة.",
                "القيم الأخلاقية تعتمد على المشيئة الإلهية."
              ],
              rightTitle: "المعتزلة (العقل)",
              rightPoints: [
                "الحسن والقبيح صفتان ذاتيتان في الأفعال يدركهما العقل.",
                "الشرع يأتي مؤكداً ومخبراً عما في العقل.",
                "العدل الإلهي يقتضي أن يثيب المطيع ويعاقب العاصي."
              ]
            }
          },
          {
            id: 403,
            lectureId: 4,
            type: SlideType.CONTENT,
            title: "التصوف والأخلاق",
            content: [
              "الأخلاق عند الصوفة تجاوزت ظاهر الشريعة إلى 'أعمال القلوب'.",
              "مفهوم الفناء في الله: التخلي عن الرذائل (التخلية) والتحلي بالفضائل (التحلية).",
              "أبو حامد الغزالي: جمع بين الفقه والتصوف في 'إحياء علوم الدين'، معتبراً الأخلاق رياضة للنفس."
            ]
          }
        ]
      },
      {
        id: 5,
        title: "المحور الخامس: أخلاق الواجب (كانط)",
        slides: [
          {
            id: 501,
            lectureId: 5,
            type: SlideType.TITLE,
            title: "إيمانويل كانط: الثورة الكوبرنيكية في الأخلاق",
            subtitle: "نقد العقل العملي",
            content: [
              "رفض كانط تأسيس الأخلاق على العاطفة (مثل هيوم) أو على النتائج (النفعية) أو على السلطة الخارجية.",
              "الأخلاق يجب أن تكون 'قبلية' (A priori) نابعة من العقل المحض.",
              "الإرادة الخيرة هي الشيء الوحيد الذي يعد خيراً بذاته في هذا العالم."
            ],
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/800px-Kant_gemaelde_3.jpg",
            imageCaption: "إيمانويل كانط: فيلسوف الواجب"
          },
          {
            id: 502,
            lectureId: 5,
            type: SlideType.CONCEPT_CARD,
            title: "الأمر المطلق (Categorical Imperative)",
            conceptData: [
              {
                term: "الصيغة الأولى (التعميم)",
                definition: "تصرف فقط وفقاً للقاعدة التي ترضى أن تصبح قانوناً عاماً للطبيعة.",
                details: ["مثال: هل يمكن تعميم الكذب؟ لا، لأنه سيهدم الثقة وينفي نفسه."]
              },
              {
                term: "الصيغة الثانية (الغاية)",
                definition: "عامل الإنسانية في شخصك وشخص غيرك كغاية دائماً، وليس كوسيلة أبداً.",
                details: ["احترام الكرامة البشرية، تحريم العبودية والاستغلال."]
              },
              {
                term: "الواجب مقابل الميل",
                definition: "الفعل الأخلاقي هو ما تم 'من أجل الواجب' لا 'مطابقة للواجب' فقط.",
                details: ["التاجر الصادق لكسب الزبائن ليس أخلاقياً بالمعنى الكانطي."]
              }
            ]
          },
          {
            id: 503,
            lectureId: 5,
            type: SlideType.DIAGRAM,
            title: "مصفاة القرار الأخلاقي عند كانط",
            diagramData: {
              type: DiagramType.FLOWCHART,
              root: {
                id: "start",
                label: "لدي رغبة في فعل ما",
                icon: "Lightbulb",
                color: "blue",
                children: [
                  { 
                    id: "maxim", 
                    label: "صغ القاعدة (Maxim)", 
                    subLabel: "ما هو المبدأ؟",
                    color: "indigo",
                    icon: "Brain"
                  },
                  {
                    id: "universal",
                    label: "اختبار التعميم",
                    subLabel: "هل يصلح قانوناً للجميع؟",
                    color: "amber",
                    icon: "Scale"
                  },
                  {
                    id: "result",
                    label: "الواجب الأخلاقي",
                    subLabel: "افعله أو اتركه",
                    color: "emerald",
                    icon: "CheckCircle2"
                  }
                ]
              }
            }
          }
        ]
      },
      {
        id: 6,
        title: "المحور السادس: النفعية والاتجاهات المعاصرة",
        slides: [
          {
            id: 601,
            lectureId: 6,
            type: SlideType.COMPARISON,
            title: "بين كانط والنفعيين (Utilitarianism)",
            comparisonData: {
              leftTitle: "المذهب النفعي (بنثام وميل)",
              leftPoints: [
                "العبرة بالنتائج (Consequentialism).",
                "مبدأ السعادة القصوى: أكبر قدر من الخير لأكبر عدد.",
                "الخير والشر يتحددان بمقدار اللذة والألم.",
                "تضحية الفرد مقبولة لأجل المجموع."
              ],
              rightTitle: "مذهب الواجب (كانط)",
              rightPoints: [
                "العبرة بالنية والمبدأ.",
                "الأخلاق مطلقة ولا تقبل الاستثناء.",
                "لا يجوز استخدام الإنسان كوسيلة ولو لسعادة الملايين.",
                "الحق سابق على الخير."
              ]
            }
          },
          {
            id: 602,
            lectureId: 6,
            type: SlideType.CONTENT,
            title: "نيتشه: جينالوجيا الأخلاق",
            content: [
              "قلب القيم: نقد الأخلاق الغربية واعتبرها أخلاق ضعف.",
              "أخلاق السادة (القوة، النبل، الشجاعة) vs أخلاق العبيد (التواضع، الشفقة، المساواة).",
              "يرى أن أخلاق العبيد (المسيحية) هي حيلة الضعفاء للسيطرة على الأقوياء.",
              "الإنسان الأعلى (Übermensch) هو الذي يخلق قيمه الخاصة."
            ],
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/800px-Nietzsche187a.jpg",
            imageCaption: "فريدريك نيتشه"
          },
          {
            id: 603,
            lectureId: 6,
            type: SlideType.CONCEPT_CARD,
            title: "الأخلاق التطبيقية (Applied Ethics)",
            conceptData: [
              {
                term: "البيوإتيقا (Bioethics)",
                definition: "دراسة القضايا الأخلاقية الناجمة عن التقدم البيولوجي والطبي.",
                details: ["الاستنساخ، الموت الرحيم، الهندسة الوراثية."]
              },
              {
                term: "أخلاقيات البيئة",
                definition: "توسيع الدائرة الأخلاقية لتشمل الكائنات غير البشرية والأرض.",
                details: ["هل للطبيعة حقوق؟ مسؤولية الأجيال الحالية."]
              },
              {
                term: "أخلاقيات الذكاء الاصطناعي",
                definition: "تحديات التكنولوجيا الحديثة والقرارات الآلية.",
                details: ["السيارات ذاتية القيادة (مشكلة العربة)، الخصوصية، التحيز الخوارزمي."]
              }
            ]
          }
        ]
      },
      {
        id: 7,
        title: "تقييم شامل",
        slides: [
          {
            id: 701,
            lectureId: 7,
            type: SlideType.FINAL_ASSESSMENT,
            title: "الامتحان النهائي: فلسفة الأخلاق",
            subtitle: "اختبار شامل لجميع المحاضرات (التنقيط من 20)",
            assessmentData: {
              passingScore: 10,
              questions: [
                {
                  id: 1,
                  question: "ما هو 'الخير الأسمى' عند أرسطو؟",
                  options: ["اللذة الحسية", "السعادة (النشاط وفق الفضيلة)", "جمع الثروة", "الزهد المطلق"],
                  correctAnswerIndex: 1
                },
                {
                  id: 2,
                  question: "وفقاً لأرسطو، الفضيلة هي:",
                  options: ["معرفة نظرية", "وسط بين رذيلتين (إفراط وتفريط)", "تطبيق صارم للقانون", "موهبة فطرية"],
                  correctAnswerIndex: 1
                },
                {
                  id: 3,
                  question: "من يرى أن الحسن والقبيح صفات عقلية ذاتية في الأفعال؟",
                  options: ["الأشاعرة", "المعتزلة", "الظاهرية", "المرجئة"],
                  correctAnswerIndex: 1
                },
                {
                  id: 4,
                  question: "الأمر المطلق عند كانط يقتضي:",
                  options: [
                    "أن نتصرف لتحقيق مصلحتنا الشخصية",
                    "أن نعامل الإنسانية كغاية لا كوسيلة",
                    "أن نتبع عواطفنا",
                    "أن نحسب نتائج أفعالنا قبل القيام بها"
                  ],
                  correctAnswerIndex: 1
                },
                {
                  id: 5,
                  question: "المبدأ الأساسي في النفعية (Utilitarianism) هو:",
                  options: ["الواجب من أجل الواجب", "أكبر قدر من السعادة لأكبر عدد من الناس", "طاعة الحاكم", "الزهد في الدنيا"],
                  correctAnswerIndex: 1
                },
                {
                  id: 6,
                  question: "ماذا يقصد نيتشه بـ 'أخلاق العبيد'؟",
                  options: [
                    "نظام الرق القديم",
                    "قيم الشفقة والتواضع التي ابتدعها الضعفاء",
                    "العمل الجاد",
                    "طاعة القوانين المدنية"
                  ],
                  correctAnswerIndex: 1
                },
                {
                  id: 7,
                  question: "أي من القضايا التالية تندرج ضمن 'البيوإتيقا'؟",
                  options: ["حقوق العمال", "الاستنساخ والموت الرحيم", "تلوث البيئة", "الحروب الإلكترونية"],
                  correctAnswerIndex: 1
                },
                {
                  id: 8,
                  question: "يرى الأشاعرة أن الحسن والقبيح:",
                  options: ["شرعيان (يعتمدان على الأمر والنهي الإلهي)", "عقليان", "اجتماعيان", "فطريان"],
                  correctAnswerIndex: 0
                },
                {
                  id: 9,
                  question: "الفضائل العقلية عند أرسطو تكتسب بـ:",
                  options: ["التعود والممارسة", "التعليم والتأمل", "الوراثة", "الصدفة"],
                  correctAnswerIndex: 1
                },
                {
                  id: 10,
                  question: "الفرق الجوهري بين أخلاق كانط والأخلاق النفعية هو:",
                  options: [
                    "كانط يركز على النوايا والمبادئ، والنفعية تركز على النتائج",
                    "كانط يركز على النتائج، والنفعية تركز على النوايا",
                    "كلاهما يرفض الدين",
                    "كلاهما يركز على اللذة"
                  ],
                  correctAnswerIndex: 0
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

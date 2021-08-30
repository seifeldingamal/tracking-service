export const statesArabic = [{
    "TICKET_CREATED": 'تم إنشاء الشحنة',
    "PACKAGE_RECEIVED": 'تم استلام الشحنة من التاجر',
    "NOT_YET_SHIPPED": 'لم تخرج الشحنة بعد',
    "OUT_FOR_DELIVERY": 'الشحنة خرجت للتسليم',
    "WAITING_FOR_CUSTOMER_ACTION": 'في انتظار رد العميل',
    "DELIVERED": 'تم التسليم',
    "DELIVERED_TO_SENDER": 'تم استرجاع الشحنة',
    "RECEIVED_DELIVERY_LOCATION": 'تم استلام العنوان',
    "IN_TRANSIT": 'في ترانزيت'
}]

export const states = [
    "TICKET_CREATED",
    "PACKAGE_RECEIVED",
    "NOT_YET_SHIPPED",
    "OUT_FOR_DELIVERY",
    "WAITING_FOR_CUSTOMER_ACTION",
    "DELIVERED",
    "DELIVERED_TO_SENDER",
    "RECEIVED_DELIVERY_LOCATION",
    "IN_TRANSIT"
 ]

export const months = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
]
export const days = [
    "اﻷحد",
    "اﻷثنين",
    "الثلاثاء",
    "اﻷربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
]

export const stateColor = (state) => {
    if (state === states[4]) {
        return '#F9BA2F'
    } else if (state === states[6]) {
        return '#F40E1F'
    } else {
        return '#34B620'
    }
}

export const currentStep = (state) => {
    if (state === states[0]) {
        return 0
    } else if (state === states[1]) {
        return 34
    } else if (state === states[5]) {
        return 100
    } else {
        return 67
    }
}
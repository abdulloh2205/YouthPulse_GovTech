window.calculateNeetRisk = function(profile) {
    let score = 0;
    if (profile.status === 'unemployed' || profile.status === 'neet') score += 60;
    else if (profile.status === 'needs_clarification') score += 40;
    else if (profile.status === 'education') score += 10;

    if (profile.age >= 18 && profile.age <= 22) score += 20;
    else if (profile.age > 22 && profile.age <= 25) score += 10;

    const edu = (profile.education || '').toLowerCase();
    if (!edu || edu.includes("o'rta") || edu.includes("средн")) score += 15;

    score = Math.min(Math.max(score, 5), 98);
    return score;
};

window.generateAiRecommendation = function(profile, lang = 'uz') {
    const occ = (profile.occupation || '').toLowerCase();
    const edu = (profile.education || '').toLowerCase();

    if (profile.status === 'employed' || profile.status === 'entrepreneurship') {
        return lang === 'ru' ? "Рекомендация: Курсы повышения квалификации для карьерного роста." : "Tavsiya: Karyera o'sishi uchun malaka oshirish kurslari.";
    }

    if (occ.includes('dasturchi') || occ.includes('it') || edu.includes('tatu') || occ.includes('программ')) {
        return lang === 'ru' ? "Рекомендация: Стажировка / Вакансия в компаниях-резидентах IT-Park." : "Tavsiya: IT-Park rezident korxonalariga stajirovka / Vakansiya.";
    }

    if (profile.status === 'unemployed' || profile.status === 'neet') {
        return lang === 'ru' ? "Рекомендация: 3-месячные бесплатные профессиональные курсы в моноцентре 'Ишга Мархамат'." : "Tavsiya: Ishga Marhamat monomarkazida 3 oylik bepul kasb kursi.";
    }

    if (profile.status === 'needs_clarification') {
        return lang === 'ru' ? "Рекомендация: Льготная субсидия до 33 млн сумов через 'Молодежную тетрадь'." : "Tavsiya: Yoshlar daftari orqali 33 mln so'mgacha imtiyozli subsidiya.";
    }

    return lang === 'ru' ? "Рекомендация: Приглашение на собеседование в районный центр занятости." : "Tavsiya: Tuman bandlik markaziga suhbatga chaqirish.";
};

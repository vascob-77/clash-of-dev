export async function loadComponent<T extends HTMLElement>(url: string, targetSelector: string): Promise<void> {
  console.log('Chargement du composant depuis', url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur lors du chargement du composant depuis ${url}`);
    }

    const text = await response.text();

    console.log('HTML reçu avec succès', text);

    const templateElement = document.createElement('div');
    templateElement.innerHTML = text;

    const template = templateElement.querySelector('template');
    if (template) {
      const targetElement = document.querySelector<T>(targetSelector);
      if (targetElement) {
        targetElement.innerHTML = template.innerHTML;
        console.log('Template HTML créé avec succès');
      } else {
        console.error(`Cible non trouvée pour le sélecteur : ${targetSelector}`);
      }
    } else {
      console.error('Template non trouvé dans le HTML reçu');
    }
  } catch (error) {
    console.error('Erreur lors du chargement du composant :', error);
  }
}